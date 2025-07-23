export interface MultilingualContentBlock {
  id: string;
  type: "header" | "paragraph" | "list";
  content: { en: string; ka: string };
  level?: number;
  listItems?: { en: string; ka: string }[]; // only for "list" type
}

export type NewsType = {
  id: string;
  slug: {en: string, ka:string};
  title: {
    en: string;
    ka: string;
  };
  publishedDate: Date;
  summery: {
    en: string;
    ka: string;
  };
  key: string;
  blocks: MultilingualContentBlock[];
};

export type CreateNewsType = {
  slug: { en: string; ka: string };
  title: {
    en: string;
    ka: string;
  };
  summery: {
    en: string;
    ka: string;
  };
  key: string;
  blocks: MultilingualContentBlock[];
};
export type EditNewsType = {
  id: string;
  slug: { en: string; ka: string };
  title: {
    en: string;
    ka: string;
  };
  publishDate: string;
  summery: {
    en: string;
    ka: string;
  };
  key: string;
  blocks: MultilingualContentBlock[];
};
