"use client";

import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { structuredData } from "@/data/ratings/structured";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  institution: z.object({
    ka: z.string().min(1, "Institution name in Georgian is required"),
    en: z.string().min(1, "Institution name in English is required"),
  }),
  ratingTerm: z.string().min(1, "Rating term is required"),
  publishedDate: z.string().min(1, "Published date is required"),
  key: z.string().min(1, "Document key is required"),
  ratingDetails: z.object({
    localCurrency: z.string().min(1, "Local currency is required"),
    localRating: z.string().min(1, "Local rating is required"),
  }),
});

const page = () => {
  const params = useParams();
  const id = params?.id as string;

  const rating = structuredData.find((rating) => String(rating._id) === id);
  if (!rating) {
    return <div>Rating not found</div>;
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institution: {
        ka: rating.institution?.ka ?? "",
        en: rating.institution?.en ?? "",
      },
      ratingTerm: rating.ratingTerm ?? "",
      publishedDate: rating.publishedDate ?? "",
      key: rating.key ?? "",
      ratingDetails: {
        localCurrency: rating.ratingDetails?.localCurrency ?? "",
        localRating: rating.ratingDetails?.localRating ?? "",
      },
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div className="max-w-4xl px-4 py-6">
      <BackButton text="Go Back To Ratings" link="/ratings-structured" />
      <h3 className="text-2xl font-semibold mb-6 mt-4">
        Edit Structured Rating
      </h3>

      <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Institution (Georgian)
              </label>
              <input
                {...form.register("institution.ka")}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Institution (English)
              </label>
              <input
                {...form.register("institution.en")}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating Term
              </label>
              <input
                {...form.register("ratingTerm")}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Published Date
              </label>
              <input
                type="date"
                {...form.register("publishedDate")}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Document Key
              </label>
              <input
                {...form.register("key")}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Local Currency
              </label>
              <input
                {...form.register("ratingDetails.localCurrency")}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Local Rating
              </label>
              <input
                {...form.register("ratingDetails.localRating")}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <Button className="w-full h-12 text-base font-medium">
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
