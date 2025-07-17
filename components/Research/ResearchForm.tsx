import React from "react";
import { Form } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

import { UseFormReturn } from "react-hook-form";

interface ResearchFormProps {
  form: UseFormReturn<any>;
}

const ResearchForm: React.FC<ResearchFormProps> = ({ form }) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-6">
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
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter author" />
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
  );
};

export default ResearchForm;
