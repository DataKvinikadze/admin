"use client";
import BackButton from "@/components/BackButton";
import { structuredData } from "@/data/structuredData";
import { useParams } from "next/navigation";
import StructuredForm from "@/components/ratings/structured/StructuredForm";

const Page = () => {
  const params = useParams();
  const id = params?.id as string;

  const rating = structuredData.find((rating) => String(rating._id) === id);
  if (!rating) return <div>Rating not found</div>;

  return (
    <div className="max-w-4xl px-4 py-6">
      <BackButton text="Go Back To Ratings" link="/ratings/structured" />
      <h3 className="text-2xl font-semibold mb-6 mt-4">
        Edit Structured Rating
      </h3>
      <StructuredForm defaultValues={rating} />
    </div>
  );
};

export default Page;
