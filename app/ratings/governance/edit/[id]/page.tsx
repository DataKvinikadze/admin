"use client";

import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { governanceData } from "@/data/ratings/governance";
import { structuredData } from "@/data/ratings/structured";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  institution: z.object({
    ka: z.string(),
    en: z.string(),
  }),
  ratingTerm: z.string(),
  publishedDate: z.string(),
  key: z.string(),
  ratingDetails: z.object({
    shareholdersPoint: z.number(),
    shareholdersView: z.string(),
    disclosurePoint: z.number(),
    disclosureView: z.string(),
    stakeholdersPoint: z.number(),
    stakeholdersView: z.string(),
    boardPoint: z.number(),
    boardView: z.string(),
    institutionPoint: z.number(),
    institutionView: z.string(),
  }),
});

const page = () => {
  const params = useParams();
  const id = params?.id as string;

  const rating = governanceData.find((rating) => String(rating._id) === id);
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
      key: rating.key,
      ratingDetails: {
        shareholdersPoint: rating.ratingDetails.shareholdersPoint,
        shareholdersView: rating.ratingDetails.shareholdersView,
        disclosurePoint: rating.ratingDetails.disclosurePoint,
        disclosureView: rating.ratingDetails.disclosureView,
        stakeholdersPoint: rating.ratingDetails.stakeholdersPoint,
        stakeholdersView: rating.ratingDetails.stakeholdersView,
        boardPoint: rating.ratingDetails.boardPoint,
        boardView: rating.ratingDetails.boardView,
        institutionPoint: rating.ratingDetails.institutionPoint,
        institutionView: rating.ratingDetails.institutionView,
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
      <div>
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

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Key (PDF URL)
            </label>
            <input
              {...form.register("key")}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Shareholders */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Shareholders Point
            </label>
            <input
              type="number"
              {...form.register("ratingDetails.shareholdersPoint")}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Shareholders View
            </label>
            <input
              {...form.register("ratingDetails.shareholdersView")}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Disclosure */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Disclosure Point
            </label>
            <input
              type="number"
              {...form.register("ratingDetails.disclosurePoint")}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Disclosure View
            </label>
            <input
              {...form.register("ratingDetails.disclosureView")}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Stakeholders */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stakeholders Point
            </label>
            <input
              type="number"
              {...form.register("ratingDetails.stakeholdersPoint")}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stakeholders View
            </label>
            <input
              {...form.register("ratingDetails.stakeholdersView")}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Board */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Board Point
            </label>
            <input
              type="number"
              {...form.register("ratingDetails.boardPoint")}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Board View
            </label>
            <input
              {...form.register("ratingDetails.boardView")}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Institution */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Institution Point
            </label>
            <input
              type="number"
              {...form.register("ratingDetails.institutionPoint")}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Institution View
            </label>
            <input
              {...form.register("ratingDetails.institutionView")}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <Button className="w-full h-12 text-base font-medium mt-4">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
