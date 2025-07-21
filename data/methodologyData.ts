import { MethodologyPage } from "@/types/methodologyType";

export const methodologyData: MethodologyPage[] = [
  {
    id: "1",
    title: { en: "General Information About Rating", ka: "" },
    slug: { en: "general-info-rating", ka: "" },
    description: {
      en: "An in-depth explanation of how rating systems work and their importance.",
      ka: "წოიდჯაოიწდ",
    },
    blocks: [
      {
        id: "1",
        type: "header",
        content: { en: "What Is a Rating?", ka: "" },
        level: 1,
      },
      {
        id: "2",
        type: "paragraph",
        content: {
          en: "Rating is a classification system based on qualitative and quantitative data, used to estimate the ability of an entity to meet financial obligations. It helps assess the creditworthiness of governments, financial institutions, companies, or issued assets.",
          ka: "",
        },
      },
      {
        id: "3",
        type: "list",
        content: { en: "Benefits of Ratings", ka: "" },
        listItems: [
          { en: "Aid investors in evaluating risk", ka: "" },
          { en: "Help issuers gain better financing terms", ka: "" },
          { en: "Support banks in capital adequacy calculations", ka: "" },
          { en: "Guide regulators and policymakers", ka: "" },
        ],
      },
      {
        id: "4",
        type: "header",
        content: { en: "Types of Ratings", ka: "" },
        level: 2,
      },
      {
        id: "5",
        type: "paragraph",
        content: {
          en: "Ratings can be long-term or short-term based on the maturity of liabilities. They also vary depending on whether they are issued in foreign or local currency.",
          ka: "",
        },
      },
      {
        id: "6",
        type: "list",
        content: { en: "Rating Types", ka: "" },
        listItems: [
          { en: "International Foreign Currency Rating (FC)", ka: "" },
          { en: "International Local Currency Rating (LC)", ka: "" },
          { en: "National Local Currency Rating (Tr)", ka: "" },
        ],
      },
      {
        id: "7",
        type: "header",
        content: { en: "Users of Ratings", ka: "" },
        level: 2,
      },
      {
        id: "8",
        type: "paragraph",
        content: {
          en: "Investors, intermediaries, and issuers rely on credit ratings for investment decisions, pricing of instruments, and benchmarking financial strength.",
          ka: "",
        },
      },
    ],
    key: "dasdawd",
    publishedDate: new Date()
  },
  {
    id: "2",
    title: { en: "Structured Finance Ratings Explained", ka: "" },
    slug: { en: "structured-finance-ratings", ka: "" },
    description: {
      en: "A comprehensive overview of structured finance instruments and how they are rated.",
      ka: "",
    },
    blocks: [
      {
        id: "1",
        type: "header",
        content: { en: "Understanding Structured Finance", ka: "" },
        level: 1,
      },
      {
        id: "2",
        type: "paragraph",
        content: {
          en: "Structured finance involves pooling financial assets and issuing new securities backed by those assets. These products are tailored to meet the specific needs of borrowers that may not be met with conventional financial instruments.",
          ka: "",
        },
      },
      {
        id: "3",
        type: "list",
        content: { en: "Common Structured Instruments", ka: "" },
        listItems: [
          { en: "Asset-Backed Securities (ABS)", ka: "" },
          { en: "Mortgage-Backed Securities (MBS)", ka: "" },
          { en: "Collateralized Loan Obligations (CLOs)", ka: "" },
          { en: "Collateralized Debt Obligations (CDOs)", ka: "" },
        ],
      },
      {
        id: "4",
        type: "header",
        content: { en: "Rating Methodologies for Structured Products", ka: "" },
        level: 2,
      },
      {
        id: "5",
        type: "paragraph",
        content: {
          en: "Agencies assess default probability, credit enhancement, legal structures, and payment waterfalls when rating structured products. Stress testing and scenario analysis are also applied.",
          ka: "",
        },
      },
    ],
    key: "dasdawd",
    publishedDate: new Date()
  },
  {
    id: "3",
    title: { en: "Credit Rating Process and Governance", ka: "" },
    slug: { en: "credit-rating-governance", ka: "" },
    description: {
      en: "Detailed insights into the workflow and compliance involved in issuing credit ratings.",
      ka: "",
    },
    blocks: [
      {
        id: "1",
        type: "header",
        content: { en: "The Rating Workflow", ka: "" },
        level: 1,
      },
      {
        id: "2",
        type: "paragraph",
        content: {
          en: "The credit rating process begins with an issuer’s request and proceeds through data collection, analysis by rating analysts, committee deliberation, and final publication. Feedback and issuer comments may also be incorporated.",
          ka: "",
        },
      },
      {
        id: "3",
        type: "list",
        content: { en: "Workflow Steps", ka: "" },
        listItems: [
          { en: "Issuer Application", ka: "" },
          { en: "Analyst Assignment", ka: "" },
          { en: "Data Gathering", ka: "" },
          { en: "Committee Review", ka: "" },
          { en: "Rating Publication", ka: "" },
          { en: "Ongoing Surveillance", ka: "" },
        ],
      },
      {
        id: "4",
        type: "header",
        content: { en: "Governance Framework", ka: "" },
        level: 2,
      },
      {
        id: "5",
        type: "paragraph",
        content: {
          en: "Strong governance is crucial for maintaining objectivity and reliability. This includes separation of commercial and analytical functions, internal audits, external compliance checks, and conflict-of-interest management.",
          ka: "",
        },
      },
    ],
    key: "dasdawd",
    publishedDate: new Date()
  },
];
