"use client";
import BackButton from "@/components/BackButton";
import { nationalLegislation } from "@/data/legislationData";
import { useParams } from "next/navigation";
import LegislationForm from "@/components/legislation/LegislationForm";


const page = () => {
  const param = useParams();
  const { id } = param;
  const legislation = nationalLegislation.find((item) => item.id === id);
  if (!legislation) {
    return (
      <div className="text-center py-12 text-lg text-muted-foreground">
        Research not found!
      </div>
    );
  }
  return (
    <div className="max-w-4xl px-4 p-6">
      <BackButton text="Go Back To Legislation" link="/legislation" />
      <LegislationForm defaultValues={legislation}/>
    </div>
  );
};

export default page;
