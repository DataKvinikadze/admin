"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Trash2 } from "lucide-react";
import { CreateNewsType } from "@/types/newsType";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const localizedString = z.object({
  en: z.string().min(1, "English is required"),
  ka: z.string().min(1, "Georgian is required"),
});

const blockSchema = z.discriminatedUnion("type", [
  z.object({
    id: z.string(),
    type: z.literal("header"),
    content: localizedString,
    level: z.number().min(1).max(6),
  }),
  z.object({
    id: z.string(),
    type: z.literal("paragraph"),
    content: localizedString,
  }),
  z.object({
    id: z.string(),
    type: z.literal("list"),
    content: localizedString,
    listItems: z.array(localizedString).min(1),
  }),
]);

const formSchema = z.object({
  title: localizedString,
  slug: localizedString,
  summary: localizedString,
  description: localizedString,
  blocks: z.array(blockSchema).min(1),
  key: z.string().optional(),
  file: z
    .custom<File>((file) => file instanceof File, {
      message: "Image is required",
    })
    .refine((file) => file.size <= MAX_IMAGE_SIZE, {
      message: "Image must be less than 5MB",
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "Only image files are allowed",
    }),
});

type NewsFormData = z.infer<typeof formSchema>;

const NewsForm = ({ defaultValues }: { defaultValues: CreateNewsType }) => {
  const form = useForm<NewsFormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { control, handleSubmit, watch, setValue } = form;
  const { fields, append, remove } = useFieldArray({ control, name: "blocks" });

  const onSubmit = (data: NewsFormData) => console.log("Submitted:", data);

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl p-6 md:p-10 bg-white border border-gray-200 rounded-2xl space-y-10"
      >
        <h2 className="text-2xl font-bold text-gray-800">Edit News</h2>

        {/* Title Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Title</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={control}
              name="title.en"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title (English)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="title.ka"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>სათაური (ქართული)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Slug Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Slug</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={control}
              name="slug.en"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug (English)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="slug.ka"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>სლაგი (ქართული)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Summary Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={control}
              name="summary.en"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Summary (English)</FormLabel>
                  <FormControl>
                    <Textarea rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="summary.ka"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>რეზიუმე (ქართული)</FormLabel>
                  <FormControl>
                    <Textarea rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* Image Upload */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Image Upload</h3>
          <FormField
            control={control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept={ACCEPTED_IMAGE_TYPES.join(",")}
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Content Blocks */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Content Blocks
          </h3>
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                append({
                  id: crypto.randomUUID(),
                  type: "header",
                  content: { en: "", ka: "" },
                  level: 1,
                })
              }
            >
              + Header
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                append({
                  id: crypto.randomUUID(),
                  type: "paragraph",
                  content: { en: "", ka: "" },
                })
              }
            >
              + Paragraph
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                append({
                  id: crypto.randomUUID(),
                  type: "list",
                  content: { en: "", ka: "" },
                  listItems: [{ en: "", ka: "" }],
                })
              }
            >
              + List
            </Button>
          </div>

          {fields.map((block, index) => {
            const type = watch(`blocks.${index}.type`);
            const listItems = watch(`blocks.${index}.listItems`) || [];

            return (
              <div key={block.id} className="border rounded p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold capitalize">{type}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => remove(index)}
                    size="icon"
                  >
                    <Trash2 className="text-red-500" />
                  </Button>
                </div>

                {/* Block Type Selector */}
                <FormField
                  control={control}
                  name={`blocks.${index}.type`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full border px-3 py-2 rounded"
                        >
                          <option value="header">Header</option>
                          <option value="paragraph">Paragraph</option>
                          <option value="list">List</option>
                        </select>
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Block Content Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={control}
                    name={`blocks.${index}.content.en`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content (English)</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name={`blocks.${index}.content.ka`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content (Georgian)</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Header Level */}
                {type === "header" && (
                  <FormField
                    control={control}
                    name={`blocks.${index}.level`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Header Level (1-6)</FormLabel>
                        <FormControl>
                          <Input type="number" min={1} max={6} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {/* List Items */}
                {type === "list" && (
                  <div className="space-y-2">
                    {listItems.map((_: any, i: number) => (
                      <div className="grid grid-cols-2 gap-2" key={i}>
                        <FormField
                          control={control}
                          name={`blocks.${index}.listItems.${i}.en`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Item (EN)</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={control}
                          name={`blocks.${index}.listItems.${i}.ka`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Item (KA)</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        setValue(`blocks.${index}.listItems`, [
                          ...listItems,
                          { en: "", ka: "" },
                        ])
                      }
                    >
                      + Add List Item
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div>
          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90"
          >
            Save News
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewsForm;
