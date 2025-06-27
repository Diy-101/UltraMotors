// utils/translations.ts

export interface Slide {
  title: string;
  subtitle: string;
}

export interface NavTranslations {
  home: string;
  products: string;
  aboutUs: string;
  contact: string;
}

export interface LanguageTranslations {
  nav: NavTranslations;
  hero: {
    slides: Slide[];
  };
  // Добавляй другие разделы переводов по необходимости
}

export interface Translations {
  en: LanguageTranslations;
  ru: LanguageTranslations;
  // Можно добавить другие языки
}

export const translations: Translations = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      aboutUs: "About Us",
      contact: "Contact",
    },
    hero: {
      slides: [
        {
          title: "Special Vehicle Solutions",
          subtitle:
            "Professional equipment for cargo transportation and special purposes",
        },
        {
          title: "Heavy-Duty Components",
          subtitle: "High-quality parts for commercial and special vehicles",
        },
        {
          title: "Commercial Solutions",
          subtitle: "Complete range of cargo and special vehicle equipment",
        },
      ],
    },
  },
  ru: {
    nav: {
      home: "Главная",
      products: "Продукция",
      aboutUs: "О Нас",
      contact: "Контакты",
    },
    hero: {
      slides: [
        {
          title: "Решения для Спецтехники",
          subtitle:
            "Профессиональное оборудование для грузоперевозок и спецтехники",
        },
        {
          title: "Компоненты для Тяжелой Техники",
          subtitle:
            "Высококачественные запчасти для коммерческого транспорта",
        },
        {
          title: "Коммерческие Решения",
          subtitle:
            "Полный ассортимент оборудования для грузового транспорта",
        },
      ],
    },
  },
};
