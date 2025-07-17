import { RatingEntry } from "@/types/ratings/ratings";

export const ratingData: RatingEntry[] = [
  {
    id: 1,
    institution: "TBC Bank",
    ratingTerm: "Long-term",
    publishedDate: "2025-07-01",
    intlForeignCurrency: "BB+",
    intlLocalCurrency: "BBB-",
    intlOutlook: "Stable",
    nationalRating: "aa-",
    nationalOutlook: "Positive",
    sponsoredSupport: "Moderate",
    standAlone: "Strong",
  },
  {
    id: 2,
    institution: "Bank of Georgia",
    ratingTerm: "Short-term",
    publishedDate: "2025-06-15",
    intlForeignCurrency: "BB",
    intlLocalCurrency: "BB+",
    intlOutlook: "Negative",
    nationalRating: "a+",
    nationalOutlook: "Stable",
    sponsoredSupport: "Low",
    standAlone: "Good",
  },
  {
    id: 3,
    institution: "Liberty Bank",
    ratingTerm: "Long-term",
    publishedDate: "2025-07-10",
    intlForeignCurrency: "B+",
    intlLocalCurrency: "BB-",
    intlOutlook: "Stable",
    nationalRating: "bbb",
    nationalOutlook: "Negative",
    sponsoredSupport: "High",
    standAlone: "Moderate",
  }
];
