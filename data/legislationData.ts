import { LegislationType } from "@/types/legislationType";

export const InternationalLegislation: LegislationType[] = [
  {
    id: "1",
    title: { en: "National Tax Code", ka: "ეროვნული საგადასახადო კოდექსი" },
    summary: {
      en: "Defines tax obligations in Georgia.",
      ka: "განსაზღვრავს საგადასახადო ვალდებულებებს საქართველოში.",
    },
    authority: { en: "Ministry of Foreign Affairs", ka: "მინისტრი" },
    category: "national",
    documentType: "PDF",
    key: "national/tax-code.pdf",
    publishedDate: new Date(),
  },
  {
    id: "2",
    title: { en: "Labor Law", ka: "შრომის კანონი" },
    summary: {
      en: "Governs employee-employer relationships.",
      ka: "არეგულირებს დამსაქმებელსა და დასაქმებულს შორის ურთიერთობას.",
    },
    publishedDate: new Date(),
    authority: { en: "Ministry of Foreign Affairs", ka: "მინისტრი" },
    category: "national",
    documentType: "WORD",
    key: "national/labor-law.docx",
  },
  {
    id: "3",
    title: { en: "Civil Code", ka: "სამოქალაქო კოდექსი" },
    summary: {
      en: "Regulates private law matters.",
      ka: "არეგულირებს კერძო სამართლის საკითხებს.",
    },
    publishedDate: new Date(),
    authority: { en: "Ministry of Foreign Affairs", ka: "მინისტრი" },
    category: "national",
    documentType: "PDF",
    key: "national/civil-code.pdf",
  },
];

export const nationalLegislation: LegislationType[] = [
  {
    id: "1",
    title: {
      en: "EU Partnership Agreement",
      ka: "ევროკავშირთან პარტნიორობის შეთანხმება",
    },
    summary: {
      en: "Outlines cooperation between EU and Georgia.",
      ka: "განსაზღვრავს თანამშრომლობას ევროკავშირსა და საქართველოს შორის.",
    },
    publishedDate: new Date(),
    authority: { en: "Ministry of Foreign Affairs", ka: "მინისტრი" },
    category: "international",
    documentType: "PDF",
    key: "international/eu-agreement.pdf",
  },
  {
    id: "2",
    title: {
      en: "UN Human Rights Charter",
      ka: "გაეროს ადამიანის უფლებათა ქარტია",
    },
    summary: {
      en: "Human rights document signed by Georgia.",
      ka: "ადამიანის უფლებების დოკუმენტი, რომელსაც საქართველო ხელს აწერს.",
    },
    authority: { en: "Ministry of Foreign Affairs", ka: "მინისტრი" },
    category: "international",
    publishedDate: new Date(),
    documentType: "WORD",
    key: "international/un-rights.docx",
  },
  {
    id: "3",
    title: {
      en: "WTO Membership Protocol",
      ka: "მსოფლიო სავაჭრო ორგანიზაციის წევრობის პროტოკოლი",
    },
    summary: {
      en: "Georgia's entry terms to WTO.",
      ka: "საქართველოს წევრობის პირობები მსოფლიო სავაჭრო ორგანიზაციაში.",
    },
    authority: { en: "Ministry of Foreign Affairs", ka: "მინისტრი" },
    publishedDate: new Date(),
    category: "international",
    documentType: "PDF",
    key: "international/wto-protocol.pdf",
  },
];

export const guidelineLegislation: LegislationType[] = [
  {
    id: "1",
    title: { en: "Procurement Guideline", ka: "შესყიდვების სახელმძღვანელო" },
    summary: {
      en: "How to conduct state procurements.",
      ka: "სახელმწიფო შესყიდვების განხორციელების წესი.",
    },
    authority: { en: "Ministry of Foreign Affairs", ka: "მინისტრი" },
    category: "guideline",
    publishedDate: new Date(),
    documentType: "PDF",
    key: "guideline/procurement.pdf",
  },
  {
    id: "2",
    title: {
      en: "Environmental Impact Guide",
      ka: "გარემოზე ზემოქმედების სახელმძღვანელო",
    },
    summary: {
      en: "Assessment practices for projects.",
      ka: "პროექტების ზემოქმედების შეფასების პრაქტიკა.",
    },
    authority: { en: "Ministry of Foreign Affairs", ka: "მინისტრი" },
    category: "guideline",
    publishedDate: new Date(),
    documentType: "WORD",
    key: "guideline/environment.docx",
  },
  {
    id: "3",
    title: {
      en: "Public Communication Guide",
      ka: "საზოგადოებასთან კომუნიკაციის სახელმძღვანელო",
    },
    summary: {
      en: "Standards for public officials.",
      ka: "სტანდარტები საჯარო მოხელეებისთვის.",
    },
    authority: { en: "Ministry of Foreign Affairs", ka: "მინისტრი" },
    publishedDate: new Date(),
    category: "guideline",
    documentType: "PDF",
    key: "guideline/public-comm.pdf",
  },
];

export const UpdateLegislation: LegislationType[] = [
  {
    id: "1",
    title: {
      en: "Amendments to Tax Law",
      ka: "საგადასახადო კანონში ცვლილებები",
    },
    summary: {
      en: "Recent updates to tax policies.",
      ka: "ბოლო ცვლილებები საგადასახადო პოლიტიკაში.",
    },
    authority: { en: "Ministry of Foreign Affairs", ka: "მინისტრი" },
    category: "update",
    publishedDate: new Date(),
    documentType: "PDF",
    key: "update/tax-updates.pdf",
  },
  {
    id: "2",
    title: { en: "Labor Code Update", ka: "შრომის კოდექსის განახლება" },
    summary: {
      en: "Latest labor regulation updates.",
      ka: "შრომის რეგულაციების ბოლო განახლებები.",
    },
    authority: { en: "Ministry of Foreign Affairs", ka: "მინისტრი" },
    category: "update",
    publishedDate: new Date(),
    documentType: "WORD",
    key: "update/labor-update.docx",
  },
  {
    id: "3",
    title: { en: "Court Reform Package", ka: "სასამართლო რეფორმის პაკეტი" },
    summary: {
      en: "Judicial system reform changes.",
      ka: "სასამართლო სისტემის რეფორმის ცვლილებები.",
    },
    authority: { en: "Ministry of Foreign Affairs", ka: "მინისტრი" },
    category: "update",
    documentType: "PDF",
    key: "update/court-reform.pdf",
    publishedDate: new Date(),
  },
];
