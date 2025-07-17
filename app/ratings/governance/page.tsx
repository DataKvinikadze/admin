import BackButton from "@/components/BackButton";
import GovernanceTable from "@/components/ratings/GovernanceTable";
import TablePagination from "@/components/TablePagination";
import React from "react";

const page = () => {
  return (
    <div>
      <BackButton text="Go Back" link="/" />
      <GovernanceTable title="Governance Ratings" limit={10} />
      <TablePagination />
    </div>
  );
};

export default page;
