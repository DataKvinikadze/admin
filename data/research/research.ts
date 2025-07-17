import { Research, ResearchCategory } from "@/types/research/research";

export const creditResearch: Research[] = [
  {
    _id: "1",
    title: { en: "Credit Risk Overview" },
    summary: { en: "A comprehensive look into credit market volatility." },
    author: "John Doe",
    category: ResearchCategory.CREDIT,
    publishedDate: "2025-01-10T00:00:00.000Z",
    key: "/files/research/credit-risk-overview.pdf",
  },
  {
    _id: "2",
    title: { en: "Corporate Credit Ratings 2025" },
    summary: { en: "Yearly ratings summary for corporate borrowers." },
    category: ResearchCategory.CREDIT,
    author: "Jane Smith",
    publishedDate: "2025-02-15T00:00:00.000Z",
    key: "/files/research/corporate-credit-2025.pdf",
  },
  {
    _id: "3",
    title: { en: "SME Credit Conditions" },
    summary: { en: "Analyzing lending access for small enterprises." },
    category: ResearchCategory.CREDIT,
    author: "Unknown",
    publishedDate: "2025-03-20T00:00:00.000Z",
    key: "/files/research/sme-credit.pdf",
  },
];

export const marketResearch: Research[] = [
  {
    _id: "1",
    title: { en: "Global Market Trends" },
    summary: { en: "Emerging market performance across sectors." },
    category: ResearchCategory.MARKET,
    author: "Alice Johnson",
    publishedDate: "2025-04-05T00:00:00.000Z",
    key: "/files/research/global-market-trends.pdf",
  },
  {
    _id: "2",
    title: { en: "Quarterly Market Report Q1" },
    summary: { en: "Summary of market conditions in Q1." },
    category: ResearchCategory.MARKET,
    author: "Bob Lee",
    publishedDate: "2025-04-20T00:00:00.000Z",
    key: "/files/research/q1-market.pdf",
  },
  {
    _id: "3",
    title: { en: "Commodity Price Shifts" },
    summary: { en: "Trends in global commodity prices." },
    category: ResearchCategory.MARKET,
    author: "Charlie Brown",
    publishedDate: "2025-05-01T00:00:00.000Z",
    key: "/files/research/commodity-trends.pdf",
  },
];

export const governanceResearch: Research[] = [
  {
    _id: "1",
    title: { en: "Corporate Governance Index 2025" },
    summary: { en: "Evaluating governance scores across sectors." },
    category: ResearchCategory.GOVERNANCE,
    publishedDate: "2025-05-10T00:00:00.000Z",
    author: "David Wilson",
    key: "/files/research/governance-index-2025.pdf",
  },
  {
    _id: "2",
    title: { en: "Board Effectiveness Study" },
    summary: { en: "Study on decision-making in boards of directors." },
    category: ResearchCategory.GOVERNANCE,
    author: "Emily Davis",
    publishedDate: "2025-06-01T00:00:00.000Z",
    key: "/files/research/board-effectiveness.pdf",
  },
  {
    _id: "3",
    title: { en: "Governance & Risk Alignment" },
    summary: { en: "How governance policies align with risk management." },
    category: ResearchCategory.GOVERNANCE,
    author: "Frank Garcia",
    publishedDate: "2025-06-15T00:00:00.000Z",
    key: "/files/research/governance-risk.pdf",
  },
];

export const policyResearch: Research[] = [
  {
    _id: "1",
    title: { en: "Fiscal Policy Overview" },
    summary: { en: "Current trends in fiscal policy decisions." },
    category: ResearchCategory.POLICY,
    author: "Grace Martinez",
    publishedDate: "2025-07-01T00:00:00.000Z",
    key: "/files/research/fiscal-policy.pdf",
  },
  {
    _id: "2",
    title: { en: "Monetary Policy Impact" },
    summary: { en: "The effect of interest rate changes." },
    category: ResearchCategory.POLICY,
    author: "Grace Martinez",
    publishedDate: "2025-07-10T00:00:00.000Z",
    key: "/files/research/monetary-impact.pdf",
  },
  {
    _id: "3",
    title: { en: "Regulatory Frameworks Update" },
    summary: { en: "Latest changes in financial regulation." },
    category: ResearchCategory.POLICY,
    author: "Grace Martinez",
    publishedDate: "2025-07-15T00:00:00.000Z",
    key: "/files/research/regulatory-update.pdf",
  },
];

export const otherResearch: Research[] = [
  {
    _id: "1",
    title: { en: "ESG and Investment Strategy" },
    summary: { en: "Environmental, Social, and Governance insights." },
    category: ResearchCategory.OTHER,
    author: "Jane Smith",
    publishedDate: "2025-08-01T00:00:00.000Z",
    key: "/files/research/esg-investing.pdf",
  },
  {
    _id: "2",
    title: { en: "Digital Finance Trends" },
    summary: { en: "The rise of fintech and decentralized finance." },
    category: ResearchCategory.OTHER,
    author: "John Doe",
    publishedDate: "2025-08-10T00:00:00.000Z",
    key: "/files/research/digital-finance.pdf",
  },
  {
    _id: "3",
    title: { en: "Behavioral Economics" },
    summary: { en: "How psychology influences economic decisions." },
    category: ResearchCategory.OTHER,
    author: "Alice Johnson",
    publishedDate: "2025-08-20T00:00:00.000Z",
    key: "/files/research/behavioral-econ.pdf",
  },
];
