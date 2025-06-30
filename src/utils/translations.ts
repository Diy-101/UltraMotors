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
    button: string;
    slides: Slide[];
  };
  categories: {
    title: string;
    subtitle: string;
    button: string;
    slides: Slide[];
  };
  keybenefits: {
    slides: Slide[];
  };
  brands: {
    title: string;
    subtitle: string;
  };
}

export interface Translations {
  en: LanguageTranslations;
  ru: LanguageTranslations;
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
      button: "Explore Collections",
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
    categories: {
      title: "Premium vehicle components for trucks",
      subtitle:
        "Discover our extensive collection of high-quality European automotive components, meticulously sourced to meet the highest standards of performance and luxury",
      button: "View Products",
      slides: [
        {
          title: "Engine Components",
          subtitle:
            "Premium quality engine parts from leading European manufacturers",
        },
        {
          title: "Suspension Systems",
          subtitle:
            "Performance-enhancing suspension components for optimal handling",
        },
        {
          title: "Brake Systems",
          subtitle: "Superior braking solutions for safety and performance",
        },
        {
          title: "Interior Accessories",
          subtitle:
            "Luxurious interior components to enhance comfort and aesthetics",
        },
      ],
    },
    keybenefits: {
      slides: [
        {
          title: "Premium Quality",
          subtitle:
            "Every component meets or exceeds OEM specifications, ensuring exceptional performance and durability.",
        },
        {
          title: "Authenticity Guaranteed",
          subtitle:
            "All our products come with verification certificates and full manufacturer warranties.",
        },
        {
          title: "Express Shipping",
          subtitle:
            "Fast and secure worldwide delivery with real-time tracking and insurance included.",
        },
      ],
    },
    brands: {
      title: "Trusted by Leading Brands",
      subtitle:
        "We partner with Europe's most prestigious automotive manufacturers to bring you authentic, high-performance components.",
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
      button: "Посмотреть решения",
      slides: [
        {
          title: "Решения для Спецтехники",
          subtitle:
            "Профессиональное оборудование для грузоперевозок и спецтехники",
        },
        {
          title: "Компоненты для Тяжелой Техники",
          subtitle: "Высококачественные запчасти для коммерческого транспорта",
        },
        {
          title: "Коммерческие Решения",
          subtitle: "Полный ассортимент оборудования для грузового транспорта",
        },
      ],
    },
    categories: {
      title: "Премиальные Компоненты для спецтехники и траков",
      subtitle:
        "Открой для себя мир Европейских траковых деталей, соответствующих высоким стандартам качества и надежности.",
      button: "Связаться",
      slides: [
        {
          title: "Моторные Компоненты",
          subtitle:
            "Моторные детали с Европейских заводов специально для вашего трака",
        },
        {
          title: "Амортизационная система",
          subtitle:
            "Компоненты подвески, повышающие производительность и созданные специально для оптимальной управляемости",
        },
        {
          title: "Тормозная Система",
          subtitle:
            "Превосходные тормозные решения для безопасности и производительности",
        },
        {
          title: "Компоненты салона и кузова",
          subtitle:
            "Роскошные компоненты интерьера для повышения комфорта и эстетики",
        },
      ],
    },
    keybenefits: {
      slides: [
        {
          title: "Надёжные компоненты для тяжёлых условий",
          subtitle:
            "Запчасти повышенной прочности, соответствующие или превосходящие OEM-стандарты. Минимум простоев — максимум ресурса даже при экстремальных нагрузках.",
        },
        {
          title: "Гарантированное качество от производителя",
          subtitle:
            "Только оригинальные детали с официальной сертификацией. Уверенность в совместимости и надежности каждого узла вашей техники.",
        },
        {
          title: "Мгновенная поставка — без простоев",
          subtitle:
            "Экспресс-доставка по России и за рубеж с отслеживанием и страховкой. Сокращайте время простоя и восстанавливайте технику без задержек.",
        },
      ],
    },
    brands: {
      title: "Нам доверяют ведущие бренды",
      subtitle:
        "Мы сотрудничаем с крупнейшими мировыми и российскими производителями спецтехники и грузовых автомобилей, чтобы поставлять оригинальные и высокоэффективные комплектующие.",
    },
  },
};
