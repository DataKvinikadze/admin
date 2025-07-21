import { Research, ResearchCategory } from "@/types/researchType";

export const creditResearch: Research[] = [
  {
    _id: "1",
    title: { en: "Credit Risk Overview", ka: "კერდიტის რისკი" },
    summary: { en: "A comprehensive look into credit market volatility.", ka: "ა კომპერ" },
    author: {en: "John Doe", ka: "ჯონი"},
    category: ResearchCategory.CREDIT,
    publishedDate: "2025-01-10T00:00:00.000Z",
    key: "/files/research/credit-risk-overview.pdf",
  },
  {
    _id: "2",
    title: { en: "Credit Risk Overview", ka: "კერდიტის რისკი" },
    summary: { en: "A comprehensive look into credit market volatility.", ka: "ა კომპერ" },
    author: {en: "John Doe", ka: "ჯონი"},
    category: ResearchCategory.CREDIT,
    publishedDate: "2025-01-10T00:00:00.000Z",
    key: "/files/research/credit-risk-overview.pdf",
  },
  {
    _id: "3",
    title: { en: "Credit Risk Overview", ka: "კერდიტის რისკი" },
    summary: { en: "A comprehensive look into credit market volatility.", ka: "ა კომპერ" },
    author: {en: "John Doe", ka: "ჯონი"},
    category: ResearchCategory.CREDIT,
    publishedDate: "2025-01-10T00:00:00.000Z",
    key: "/files/research/credit-risk-overview.pdf",
  },
];
export const marketResearch: Research[] = [
  {
    _id: "1",
    title: { en: "Global Market Trends", ka: "გლობალური საბაზრო ტენდენციები" },
    summary: { en: "Emerging market performance across sectors.", ka: "დამწყები ბაზრების შესრულება სხვადასხვა სექტორში." },
    category: ResearchCategory.MARKET,
    author: { en: "Alice Johnson", ka: "ალის ჯონსონი" },
    publishedDate: "2025-04-05T00:00:00.000Z",
    key: "/files/research/global-market-trends.pdf",
  },
  {
    _id: "2",
    title: { en: "Quarterly Market Report Q1", ka: "კვარტალური საბაზრო ანგარიში Q1" },
    summary: { en: "Summary of market conditions in Q1.", ka: "Q1-ის საბაზრო მდგომარეობის შეჯამება." },
    category: ResearchCategory.MARKET,
    author: { en: "Bob Lee", ka: "ბობ ლი" },
    publishedDate: "2025-04-20T00:00:00.000Z",
    key: "/files/research/q1-market.pdf",
  },
  {
    _id: "3",
    title: { en: "Commodity Price Shifts", ka: "საქონლის ფასების ცვალებადობა" },
    summary: { en: "Trends in global commodity prices.", ka: "გლობალურ საქონლის ფასებში ტენდენციები." },
    category: ResearchCategory.MARKET,
    author: { en: "Charlie Brown", ka: "ჩარლი ბრაუნი" },
    publishedDate: "2025-05-01T00:00:00.000Z",
    key: "/files/research/commodity-trends.pdf",
  },
];
export const governanceResearch: Research[] = [
  {
    _id: "1",
    title: { en: "Corporate Governance Index 2025", ka: "კორპორაციული მმართველობის ინდექსი 2025" },
    summary: { en: "Evaluating governance scores across sectors.", ka: "მმართველობის ქულების შეფასება სექტორების მიხედვით." },
    category: ResearchCategory.GOVERNANCE,
    author: { en: "David Wilson", ka: "დევიდ ვილსონი" },
    publishedDate: "2025-05-10T00:00:00.000Z",
    key: "/files/research/governance-index-2025.pdf",
  },
  {
    _id: "2",
    title: { en: "Board Effectiveness Study", ka: "ბორდის ეფექტიანობის კვლევა" },
    summary: { en: "Study on decision-making in boards of directors.", ka: "ბორდების გადაწყვეტილებების მიღების კვლევა." },
    category: ResearchCategory.GOVERNANCE,
    author: { en: "Emily Davis", ka: "ემილი დევისი" },
    publishedDate: "2025-06-01T00:00:00.000Z",
    key: "/files/research/board-effectiveness.pdf",
  },
  {
    _id: "3",
    title: { en: "Governance & Risk Alignment", ka: "მმართველობა და რისკების თანხვედრა" },
    summary: { en: "How governance policies align with risk management.", ka: "როგორ შეესაბამება მმართველობის პოლიტიკა რისკების მართვას." },
    category: ResearchCategory.GOVERNANCE,
    author: { en: "Frank Garcia", ka: "ფრენკ გარსია" },
    publishedDate: "2025-06-15T00:00:00.000Z",
    key: "/files/research/governance-risk.pdf",
  },
];

export const policyResearch: Research[] = [
  {
    _id: "1",
    title: { en: "Fiscal Policy Overview", ka: "ფისკალური პოლიტიკის მიმოხილვა" },
    summary: { en: "Current trends in fiscal policy decisions.", ka: "ფისკალური პოლიტიკის მიმდინარე ტენდენციები." },
    category: ResearchCategory.POLICY,
    author: { en: "Grace Martinez", ka: "გრეის მარტინესი" },
    publishedDate: "2025-07-01T00:00:00.000Z",
    key: "/files/research/fiscal-policy.pdf",
  },
  {
    _id: "2",
    title: { en: "Monetary Policy Impact", ka: "მონეტარული პოლიტიკის გავლენა" },
    summary: { en: "The effect of interest rate changes.", ka: "საკრედიტო განაკვეთების ცვლილებების გავლენა." },
    category: ResearchCategory.POLICY,
    author: { en: "Grace Martinez", ka: "გრეის მარტინესი" },
    publishedDate: "2025-07-10T00:00:00.000Z",
    key: "/files/research/monetary-impact.pdf",
  },
  {
    _id: "3",
    title: { en: "Regulatory Frameworks Update", ka: "რეგულაციების განახლება" },
    summary: { en: "Latest changes in financial regulation.", ka: "ბოლო ცვლილებები ფინანსურ რეგულაციებში." },
    category: ResearchCategory.POLICY,
    author: { en: "Grace Martinez", ka: "გრეის მარტინესი" },
    publishedDate: "2025-07-15T00:00:00.000Z",
    key: "/files/research/regulatory-update.pdf",
  },
];

export const otherResearch: Research[] = [
  {
    _id: "1",
    title: { en: "ESG and Investment Strategy", ka: "ESG და საინვესტიციო სტრატეგია" },
    summary: { en: "Environmental, Social, and Governance insights.", ka: "გარემოს, სოციალური და მმართველობის ანალიზი." },
    category: ResearchCategory.OTHER,
    author: { en: "Jane Smith", ka: "ჯეინ სმიტი" },
    publishedDate: "2025-08-01T00:00:00.000Z",
    key: "/files/research/esg-investing.pdf",
  },
  {
    _id: "2",
    title: { en: "Digital Finance Trends", ka: "ციფრული ფინანსების ტენდენციები" },
    summary: { en: "The rise of fintech and decentralized finance.", ka: "ფინტექისა და დეცენტრალიზებული ფინანსების ზრდა." },
    category: ResearchCategory.OTHER,
    author: { en: "John Doe", ka: "ჯონ დოუ" },
    publishedDate: "2025-08-10T00:00:00.000Z",
    key: "/files/research/digital-finance.pdf",
  },
  {
    _id: "3",
    title: { en: "Behavioral Economics", ka: "ქცევითი ეკონომიკა" },
    summary: { en: "How psychology influences economic decisions.", ka: "როგორ ახდენს ფსიქოლოგია გავლენას ეკონომიკურ გადაწყვეტილებებზე." },
    category: ResearchCategory.OTHER,
    author: { en: "Alice Johnson", ka: "ალის ჯონსონი" },
    publishedDate: "2025-08-20T00:00:00.000Z",
    key: "/files/research/behavioral-econ.pdf",
  },
];
