"use client";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { nationalLegislation } from "@/data/legislation/legislation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form"; // ✅ Form from shadcn/ui
import z from "zod";

const formSchema = z.object({
  title: z.object({
    en: z.string().min(2).max(100),
    ka: z.string().min(2).max(100).optional(),
  }),
  summary: z.object({
    en: z.string().min(10).max(500),
    ka: z.string().min(10).max(500).optional(),
  }),
  documentType: z.string().min(2).max(100),
  authority: z.string().min(2).max(100),
  publishedDate: z.date(),
});

const page = () => {
  const param = useParams();
  const { id } = param;
  const legislation = nationalLegislation.find((item) => item.id === id);
  if (!legislation) {
    return (
      <div className="text-center py-12 text-lg text-muted-foreground">
        Research not found!
      </div>
    );
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: { en: legislation.title.en },
      summary: { en: legislation.summary.en },
      authority: legislation.authority,
      documentType: legislation.documentType,
      publishedDate: new Date(legislation.publishedDate),
    },
  });

  return (
    <div className="max-w-4xl px-4 p-6">
      <BackButton text="Go Back To Legislation" link="/legislation" />
      <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(() => {})}>
            <FormField
              control={form.control}
              name="title.en"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title (English)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="summary.en"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Summary (English)</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={3} placeholder="Enter summary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="authority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Authotity</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Authotity" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="documentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Document Type</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter Document Type" />
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
                    <Input
                      type="date"
                      {...field}
                      value={
                        field.value
                          ? new Date(field.value).toISOString().slice(0, 10)
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full h-12 text-base font-semibold">
              Save Changes
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default page;
