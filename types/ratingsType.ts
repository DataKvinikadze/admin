export type RatingEntry = {
  id: string;
  institution: { en: string; ka: string };
  ratingTerm: string;
  publishedDate: string;
  ratingDetails: {
    intlForeignCurrency: string;
    intlLocalCurrency: string;
    intlOutlook: string;
    nationalRating: string;
    nationalOutlook: string;
    sponsoredSupport: string;
    standAlone: string;
  };
};
