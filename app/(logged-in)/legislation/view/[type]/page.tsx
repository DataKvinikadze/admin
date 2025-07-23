"use client";

import BackButton from "@/components/BackButton";
import LegislationTable from "@/components/legislation/LegislationTable";
import ResearchToolbar from "@/components/ResearchToolbar";
import { guidelineLegislation, InternationalLegislation, nationalLegislation, UpdateLegislation } from "@/data/legislationData";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  const { type } = params;
  if (
    type !== "international" &&
    type !== "national" &&
    type !== "guideline" &&
    type !== "update"
  ) {
    return <div>Invalid research type</div>;
  }

  const returnType = (type: string) => {
    switch (type) {
      case "international":
        return InternationalLegislation;
      case "national":
        return nationalLegislation;
      case "guideline":
        return guidelineLegislation;
      case "update":
        return UpdateLegislation;
      default:
        return [];
    }
  };

  let legislaitonData = returnType(type);

  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div>
      <div className="p-4 space-y-6">
        <h2>Legislation Management</h2>
        <BackButton text="Go Back" link="/" />
        <ResearchToolbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          name={"legislation"}
          url={`/legislation/create`} 
        />
        <LegislationTable
          legislationData={legislaitonData}
          title={`Research - ${type}`}
          limit={10}
          type={type as string}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
};

export default page;
