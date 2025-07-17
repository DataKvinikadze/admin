import BackButton from "@/components/BackButton";

import RatingsTable from "@/components/ratings/RatingsTable";
import TablePagination from "@/components/TablePagination";
import React from "react";

const page = () => {
  return (
    <div>
      <BackButton text="Go Back" link="/" />
      <RatingsTable title="Custom Ratings Title" limit={5} />
      <TablePagination />
    </div>
  );
};

export default page;
