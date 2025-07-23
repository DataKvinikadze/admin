import BackButton from "@/components/BackButton";
import NewsForm from "@/components/news/NewsForm";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-w-4xl px-4 py-6">
        <BackButton text="Go Back" link="/news" />
        <NewsForm
          defaultValues={{
            key: "",
            blocks: [],
            slug: { en: "", ka: "" },
            summery: { en: "", ka: "" },
            title: { en: "", ka: "" },
          }}
        />
      </div>
    </div>
  );
};

export default page;
