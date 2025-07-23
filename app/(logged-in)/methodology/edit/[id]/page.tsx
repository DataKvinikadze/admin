"use client";

import { useParams } from "next/navigation";
import BackButton from "@/components/BackButton";
import { methodologyData } from "@/data/methodologyData";
import { MethodologyForm } from "@/components/methodology/MethodologyForm";
const Page = () => {
  const param = useParams();
  const { id } = param;
  const methodology = methodologyData.find((item) => item.id === id);

  if (!methodology) {
    return (
      <div className="text-center py-12 text-lg text-muted-foreground">
        Methodology Not Found!
      </div>
    );
  }

  return (
    <div className="max-w-4xl px-4 py-6">
      <BackButton text="Go Back To Methodology" link="/methodology" />
      <MethodologyForm
        defaultValues={{
          blocks: methodology.blocks,
          description: {
            en: methodology.description.en,
            ka: methodology.description.ka,
          },
          key: methodology.key,
          slug: { en: methodology.slug.en, ka: methodology.slug.ka },
          title: { en: methodology.title.en, ka: methodology.title.ka },
        }}
      />
    </div>
  );
};

export default Page;
