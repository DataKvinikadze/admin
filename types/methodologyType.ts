export interface MultilingualContentBlock {
  id: string;
  type: "header" | "paragraph" | "list";
  content: { en: string; ka: string };
  level?: number;
  listItems?: { en: string; ka: string }[]; // only for "list" type
}

export type MethodologyPage = {
  id: string;
  title: { en: string; ka: string };
  slug: { en: string; ka: string };
  description: { en: string; ka: string };
  blocks: MultilingualContentBlock[];
  key: string;
  publishedDate: Date;
};

export type CreateMethodologyType = {
  title: { en: string; ka: string };
  slug: { en: string; ka: string };
  description: { en: string; ka: string };
  blocks: MultilingualContentBlock[];
  key: string;
};
export type EditMethodologyType = {
  title: { en: string; ka: string };
  slug: { en: string; ka: string };
  key: string;
  description: { en: string; ka: string };
  blocks: MultilingualContentBlock[];
};
