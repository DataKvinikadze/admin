import NewsCard from "@/components/news/NewsCard";
import NewsHeader from "@/components/news/NewsHeader";
import { mockNews } from "@/data/newsData";

const page = () => {
  return (
    <div className="py-4 px-8">
      <NewsHeader />
      <div className="grid gap-4">
        {mockNews.map((block) => (
          <NewsCard
            BlockCount={block.blocks.length}
            id={block.id}
            publishedDate={block.publishedDate}
            slug={block.slug.en}
            summery={block.summery.en}
            title={block.title.en}
            key={block.id}

          />
        ))}
      </div>
    </div>
  );
};

export default page;
