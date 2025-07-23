"use client";
import BackButton from "@/components/BackButton";
import RatingsTable from "@/components/ratings/credit/RatingsTable";
import ResearchToolbar from "@/components/ResearchToolbar";
import TablePagination from "@/components/TablePagination";
import { ratingData } from "@/data/creditData";
import React from "react";

const page = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <div>
      <div className="p-4 space-y-6">
        <h2>Credit Management</h2>
        <BackButton text="Go Back" link="/" />
        <ResearchToolbar
          name={"Rating"}
          url={"credit/create"}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <RatingsTable
          creditData={ratingData}
          searchTerm={searchTerm}
        />
        <TablePagination />
      </div>
    </div>
  );
};

export default page;
