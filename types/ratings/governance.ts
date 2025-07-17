export type GovernanceRating = {
  _id: string;
  type: "governance";
  institution: {
    ka: string;
    en?: string; // Optional English field if supported
  };
  ratingTerm: "long_term" | "short_term" | string; // Adjust based on actual enum
  publishedDate: string; // ISO date string
  key: string; // URL to the PDF file
  ratingDetails: {
    shareholdersPoint: number;
    shareholdersView: "Stable" | "Positive" | "Negative" | string;
    disclosurePoint: number;
    disclosureView: "Stable" | "Positive" | "Negative" | string;
    stakeholdersPoint: number;
    stakeholdersView: "Stable" | "Positive" | "Negative" | string;
    boardPoint: number;
    boardView: "Stable" | "Positive" | "Negative" | string;
    institutionPoint: number;
    institutionView: "Stable" | "Positive" | "Negative" | string;
  };
};
