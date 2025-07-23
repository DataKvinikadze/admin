"use client";

import React, { useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2 } from "lucide-react";
import { z } from "zod";
import { CreateMethodologyType } from "@/types/methodologyType";

// Multilingual string schema
const localizedString = z.object({
  en: z.string("Must be a string").min(1, "English Version is Required"),
  ka: z.string("Must be a string").min(1, "Georgian Version is Required"),
});

// Discriminated union for content blocks
const blockSchema = z.discriminatedUnion("type", [
  z.object({
    id: z.string(),
    type: z.literal("header"),
    content: localizedString,
    level: z.number().min(1, "minimum 1").max(6, "maximum 6"),
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

// Full form schema
const formSchema = z.object({
  title: localizedString,
  slug: localizedString,
  description: localizedString,
  blocks: z.array(blockSchema).min(1),
  key: z.string().optional(),
});

// Normalize blocks to ensure level and listItems exist
const normalizeBlocks = (blocks: CreateMethodologyType["blocks"]) =>
  blocks.map((block) => {
    if (block.type === "header") {
      return {
        ...block,
        level: block.level ?? 1,
      };
    }
    if (block.type === "list") {
      return {
        ...block,
        listItems: block.listItems?.map((item) => ({
          en: item.en ?? "",
          ka: item.ka ?? "",
        })) ?? [{ en: "", ka: "" }],
      };
    }
    return block;
  });

export function MethodologyForm({
  defaultValues,
}: {
  defaultValues: CreateMethodologyType;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      blocks: normalizeBlocks(defaultValues.blocks),
      description: {
        en: defaultValues.description.en,
        ka: defaultValues.description.ka,
      },
      key: defaultValues.key,
      slug: { en: defaultValues.slug.en, ka: defaultValues.slug.ka },
      title: { en: defaultValues.title.en, ka: defaultValues.title.ka },
    },
  });

  const { control, watch, setValue } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "blocks",
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("✅ SUBMIT", data);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 space-y-10">
      <h2 className="text-2xl font-bold text-gray-800">Edit Methodology</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          {/* Section: Title & Slug */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-700">
              Title & Slug
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <FormField
                control={control}
                name="title.en"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title (English)</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter title in English" />
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
                    <FormLabel>Title (Georgian)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="შეიყვანეთ სათაური ქართულად"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Slug */}
              <FormField
                control={control}
                name="slug.en"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug (English)</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter slug in English" />
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
                    <FormLabel>Slug (Georgian)</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="შეიყვანეთ slug ქართულად" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Section: Description */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-700">Description</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={control}
                name="description.en"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (English)</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter description in English"
                        rows={4}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="description.ka"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (Georgian)</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="შეიყვანეთ აღწერა ქართულად"
                        rows={4}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Section: Content Blocks */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-700">
                Content Blocks
              </h3>
              <div className="flex gap-2">
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
                  Add Header
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
                  Add Paragraph
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
                  Add List
                </Button>
              </div>
            </div>

            {fields.map((block, index) => {
              const type = watch(`blocks.${index}.type`);
              const listItems = watch(`blocks.${index}.listItems`) || [];

              return (
                <div
                  key={block.id}
                  className="border border-gray-200 rounded-xl p-6 space-y-6"
                >
                  <div className="flex justify-between">
                    <span className="capitalize font-semibold text-gray-800">
                      {type}
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => remove(index)}
                    >
                      <Trash2 className="text-red-500" />
                    </Button>
                  </div>

                  {/* Type selector */}
                  <FormField
                    control={control}
                    name={`blocks.${index}.type`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Block Type</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full border px-3 py-2 rounded-md text-sm"
                          >
                            <option value="header">Header</option>
                            <option value="paragraph">Paragraph</option>
                            <option value="list">List</option>
                          </select>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* Multilingual content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={control}
                      name={`blocks.${index}.content.en`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content (English)</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter content in English"
                            />
                          </FormControl>
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
                            <Input
                              {...field}
                              placeholder="შეიყვანეთ შინაარსი ქართულად"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Header level */}
                  {type === "header" && (
                    <FormField
                      control={control}
                      name={`blocks.${index}.level`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Header Level (1–6)</FormLabel>
                          <FormControl>
                            <Input type="number" min={1} max={6} {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  )}

                  {/* List items */}
                  {type === "list" && (
                    <div className="space-y-3">
                      {listItems.map((_, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-2 md:grid-cols-3 gap-4 items-end"
                        >
                          <FormField
                            control={control}
                            name={`blocks.${index}.listItems.${i}.en`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Item (English)</FormLabel>
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
                                <FormLabel>Item (Georgian)</FormLabel>
                                <FormControl>
                                  <Input {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              if (listItems.length > 1) {
                                const updated = [...listItems];
                                updated.splice(i, 1);
                                setValue(`blocks.${index}.listItems`, updated);
                              }
                            }}
                          >
                            <Trash2 className="text-red-500" />
                          </Button>
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

          {/* Submit */}
          <div>
            <Button
              type="submit"
              className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90"
            >
              Save Methodology
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
