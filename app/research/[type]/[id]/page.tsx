"use client";

import BackButton from "@/components/BackButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";
import { creditResearch } from "@/data/research/research";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import ResearchForm from "@/components/Research/ResearchForm";

const formSchema = z.object({
  title: z.object({
    en: z.string().min(2).max(100),
  }),
  summary: z.object({
    en: z.string().min(10).max(500),
  }),
  author: z.string().min(2).max(100),
  publishedDate: z.date(),
});

const page = () => {
  const param = useParams();
  const { id } = param;
  const research = creditResearch.find((item) => item._id === id);

  if (!research) {
    return (
      <div className="text-center py-12 text-lg text-muted-foreground">
        Research not found
      </div>
    );
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: { en: research.title.en },
      summary: { en: research.summary.en },
      author: research.author,
      publishedDate: new Date(research.publishedDate),
    },
  });

  return (
    <div className="max-w-4xl px-4 py-10">
      <BackButton text="Go Back To Research" link="/research" />
      <h3 className="text-3xl font-bold mt-6 mb-8 tracking-tight">
        Edit Research
      </h3>
      <ResearchForm form={form} />
    </div>
  );
};

export default page;
