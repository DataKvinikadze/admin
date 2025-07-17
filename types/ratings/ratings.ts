export type RatingEntry = {
  id: number;
  institution: string;
  ratingTerm: string;
  publishedDate: string; // or Date, depending on how you use it
  intlForeignCurrency: string;
  intlLocalCurrency: string;
  intlOutlook: string;
  nationalRating: string;
  nationalOutlook: string;
  sponsoredSupport: string;
  standAlone: string;
};
