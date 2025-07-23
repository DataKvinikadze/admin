"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { RatingEntry } from "@/types/ratingsType";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf"];

const formSchema = z.object({
  institution: z.object({
    en: z
      .string()
      .min(2, { message: "Institution name must be at least 2 characters" })
      .max(100, { message: "Institution name must be under 100 characters" }),
    ka: z
      .string()
      .min(2, { message: "დასახელება მინიმუმ 2 სიმბოლო უნდა იყოს" })
      .max(100, { message: "დასახელება მაქსიმუმ 100 სიმბოლო უნდა იყოს" }),
  }),
  ratingTerm: z.string().min(1, { message: "Rating term is required" }),
  ratingDetails: z.object({
    intlForeignCurrency: z
      .string()
      .min(1, { message: "Intl Foreign Currency is required" }),
    intlLocalCurrency: z
      .string()
      .min(1, { message: "Intl Local Currency is required" }),
    intlOutlook: z.string().min(1, { message: "Intl Outlook is required" }),
    nationalRating: z
      .string()
      .min(1, { message: "National Rating is required" }),
    nationalOutlook: z
      .string()
      .min(1, { message: "National Outlook is required" }),
    sponsoredSupport: z
      .string()
      .min(1, { message: "Sponsored Support is required" }),
    standAlone: z
      .string()
      .min(1, { message: "Stand Alone Rating is required" }),
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

const CreditForm = ({ defaultValues }: { defaultValues: RatingEntry }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institution: {
        en: defaultValues.institution.en,
        ka: defaultValues.institution.ka,
      },
      ratingTerm: defaultValues.ratingTerm || "",
      ratingDetails: {
        intlForeignCurrency:
          defaultValues.ratingDetails.intlForeignCurrency || "",
        intlLocalCurrency: defaultValues.ratingDetails.intlLocalCurrency || "",
        intlOutlook: defaultValues.ratingDetails.intlOutlook || "",
        nationalRating: defaultValues.ratingDetails.nationalOutlook || "",
        nationalOutlook: defaultValues.ratingDetails.nationalRating || "",
        sponsoredSupport: defaultValues.ratingDetails.sponsoredSupport || "",
        standAlone: defaultValues.ratingDetails.standAlone || "",
      },
    },
  });

  const HandleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(HandleSubmit)}
        className="max-w-4xl p-6 md:p-10 bg-white border border-gray-200 rounded-2xl space-y-10"
      >
        <h2 className="text-2xl font-bold text-gray-800">Edit Credit Rating</h2>

        {/* Institution Fields */}
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
                      placeholder="Enter institution name in English"
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
                      placeholder="შეიყვანეთ დაწესებულების დასახელება"
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
          </div>
        </div>

        {/* International Ratings */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">
            International Ratings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="ratingDetails.intlForeignCurrency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Foreign Currency</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. BBB+" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ratingDetails.intlLocalCurrency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Local Currency</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. A-" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ratingDetails.intlOutlook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Outlook</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Stable" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* National Ratings */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">
            National Ratings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="ratingDetails.nationalRating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>National Rating</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. AA+" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ratingDetails.nationalOutlook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>National Outlook</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Positive" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Additional Ratings */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Additional Ratings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="ratingDetails.sponsoredSupport"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sponsored Support</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. High" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ratingDetails.standAlone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stand Alone Rating</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. B+" {...field} />
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
                      onChange={(e) =>
                        field.onChange(e.target.files?.[0])
                      }
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

export default CreditForm;
