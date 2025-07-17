"use client";

import React from "react";
import { useParams } from "next/navigation";
import { methodologyData } from "@/data/Methodology/methodology";
import { Separator } from "@/components/ui/separator";

const ViewMethodologyPage = () => {
  const { id } = useParams();
  const page = methodologyData.find((item) => item.id === id);

  if (!page) {
    return (
      <div className="text-center py-12 text-lg text-muted-foreground">
        Methodology Not Found
      </div>
    );
  }

  return (
    <div className="max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{page.title}</h1>
      <p className="text-muted-foreground mb-6">{page.description}</p>
      <Separator className="mb-6" />

      <div className="space-y-6">
        {page.blocks.map((block) => {
          switch (block.type) {
            case "header":
              return (
                <div key={block.id}>
                  {React.createElement(`h${block.level}`, {
                    className: `font-bold text-${(block.level ?? 2) * 1.25}xl`,
                    children: block.content,
                  })}
                </div>
              );

            case "paragraph":
              return (
                <p key={block.id} className="text-base leading-relaxed">
                  {block.content}
                </p>
              );

            case "list":
              return (
                <div key={block.id}>
                  <h4 className="font-medium">{block.content}</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                    {block.listItems?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default ViewMethodologyPage;
 