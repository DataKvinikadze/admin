export type LegislationFrontType = {
  id: string;
  title: {
    en: string;
    ka: string;
  };
  summary: {
    en: string;
    ka: string;
  };
  authority: string;
  category:  string; // based on your enum
  documentType: string;              // based on your enum
  publishedDate: string; // as ISO string for form <input type="date" />
  key: string;
};
