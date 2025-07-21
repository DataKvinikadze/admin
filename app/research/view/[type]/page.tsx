"use client";

import BackButton from "@/components/BackButton";
import RatingsTable from "@/components/ratings/credit/RatingsTable";
import ResearchTable from "@/components/Research/ResearchTable";
import ResearchToolbar from "@/components/ResearchToolbar";
import {
  creditResearch,
  governanceResearch,
  marketResearch,
  otherResearch,
  policyResearch,
} from "@/data/researchData";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  const { type } = params;

  const returnType = (type: string) => {
    switch (type) {
      case "credit":
        return creditResearch;
      case "market":
        return marketResearch;
      case "governance":
        return governanceResearch;
      case "policy":
        return policyResearch;

      default:
        return [];
    }
  };
  if (
    type !== "credit" &&
    type !== "market" &&
    type !== "governance" &&
    type !== "policy" &&
    type !== "other" &&
    type !== "edit" &&
    type !== "create"
  ) {
    return <div>Invalid research type</div>;
  }

  let researchData = returnType(type || "");

  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <>
      <div className="p-4 space-y-6">
        <h2>Research Management</h2>
        <BackButton text="Go Back" link="/" />
        <ResearchToolbar
          name={"Research"}
          url={"/research/create"}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <ResearchTable
          researchData={researchData}
          title={`Research - ${type}`}
          limit={10}
          type={type as string}
          searchTerm={searchTerm}
        />
      </div>
    </>
  );
};

export default page;
