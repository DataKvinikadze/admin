import { GovernanceRating } from "@/types/ratings/governance";

export const governanceData: GovernanceRating[] = [
  {
    _id: "1",
    type: "governance",
    institution: {
      ka: "TBC Bank",
      en: "TBC Bank",
    },
    ratingTerm: "long_term",
    publishedDate: "2025-07-01T00:00:00Z",
    key: "/documents/governance/tbc-bank.pdf",
    ratingDetails: {
      shareholdersPoint: 8,
      shareholdersView: "Stable",
      disclosurePoint: 7,
      disclosureView: "Positive",
      stakeholdersPoint: 6,
      stakeholdersView: "Stable",
      boardPoint: 9,
      boardView: "Positive",
      institutionPoint: 8,
      institutionView: "Stable",
    },
  },
  {
    _id: "2",
    type: "governance",
    institution: {
      ka: "Bank of Georgia",
      en: "Bank of Georgia",
    },
    ratingTerm: "short_term",
    publishedDate: "2025-06-15T00:00:00Z",
    key: "/documents/governance/bank-of-georgia.pdf",
    ratingDetails: {
      shareholdersPoint: 7,
      shareholdersView: "Positive",
      disclosurePoint: 6,
      disclosureView: "Stable",
      stakeholdersPoint: 5,
      stakeholdersView: "Negative",
      boardPoint: 8,
      boardView: "Positive",
      institutionPoint: 7,
      institutionView: "Stable",
    },
  },
];
