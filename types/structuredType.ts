export type StructuredRating = {
  _id: string;
  institution: {
    ka: string;
    en: string; // Optional if English is supported
  };
  ratingTerm: "long_term" | "short_term" | string; // use a union or string if not sure
  publishedDate: string; // ISO format string (e.g., from MongoDB or Date.toISOString())
  key: string; // URL to PDF or document
  ratingDetails: {
    localCurrency: string;
    localRating: string;
  };
};
