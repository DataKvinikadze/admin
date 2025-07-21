"use client";
import { useForm } from "react-hook-form";
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
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { LegislationEditType } from "@/types/legislationType";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf"];

const formSchema = z.object({
  title: z.object({
    en: z
      .string()
      .min(2, { message: "Title (English) must be at least 2 characters" })
      .max(100, { message: "Title must be under 100 characters" }),
    ka: z
      .string()
      .min(2, { message: "სათაური (ქართული) მინიმუმ 2 სიმბოლო უნდა იყოს" })
      .max(100, { message: "სათაური მაქსიმუმ 100 სიმბოლო უნდა იყოს" }),
  }),
  summary: z.object({
    en: z
      .string()
      .min(10, { message: "Summary (English) must be at least 10 characters" })
      .max(500, { message: "Summary must be under 500 characters" }),
    ka: z
      .string()
      .min(10, {
        message: "შინაარსი (ქართული) მინიმუმ 10 სიმბოლო უნდა იყოს",
      })
      .max(500, {
        message: "შინაარსი მაქსიმუმ 500 სიმბოლო უნდა იყოს",
      })
      .optional(),
  }),
  documentType: z
    .string()
    .min(2, { message: "Document Type must be at least 2 characters" })
    .max(100, { message: "Document Type must be under 100 characters" }),
  authority: z.object({
    en: z
      .string()
      .min(2, {
        message: "Authority (English) must be at least 2 characters",
      })
      .max(100, { message: "Authority must be under 100 characters" }),
    ka: z
      .string()
      .min(2, {
        message: "მარეგულირებელი ორგანო (ქართული) მინიმუმ 2 სიმბოლო უნდა იყოს",
      })
      .max(100, {
        message: "მარეგულირებელი ორგანო მაქსიმუმ 100 სიმბოლო უნდა იყოს",
      }),
  }),
  file: z
    .custom<File>((file) => file instanceof File, {
      message: "File is required",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File must be less than 5MB",
    })
    .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "Only PDF files are allowed",
    }),
});

const LegislationForm = ({
  defaultValues,
}: {
  defaultValues: LegislationEditType;
}) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: { en: defaultValues.title.en, ka: defaultValues.title.ka },
      summary: {
        en: defaultValues.summary.en,
        ka: defaultValues.summary.ka,
      },
      authority: {
        en: defaultValues.authority.en,
        ka: defaultValues.authority.ka,
      },
      documentType: defaultValues.documentType,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => {})}
        className="max-w-3xl p-6 md:p-10 bg-white border border-gray-200 rounded-2xl space-y-10"
      >
        <h2 className="text-2xl font-bold text-gray-800">Edit Legislation</h2>

        {/* Title Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Title</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="title.en"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title (English)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter English title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title.ka"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>სათაური (ქართული)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="შეიყვანეთ სათაური" />
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
              control={form.control}
              name="summary.en"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Summary (English)</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={4} placeholder="Enter summary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="summary.ka"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>შინაარსი (ქართული)</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      rows={4}
                      placeholder="შეიყვანეთ შინაარსი"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Authority Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Authority</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="authority.en"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Authority (English)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter authority name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="authority.ka"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>მარეგულირებელი ორგანო (ქართული)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="შეიყვანეთ მარეგულირებელი ორგანო"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Document Type */}
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="documentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Document Type</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter document type" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">File Upload</h3>
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload File</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept=".pdf,.docx"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit */}
        <div>
          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LegislationForm;
