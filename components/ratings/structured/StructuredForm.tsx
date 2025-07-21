"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { StructuredRating } from "@/types/structuredType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf"];

const formSchema = z.object({
  institution: z.object({
    ka: z.string().min(1, "დასახელება ქართულად სავალდებულოა"),
    en: z.string().min(1, "Institution name in English is required"),
  }),
  ratingTerm: z.string().min(1, "Rating term is required"),
  key: z.string().min(1, "Document key is required"),
  ratingDetails: z.object({
    localCurrency: z.string().min(1, "Local currency is required"),
    localRating: z.string().min(1, "Local rating is required"),
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

const StructuredForm = ({
  defaultValues,
}: {
  defaultValues: StructuredRating;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institution: {
        ka: defaultValues.institution?.ka ?? "",
        en: defaultValues.institution?.en ?? "",
      },
      ratingTerm: defaultValues.ratingTerm ?? "",
      key: defaultValues.key ?? "",
      ratingDetails: {
        localCurrency: defaultValues.ratingDetails?.localCurrency ?? "",
        localRating: defaultValues.ratingDetails?.localRating ?? "",
      },
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="max-w-4xl p-6 md:p-10 bg-white border border-gray-200 rounded-2xl space-y-10"
      >
        <h2 className="text-2xl font-bold text-gray-800">
          Edit Structured Rating
        </h2>

        {/* Institution Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Institution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="institution.en"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution (English)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter institution in English"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="institution.ka"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>დასახელება (ქართული)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="შეიყვანეთ დასახელება ქართულად"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Rating Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Rating Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="ratingTerm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating Term</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Long-term" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="key"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Document Key</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. structured-2025.pdf" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Rating Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Rating Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="ratingDetails.localCurrency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Local Currency</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. GEL" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ratingDetails.localRating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Local Rating</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. A+" {...field} />
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
        </div>

        {/* Submit Button */}
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

export default StructuredForm;
