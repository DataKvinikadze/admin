import { StructuredRating } from "@/types/structuredType";

export const structuredData: StructuredRating[] = [
    {
        _id: "1",
        institution: {
        ka: "TBC Bank",
        en: "TBC Bank",
        },
        ratingTerm: "long_term",
        publishedDate: "2025-07-01T00:00:00Z",
        key: "/documents/ratings/tbc-bank.pdf",
        ratingDetails: {
        localCurrency: "GEL",
        localRating: "A+",
        },
    },
    {
        _id: "2",
        institution: {
        ka: "Bank of Georgia",
        en: "Bank of Georgia",
        },
        ratingTerm: "short_term",
        publishedDate: "2025-06-15T00:00:00Z",
        key: "/documents/ratings/bank-of-georgia.pdf",
        ratingDetails: {
        localCurrency: "GEL",
        localRating: "A",
        },
    },
    {
        _id: "3",
        institution: {
        ka: "Liberty Bank",
        en: "Liberty Bank",
        },
        ratingTerm: "long_term",
        publishedDate: "2025-07-10T00:00:00Z",
        key: "/documents/ratings/liberty-bank.pdf",
        ratingDetails: {
        localCurrency: "GEL",
        localRating: "B+",
        },
    },
]