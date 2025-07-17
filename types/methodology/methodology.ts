export interface ContentBlock {
  id: string;
  type: "header" | "paragraph" | "list";
  content: string;
  level?: number; // for headers (h1, h2, h3, etc.)
  listItems?: string[]; // for lists
}

export interface MethodologyPage {
  id: string;
  title: string;
  slug: string;
  description: string;
  blocks: ContentBlock[];
  createdAt: string;
  updatedAt: string;
  status: "draft" | "published";
}
