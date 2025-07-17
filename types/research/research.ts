export enum ResearchCategory {
  CREDIT = "credit",
  MARKET = "market",
  GOVERNANCE = "governance",
  POLICY = "policy",
  OTHER = "other",
}

export interface Research {
  _id: string;
  title: {
    en: string;
    ka?: string; // optional in case you have localization
  };
  summary: {
    en: string;
    ka?: string;
  };
  author: string; // optional field for author name
  category: ResearchCategory;
  publishedDate: string; // or Date if parsed
  key: string; // download URL
}
