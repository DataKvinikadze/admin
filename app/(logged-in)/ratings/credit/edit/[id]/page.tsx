"use client";

import BackButton from "@/components/BackButton";
import React from "react";
import { useParams } from "next/navigation";
import { ratingData } from "@/data/creditData";
import CreditForm from "@/components/ratings/credit/CreditForm";


const page = () => {
  const params = useParams();
  const {id} = params
  const rating = ratingData.find((rating) => String(rating.id) === id);


  if (!rating) {
    return <div className="text-center text-red-500">Rating not found</div>;
  }

  return (
    <div className="max-w-4xl p-6">
      <BackButton text="Go Back To Ratings" link="/ratings/credit" />
      <h3 className="text-2xl font-semibold mb-6 mt-4">Edit Rating</h3>
      <CreditForm defaultValues={rating}/>
    </div>
  );
};

export default page;
