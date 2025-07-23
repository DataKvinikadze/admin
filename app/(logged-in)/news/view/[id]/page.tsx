"use client";

import { mockNews } from "@/data/newsData";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import React from "react";
import { JSX } from "react";

const NewsPage = () => {
  const { id } = useParams();
  const page = mockNews.find((item) => item.id === id);

  if (!page) {
    return (
      <div className="text-center py-12 text-lg text-muted-foreground">
        News Not Found
      </div>
    );
  }

  return (
    <div className="max-w-3xl px-4 py-8 mx-auto">
      <h1 className="text-3xl font-bold mb-2">{page.title.en}</h1>
      <p className="text-muted-foreground mb-1">{page.slug.en}</p>
      <p className="text-muted-foreground mb-6">{page.summery.en}</p>
      <Separator className="mb-6" />

      <div className="space-y-6">
        {page.blocks.map((block) => {
          switch (block.type) {
            case "header":
              const level = block.level ?? 2;
              const HeadingTag = `h${Math.min(
                Math.max(level, 1),
                6
              )}` as keyof JSX.IntrinsicElements;
              return (
                <HeadingTag
                  key={block.id}
                  className={`font-bold text-xl md:text-${level + 2}xl`}
                >
                  {block.content.en}
                </HeadingTag>
              );

            case "paragraph":
              return (
                <p key={block.id} className="text-base leading-relaxed">
                  {block.content.en}
                </p>
              );

            case "list":
              return (
                <ul
                  key={block.id}
                  className="list-disc list-inside ml-4 space-y-1"
                >
                  {block.listItems?.map((item, i) => (
                    <li key={i}>{item.en}</li>
                  ))}
                </ul>
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default NewsPage;
