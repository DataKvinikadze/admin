"use client";

import BackButton from "@/components/BackButton";
import GovernanceForm from "@/components/ratings/governance/GovernanceForm";
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
import { governanceData } from "@/data/governanceData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

const Page = () => {
  const params = useParams();
  const id = params?.id as string;

  const rating = governanceData.find((rating) => String(rating._id) === id);
  if (!rating) {
    return <div>Rating not found</div>;
  }

  return (
    <div className="max-w-4xl px-4 py-6">
      <BackButton text="Go Back To Ratings" link="/ratings/governance" />
      <h3 className="text-2xl font-semibold mb-6 mt-4">
        Edit Structured Rating
      </h3>
      <GovernanceForm defaultValues={rating} />
    </div>
  );
};

export default Page;
