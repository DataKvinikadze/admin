import { RatingEntry } from "@/types/ratingsType";

export const ratingData: RatingEntry[] = [
  {
    id: "1",
    institution: { en: "TBC Bank", ka: "თიბისი" },
    ratingTerm: "Long-term",
    publishedDate: "2025-07-01",
    ratingDetails: {
      intlForeignCurrency: "BB+",
      intlLocalCurrency: "BBB-",
      intlOutlook: "Stable",
      nationalRating: "aa-",
      nationalOutlook: "Positive",
      sponsoredSupport: "Moderate",
      standAlone: "Strong",
    },
  },
  {
    id: "2",
    institution: { en: "TBC Bank", ka: "თიბისი" },
    ratingTerm: "Short-term",
    publishedDate: "2025-06-15",
    ratingDetails: {
      intlForeignCurrency: "BB",
      intlLocalCurrency: "BB+",
      intlOutlook: "Negative",
      nationalRating: "a+",
      nationalOutlook: "Stable",
      sponsoredSupport: "Low",
      standAlone: "Good",
    },
  },
  {
    id: "3",
    institution: { en: "TBC Bank", ka: "თიბისი" },
    ratingTerm: "Long-term",
    publishedDate: "2025-07-10",
    ratingDetails: {
      intlForeignCurrency: "B+",
      intlLocalCurrency: "BB-",
      intlOutlook: "Stable",
      nationalRating: "bbb",
      nationalOutlook: "Negative",
      sponsoredSupport: "High",
      standAlone: "Moderate",
    },
  },
];
