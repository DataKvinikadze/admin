"use client";

import BackButton from "@/components/BackButton";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ratingData } from "@/data/ratings/ratings";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  institution: z.string().min(1, "Institution is required"),
  ratingTerm: z.string().min(1, "Rating term is required"),
  publishedDate: z.string().min(1, "Published date is required"),
  intlForeignCurrency: z
    .string()
    .min(1, "International foreign currency is required"),
  intlLocalCurrency: z
    .string()
    .min(1, "International local currency is required"),
  intlOutlook: z.string().min(1, "International outlook is required"),
  nationalRating: z.string().min(1, "National rating is required"),
  nationalOutlook: z.string().min(1, "National outlook is required"),
  sponsoredSupport: z.string().min(1, "Sponsored support is required"),
  standAlone: z.string().min(1, "Stand alone rating is required"),
});

const page = () => {
  const params = useParams();
  const id = params?.id as string;
  const rating = ratingData.find((rating) => String(rating.id) === params.id);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institution: rating?.institution || "",
      ratingTerm: rating?.ratingTerm || "",
      publishedDate: rating?.publishedDate || "",
      intlForeignCurrency: rating?.intlForeignCurrency || "",
      intlLocalCurrency: rating?.intlLocalCurrency || "",
      intlOutlook: rating?.intlOutlook || "",
      nationalRating: rating?.nationalRating || "",
      nationalOutlook: rating?.nationalOutlook || "",
      sponsoredSupport: rating?.sponsoredSupport || "",
      standAlone: rating?.standAlone || "",
    },
  });

  const HandleSubmit = (data: z.infer<typeof formSchema>) => {};

  if (!rating) {
    return <div className="text-center text-red-500">Rating not found</div>;
  }

  return (
    <div className="max-w-4xl p-6">
      <BackButton text="Go Back To Ratings" link="/ratings-credit" />
      <h3 className="text-2xl font-semibold mb-6 mt-4">Edit Rating</h3>

      <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
        <Form {...form}>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={form.handleSubmit(HandleSubmit)}
          >
            <FormField
              control={form.control}
              name="institution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution</FormLabel>
                  <FormControl>
                    <Input placeholder="Institution" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ratingTerm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating Term</FormLabel>
                  <FormControl>
                    <Input placeholder="Rating Term" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="publishedDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Published Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="intlForeignCurrency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Intl Foreign Currency</FormLabel>
                  <FormControl>
                    <Input placeholder="Intl Foreign Currency" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="intlLocalCurrency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Intl Local Currency</FormLabel>
                  <FormControl>
                    <Input placeholder="Intl Local Currency" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="intlOutlook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Intl Outlook</FormLabel>
                  <FormControl>
                    <Input placeholder="Intl Outlook" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nationalRating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>National Rating</FormLabel>
                  <FormControl>
                    <Input placeholder="National Rating" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nationalOutlook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>National Outlook</FormLabel>
                  <FormControl>
                    <Input placeholder="National Outlook" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sponsoredSupport"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sponsored Support</FormLabel>
                  <FormControl>
                    <Input placeholder="Sponsored Support" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="standAlone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stand Alone Rating</FormLabel>
                  <FormControl>
                    <Input placeholder="Stand Alone Rating" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="md:col-span-2">
              <Button className="w-full h-12 text-base font-medium">
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default page;
