"use client";
import BackButton from "@/components/BackButton";
import NewsForm from "@/components/news/NewsForm";
import { mockNews } from "@/data/newsData";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const { id } = params;
  const newsInfo = mockNews.find((block) => block.id === id);

  if (!newsInfo) {
    return <div>News Not Found!</div>;
  }
  return (
    <div>
      <div className="max-w-4xl px-4 py-6">
      <BackButton text="Go Back" link="/news" />
      <NewsForm
        defaultValues={{
          key: newsInfo.key,
          blocks: newsInfo.blocks,
          slug: { en: newsInfo.slug.en, ka: newsInfo.slug.ka },
          summery: { en: newsInfo.summery.en, ka: newsInfo.summery.ka },
          title: { en: newsInfo.title.en, ka: newsInfo.title.ka },
        }}
      />
      </div>
    </div>
  );
};

export default page;
