import MethodologyCard from "@/components/methodology/MethodologyCard";
import MethodologyHeader from "@/components/methodology/MethodologyHeader";
import { methodologyData } from "@/data/methodologyData";
import React from "react";

const page = () => {
    return (
    <div className="py-4 px-8">
      <MethodologyHeader/>
      <div className="grid gap-4">
      {methodologyData.map((block)=>(
          <MethodologyCard  blockCount={block.blocks.length} id={block.id} key={block.id} description={block.description} publishedDate={block.publishedDate} slug={block.slug} title={block.title}/>
      ))}
      </div>
    </div>
  );
};

export default page;
