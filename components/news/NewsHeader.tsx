import Link from "next/link";

const NewsHeader = () => {
  return (
    <div className="flex justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">News Page</h1>
        <p className="text-gray-600 mt-2">Manage your News Blog</p>
      </div>
      <div>
        <Link href={"create"}>
          <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex items-center gap-2">
            Create New Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsHeader;
