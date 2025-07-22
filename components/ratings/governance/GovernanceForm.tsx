"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GovernanceRating } from "@/types/governanceType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import React from "react";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf"];

const formSchema = z.object({
  institution: z.object({
    ka: z
      .string()
      .min(2, { message: "დასახელება მინიმუმ 2 სიმბოლო უნდა იყოს" }),
    en: z
      .string()
      .min(2, { message: "Institution name must be at least 2 characters" }),
  }),
  ratingTerm: z.string().min(1, { message: "Rating term is required" }),
  ratingDetails: z.object({
    shareholdersPoint: z.number().min(0, { message: "Required" }),
    shareholdersView: z.string().min(1, { message: "Required" }),
    disclosurePoint: z.number().min(0, { message: "Required" }),
    disclosureView: z.string().min(1, { message: "Required" }),
    stakeholdersPoint: z.number().min(0, { message: "Required" }),
    stakeholdersView: z.string().min(1, { message: "Required" }),
    boardPoint: z.number().min(0, { message: "Required" }),
    boardView: z.string().min(1, { message: "Required" }),
    institutionPoint: z.number().min(0, { message: "Required" }),
    institutionView: z.string().min(1, { message: "Required" }),
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

const GovernanceForm = ({
  defaultValues,
}: {
  defaultValues: GovernanceRating;
}) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institution: {
        en: defaultValues.institution.en,
        ka: defaultValues.institution.ka,
      },
      ratingDetails: {
        boardPoint: defaultValues.ratingDetails.boardPoint,
        disclosurePoint: defaultValues.ratingDetails.disclosurePoint,
        disclosureView: defaultValues.ratingDetails.disclosureView,
        shareholdersPoint: defaultValues.ratingDetails.shareholdersPoint,
        shareholdersView: defaultValues.ratingDetails.shareholdersView,
        stakeholdersPoint: defaultValues.ratingDetails.stakeholdersPoint,
        stakeholdersView: defaultValues.ratingDetails.stakeholdersView,
        boardView: defaultValues.ratingDetails.boardView,
        institutionPoint: defaultValues.ratingDetails.institutionPoint,
        institutionView: defaultValues.ratingDetails.institutionView,
      },
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Submitted:", data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="max-w-4xl p-6 md:p-10 bg-white border border-gray-200 rounded-2xl space-y-10"
      >
        <h2 className="text-2xl font-bold text-gray-800">
          Edit Governance Rating
        </h2>

        {/* Institution */}
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
          </div>
        </div>

        {/* Rating Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Rating Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Shareholders */}
            <FormField
              control={form.control}
              name="ratingDetails.shareholdersPoint"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shareholders Point</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 85" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ratingDetails.shareholdersView"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shareholders View</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Strong control and transparency"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Disclosure */}
            <FormField
              control={form.control}
              name="ratingDetails.disclosurePoint"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Disclosure Point</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 78" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ratingDetails.disclosureView"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Disclosure View</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Timely and complete reports"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Stakeholders */}
            <FormField
              control={form.control}
              name="ratingDetails.stakeholdersPoint"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stakeholders Point</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 82" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ratingDetails.stakeholdersView"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stakeholders View</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Good stakeholder alignment"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Board */}
            <FormField
              control={form.control}
              name="ratingDetails.boardPoint"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Board Point</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 88" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ratingDetails.boardView"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Board View</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Balanced, experienced board"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Institution */}
            <FormField
              control={form.control}
              name="ratingDetails.institutionPoint"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution Point</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 90" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ratingDetails.institutionView"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution View</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Strong internal governance"
                      {...field}
                    />
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

export default GovernanceForm;
