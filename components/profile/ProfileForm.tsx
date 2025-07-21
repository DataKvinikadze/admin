"use client";

import { useForm } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  Form,
  FormMessage,
  FormControl,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});

type FormData = z.infer<typeof formSchema>;

const ProfileForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "data",
      lastName: "kvinikadze",
      email: "datakvinikadze07@gmail.com",
    },
  });

  const onSubmit = (values: FormData) => {
    console.log("✅ Form Submitted", values);
  };

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-xl p-6 md:p-10 bg-white border border-gray-200 rounded-2xl space-y-8"
        >
          <h2 className="text-2xl font-bold text-gray-800">User Info</h2>

          <div className="space-y-6">
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your first name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your last name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full h-12 text-base font-semibold">
            Save Changes
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
