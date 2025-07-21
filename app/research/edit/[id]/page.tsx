"use client";

import BackButton from "@/components/BackButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";
import { creditResearch } from "@/data/researchData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import ResearchForm from "@/components/Research/ResearchForm";



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

  return (
    <div className="max-w-4xl px-4 py-10">
      <BackButton text="Go Back To Research" link="/research" />
      <ResearchForm defaultValues={research} />
    </div>
  );
};

export default page;
