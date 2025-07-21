import { NewsType } from "@/types/newsType";

export const mockNews: NewsType[] = [
  {
    id: "news-001",
    slug: {en: "/news-slug", ka: "/news-ka"},
    title: {
      en: "Major Economic Reforms Introduced in 2025",
      ka: "2025 წელს ძირითადი ეკონომიკური რეფორმები წარდგენილია",
    },
    publishedDate: new Date(),
    summery: {
      en: "The government has announced a comprehensive package of economic reforms aimed at boosting foreign investment and modernizing public finance.",
      ka: "მთავრობამ წარადგინა ეკონომიკური რეფორმების პაკეტი, რომელიც მიზნად ისახავს უცხოური ინვესტიციების მოზიდვას და სახელმწიფო ფინანსების მოდერნიზაციას.",
    },
    key: "economic-reforms-2025",
    blocks: [
      {
        id: "b1",
        type: "header",
        content: {
          en: "Overview of Reforms",
          ka: "რეფორმების მიმოხილვა",
        },
        level: 1,
      },
      {
        id: "b2",
        type: "paragraph",
        content: {
          en: "The reforms target key sectors including taxation, digital infrastructure, and public procurement.",
          ka: "რეფორმები ეხება ძირითად სექტორებს, როგორიცაა დაბეგვრა, ციფრული ინფრასტრუქტურა და საჯარო შესყიდვები.",
        },
      },
      {
        id: "b3",
        type: "list",
        content: {
          en: "Key Reform Areas",
          ka: "ძირითადი რეფორმის მიმართულებები",
        },
        listItems: [
          {
            en: "Introduction of flat tax system",
            ka: "ფლატ-ტაქსის სისტემის დანერგვა",
          },
          {
            en: "Digitization of customs procedures",
            ka: "საბაჟო პროცედურების ციფრულიზაცია",
          },
          {
            en: "Transparent public procurement platform",
            ka: "გამჭვირვალე საჯარო შესყიდვების პლატფორმა",
          },
        ],
      },
      {
        id: "b4",
        type: "header",
        content: {
          en: "Impact on Investors",
          ka: "ინვესტორებზე გავლენა",
        },
        level: 2,
      },
      {
        id: "b5",
        type: "paragraph",
        content: {
          en: "Analysts believe the changes will improve the country’s investment climate significantly.",
          ka: "ანალიტიკოსების აზრით, ეს ცვლილებები მნიშვნელოვნად გააუმჯობესებს ქვეყნის საინვესტიციო გარემოს.",
        },
      },
    ],
  },
];
