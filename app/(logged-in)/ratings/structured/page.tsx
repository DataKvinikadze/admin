"use client";
import BackButton from "@/components/BackButton";
import StructuredTable from "@/components/ratings/structured/StructuredTable";
import ResearchToolbar from "@/components/ResearchToolbar";
import TablePagination from "@/components/TablePagination";
import { structuredData } from "@/data/structuredData";
import React from "react";

const page = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <div className="p-4 space-y-6">
      <h2>Structured Management</h2>
      <BackButton text="Go Back" link="/ratings/structured" />
      <ResearchToolbar
        name={"Rating"}
        url={"structured/create"}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <StructuredTable
        structuredData={structuredData}
        searchTerm={searchTerm}
      />
      <TablePagination />
    </div>
  );
};

export default page;
