export type LegislationType = {
  id: string;
  title: {
    en: string;
    ka: string;
  };
  summary: {
    en: string;
    ka: string;
  };
  authority: { en: string; ka: string };
  category: string;
  publishedDate: Date;
  documentType: string;
  key: string;
};

export type LegislationEditType = {
  title: {
    en: string;
    ka: string;
  };
  summary: {
    en: string;
    ka: string;
  };
  authority: { en: string; ka: string };
  category: string;
  documentType: string;
  key: string;
};

export type LegislationCreateType = {
  title: {
    en: string;
    ka: string;
  };
  summary: {
    en: string;
    ka: string;
  };
  authority: { en: string; ka: string };
  category: string;
  documentType: string;
  key: string;
};
