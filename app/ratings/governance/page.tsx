"use client";
import BackButton from "@/components/BackButton";
import GovernanceTable from "@/components/ratings/governance/GovernanceTable";
import ResearchToolbar from "@/components/ResearchToolbar";
import TablePagination from "@/components/TablePagination";
import { governanceData } from "@/data/governanceData";
import React from "react";

const page = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <div className="p-4 space-y-6">
      <h2>Governance Management</h2>
      <BackButton text="Go Back" link="/" />
      <ResearchToolbar
        url={"governance/create"}
        name={"Rating"}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <GovernanceTable govarnceData={governanceData} searchTerm={searchTerm} />
      <TablePagination />
    </div>
  );
};

export default page;
