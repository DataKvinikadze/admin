import BackButton from "@/components/BackButton";
import CreditForm from "@/components/ratings/credit/CreditForm";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Create Page</h1>
      <BackButton link={"/ratings/credit"} text="Go Back" />
      <CreditForm
        defaultValues={{
          id: "",
          institution: "",
          intlForeignCurrency: "",
          intlLocalCurrency: "",
          intlOutlook: "",
          nationalOutlook: "",
          nationalRating: "",
          publishedDate: "",
          ratingTerm: "",
          sponsoredSupport: "",
          standAlone: "",
        }}
      />
    </div>
  );
};

export default page;
