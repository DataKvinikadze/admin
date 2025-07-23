import BackButton from "@/components/BackButton";
import ResearchForm from "@/components/Research/ResearchForm";
import ResearchTable from "@/components/Research/ResearchTable";
import { ResearchCategory } from "@/types/researchType";
import React from "react";

const page = () => {
  return (
    <div className="p-4 space-y-6">
      <BackButton text="Go Back" link="/research" />
      <ResearchForm
        defaultValues={{
          _id: "",
          author: { en: "", ka: "" },
          category: ResearchCategory.CREDIT,
          key: "",
          publishedDate: "",
          summary: { en: "", ka: "" },
          title: {
            en: "",
            ka: "",
          },
        }}
      />
    </div>
  );
};

export default page;
