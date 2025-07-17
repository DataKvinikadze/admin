"use client";

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
import z, { object } from "zod";
import { MethodologyPage } from "@/types/methodology/methodology";
import { Trash2 } from "lucide-react";

const blockSchema = z.discriminatedUnion("type", [
  z.object({
    id: z.string(),
    type: z.literal("header"),
    content: z.string(),
    level: z.number().int().min(1).max(6),
  }),
  z.object({
    id: z.string(),
    type: z.literal("paragraph"),
    content: z.string(),
  }),
  z.object({
    id: z.string(),
    type: z.literal("list"),
    content: z.string(),
    listItems: z.array(z.string()).min(1),
  }),
]);

const formSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  blocks: z.array(blockSchema),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export function MethodologyForm({
  defaultValues,
}: {
  defaultValues: MethodologyPage;
}) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: defaultValues?.title,
      slug: defaultValues?.slug,
      description: defaultValues?.description,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      blocks: defaultValues?.blocks,
    },
  });

  const { control, watch, setValue } = form;
  const { fields, append, remove } = useFieldArray({ control, name: "blocks" });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("SUBMIT:", data);
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter title" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter slug" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={3}
                    placeholder="Enter description"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between items-center">
            <h4 className="text-md font-medium">Content Blocks</h4>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  append({
                    id: crypto.randomUUID(),
                    type: "header",
                    content: "",
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
                    content: "",
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
                    content: "",
                    listItems: [""],
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
                className="bg-white border rounded p-4 space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold capitalize">
                    {type}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => remove(index)}
                    size="icon"
                  >
                    <Trash2 className="text-red-500" />
                  </Button>
                </div>
                <select
                  {...form.register(`blocks.${index}.type`)}
                  className="w-full border rounded px-3 py-1"
                >
                  <option value="paragraph">Paragraph</option>
                  <option value="header">Header</option>
                  <option value="list">List</option>
                </select>
                <Input
                  {...form.register(`blocks.${index}.content`)}
                  placeholder="Block content"
                />
                {type === "header" && (
                  <Input
                    type="number"
                    min={1}
                    max={6}
                    {...form.register(`blocks.${index}.level`)}
                    placeholder="Header Level (1–6)"
                  />
                )}
                {type === "list" && (
                  <div className="space-y-2">
                    {listItems.map((item: any, i: any) => (
                      <div key={i} className="flex items-center gap-2">
                        <Input
                          value={item}
                          onChange={(e) => {
                            const updated = [...listItems];
                            updated[i] = e.target.value;
                            setValue(`blocks.${index}.listItems`, updated);
                          }}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => {
                            if (listItems.length > 1) {
                              const updated = [...listItems];
                              updated.splice(i, 1);
                              setValue(`blocks.${index}.listItems`, updated);
                            }
                          }}
                          disabled={listItems.length <= 1} // 🔒 Prevent removing if only 1 item
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
                          "",
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

          <Button className="w-full h-12 text-base font-semibold">
            Save Changes
          </Button>
        </form>
      </Form>
    </div>
  );
}
