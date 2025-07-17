import { MethodologyPage } from "@/types/methodology/methodology";

export const methodologyData: MethodologyPage[] = [
  {
    id: "1",
    title: "General Information About Rating",
    slug: "general-info-rating",
    description: "An in-depth explanation of how rating systems work and their importance.",
    blocks: [
      {
        id: "1",
        type: "header",
        content: "What Is a Rating?",
        level: 1,
      },
      {
        id: "2",
        type: "paragraph",
        content:
          "Rating is a classification system based on qualitative and quantitative data, used to estimate the ability of an entity to meet financial obligations. It helps assess the creditworthiness of governments, financial institutions, companies, or issued assets.",
      },
      {
        id: "3",
        type: "list",
        content: "Benefits of Ratings",
        listItems: [
          "Aid investors in evaluating risk",
          "Help issuers gain better financing terms",
          "Support banks in capital adequacy calculations",
          "Guide regulators and policymakers",
        ],
      },
      {
        id: "4",
        type: "header",
        content: "Types of Ratings",
        level: 2,
      },
      {
        id: "5",
        type: "paragraph",
        content:
          "Ratings can be long-term or short-term based on the maturity of liabilities. They also vary depending on whether they are issued in foreign or local currency.",
      },
      {
        id: "6",
        type: "list",
        content: "Rating Types",
        listItems: [
          "International Foreign Currency Rating (FC)",
          "International Local Currency Rating (LC)",
          "National Local Currency Rating (Tr)"
        ],
      },
      {
        id: "7",
        type: "header",
        content: "Users of Ratings",
        level: 2,
      },
      {
        id: "8",
        type: "paragraph",
        content:
          "Investors, intermediaries, and issuers rely on credit ratings for investment decisions, pricing of instruments, and benchmarking financial strength."
      }
    ],
    createdAt: "2024-05-10T00:00:00.000Z",
    updatedAt: "2024-06-01T00:00:00.000Z",
    status: "published",
  },
  {
    id: "2",
    title: "Structured Finance Ratings Explained",
    slug: "structured-finance-ratings",
    description: "A comprehensive overview of structured finance instruments and how they are rated.",
    blocks: [
      {
        id: "1",
        type: "header",
        content: "Understanding Structured Finance",
        level: 1,
      },
      {
        id: "2",
        type: "paragraph",
        content:
          "Structured finance involves pooling financial assets and issuing new securities backed by those assets. These products are tailored to meet the specific needs of borrowers that may not be met with conventional financial instruments.",
      },
      {
        id: "3",
        type: "list",
        content: "Common Structured Instruments",
        listItems: [
          "Asset-Backed Securities (ABS)",
          "Mortgage-Backed Securities (MBS)",
          "Collateralized Loan Obligations (CLOs)",
          "Collateralized Debt Obligations (CDOs)"
        ],
      },
      {
        id: "4",
        type: "header",
        content: "Rating Methodologies for Structured Products",
        level: 2,
      },
      {
        id: "5",
        type: "paragraph",
        content:
          "Agencies assess default probability, credit enhancement, legal structures, and payment waterfalls when rating structured products. Stress testing and scenario analysis are also applied."
      }
    ],
    createdAt: "2024-04-15T00:00:00.000Z",
    updatedAt: "2024-05-05T00:00:00.000Z",
    status: "published",
  },
  {
    id: "3",
    title: "Credit Rating Process and Governance",
    slug: "credit-rating-governance",
    description: "Detailed insights into the workflow and compliance involved in issuing credit ratings.",
    blocks: [
      {
        id: "1",
        type: "header",
        content: "The Rating Workflow",
        level: 1,
      },
      {
        id: "2",
        type: "paragraph",
        content:
          "The credit rating process begins with an issuer’s request and proceeds through data collection, analysis by rating analysts, committee deliberation, and final publication. Feedback and issuer comments may also be incorporated."
      },
      {
        id: "3",
        type: "list",
        content: "Workflow Steps",
        listItems: [
          "Issuer Application",
          "Analyst Assignment",
          "Data Gathering",
          "Committee Review",
          "Rating Publication",
          "Ongoing Surveillance"
        ]
      },
      {
        id: "4",
        type: "header",
        content: "Governance Framework",
        level: 2,
      },
      {
        id: "5",
        type: "paragraph",
        content:
          "Strong governance is crucial for maintaining objectivity and reliability. This includes separation of commercial and analytical functions, internal audits, external compliance checks, and conflict-of-interest management."
      }
    ],
    createdAt: "2024-03-12T00:00:00.000Z",
    updatedAt: "2024-04-01T00:00:00.000Z",
    status: "published",
  }
];
