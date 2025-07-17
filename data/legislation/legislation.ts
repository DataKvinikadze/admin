import { LegislationFrontType } from "@/types/legislation/legislation";

export const InternationalLegislation: LegislationFrontType[] = [
  {
    id: "1",
    title: { en: "National Tax Code", ka: "ეროვნული საგადასახადო კოდექსი" },
    summary: { en: "Defines tax obligations in Georgia.", ka: "განსაზღვრავს საგადასახადო ვალდებულებებს საქართველოში." },
    authority: "Parliament of Georgia",
    category: "national",
    documentType: "PDF",
    publishedDate: "2023-01-10",
    key: "national/tax-code.pdf",
  },
  {
    id: "2",
    title: { en: "Labor Law", ka: "შრომის კანონი" },
    summary: { en: "Governs employee-employer relationships.", ka: "არეგულირებს დამსაქმებელსა და დასაქმებულს შორის ურთიერთობას." },
    authority: "Ministry of Labor",
    category: "national",
    documentType: "WORD",
    publishedDate: "2022-11-05",
    key: "national/labor-law.docx",
  },
  {
    id: "3",
    title: { en: "Civil Code", ka: "სამოქალაქო კოდექსი" },
    summary: { en: "Regulates private law matters.", ka: "არეგულირებს კერძო სამართლის საკითხებს." },
    authority: "Ministry of Justice",
    category: "national",
    documentType: "PDF",
    publishedDate: "2021-06-22",
    key: "national/civil-code.pdf",
  },
]

export const nationalLegislation: LegislationFrontType[] = [
  {
    id: "1",
    title: { en: "EU Partnership Agreement", ka: "ევროკავშირთან პარტნიორობის შეთანხმება" },
    summary: { en: "Outlines cooperation between EU and Georgia.", ka: "განსაზღვრავს თანამშრომლობას ევროკავშირსა და საქართველოს შორის." },
    authority: "Ministry of Foreign Affairs",
    category: "international",
    documentType: "PDF",
    publishedDate: "2020-03-15",
    key: "international/eu-agreement.pdf",
  },
  {
    id: "2",
    title: { en: "UN Human Rights Charter", ka: "გაეროს ადამიანის უფლებათა ქარტია" },
    summary: { en: "Human rights document signed by Georgia.", ka: "ადამიანის უფლებების დოკუმენტი, რომელსაც საქართველო ხელს აწერს." },
    authority: "United Nations",
    category: "international",
    documentType: "WORD",
    publishedDate: "2018-12-10",
    key: "international/un-rights.docx",
  },
  {
    id: "3",
    title: { en: "WTO Membership Protocol", ka: "მსოფლიო სავაჭრო ორგანიზაციის წევრობის პროტოკოლი" },
    summary: { en: "Georgia's entry terms to WTO.", ka: "საქართველოს წევრობის პირობები მსოფლიო სავაჭრო ორგანიზაციაში." },
    authority: "World Trade Organization",
    category: "international",
    documentType: "PDF",
    publishedDate: "2019-05-01",
    key: "international/wto-protocol.pdf",
  }
]

export const guidelineLegislation: LegislationFrontType[] = [
  {
    id: "1",
    title: { en: "Procurement Guideline", ka: "შესყიდვების სახელმძღვანელო" },
    summary: { en: "How to conduct state procurements.", ka: "სახელმწიფო შესყიდვების განხორციელების წესი." },
    authority: "Procurement Agency",
    category: "guideline",
    documentType: "PDF",
    publishedDate: "2024-02-01",
    key: "guideline/procurement.pdf",
  },
  {
    id: "2",
    title: { en: "Environmental Impact Guide", ka: "გარემოზე ზემოქმედების სახელმძღვანელო" },
    summary: { en: "Assessment practices for projects.", ka: "პროექტების ზემოქმედების შეფასების პრაქტიკა." },
    authority: "Ministry of Environment",
    category: "guideline",
    documentType: "WORD",
    publishedDate: "2023-09-12",
    key: "guideline/environment.docx",
  },
  {
    id: "3",
    title: { en: "Public Communication Guide", ka: "საზოგადოებასთან კომუნიკაციის სახელმძღვანელო" },
    summary: { en: "Standards for public officials.", ka: "სტანდარტები საჯარო მოხელეებისთვის." },
    authority: "Government Administration",
    category: "guideline",
    documentType: "PDF",
    publishedDate: "2022-04-20",
    key: "guideline/public-comm.pdf",
  }
]

export const UpdateLegislation: LegislationFrontType[] = [
  {
    id: "1",
    title: { en: "Amendments to Tax Law", ka: "საგადასახადო კანონში ცვლილებები" },
    summary: { en: "Recent updates to tax policies.", ka: "ბოლო ცვლილებები საგადასახადო პოლიტიკაში." },
    authority: "Revenue Service",
    category: "update",
    documentType: "PDF",
    publishedDate: "2024-01-05",
    key: "update/tax-updates.pdf",
  },
  {
    id: "2",
    title: { en: "Labor Code Update", ka: "შრომის კოდექსის განახლება" },
    summary: { en: "Latest labor regulation updates.", ka: "შრომის რეგულაციების ბოლო განახლებები." },
    authority: "Ministry of Labor",
    category: "update",
    documentType: "WORD",
    publishedDate: "2023-08-18",
    key: "update/labor-update.docx",
  },
  {
    id: "3",
    title: { en: "Court Reform Package", ka: "სასამართლო რეფორმის პაკეტი" },
    summary: { en: "Judicial system reform changes.", ka: "სასამართლო სისტემის რეფორმის ცვლილებები." },
    authority: "Supreme Court of Georgia",
    category: "update",
    documentType: "PDF",
    publishedDate: "2023-12-01",
    key: "update/court-reform.pdf",
  },
];
