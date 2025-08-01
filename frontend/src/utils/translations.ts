// utils/translations.ts
interface Arrival {
  title: string;
  price: string;
  availability: string;
}

interface Quality {
  quality: string;
}

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
  arrivals: {
    title: string;
    button: string;
    arrivals: Arrival[];
  };
  keybenefits: {
    slides: Slide[];
  };
  brands: {
    title: string;
    subtitle: string;
  };
  callToAction: {
    title: string;
    subtitle: string;
    buttonOne: string;
    buttonTwo: string;
  };
  aboutUs: {
    title: string;
    subtitle: string;
    buttonOne: string;
    buttonTwo: string;
    qualities: Quality[];
  };
  contactForm: {
    title: string;
    subtitle: string;
    leftSide: {
      firstName: string;
      placeholderFN: string;
      lastName: string;
      placeholderLN: string;
      email: string;
      placeholderEmail: string;
      phoneNumber: string;
      placeholderPN: string;
      message: string;
      placeholderMessage: string;
      sendButton: string;
    };
    rightSide: {
      titlelocation: string;
      firstPartLocation: string;
      secondPartLocation: string;
      contactInfo: string;
      workingHours: string;
      connect: string;
      phone_1: string;
      phone_2: string;
      ourEmail: string;
    };
    agreementText: string;
    agreementError: string;
  };
  footer: {
    subtitle: string;
    rules: string;
    quickLinks: {
      title: string;
      catalog: string;
      about: string;
      offers: string;
      policy: string;
      terms: string;
    };
    contactUs: {
      title: string;
      firstPartAddress: string;
      secondPartAddress: string;
      number_1: string;
      number_2: string;
      email: string;
      workingHours: string;
    };
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
    arrivals: {
      title: "New Arrivals",
      button: "Contact",
      arrivals: [
        {
          title: "Caterpillar C6 Fuel Injector",
          price: "Request",
          availability: "In Stock",
        },
        {
          title: "HITACHI ZEXEL Air Conditioner Compressor",
          price: "Request",
          availability: "Pre-order",
        },
        {
          title: "Hydromotor 0077847 Ponsse",
          price: "Request",
          availability: "In Stock",
        },
        {
          title: "Power Steering Pump",
          price: "Request",
          availability: "Pre-order",
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
    callToAction: {
      title: "European Quality Standards",
      subtitle:
        "Experience the difference that European engineering excellence makes. Our components are sourced directly from the same manufacturers that supply Europe's most prestigious automotive brands.",
      buttonOne: "Request Quote",
      buttonTwo: "Contact Sales",
    },
    aboutUs: {
      title: "About UltraMotors",
      subtitle:
        "Founded in 2010, UltraMotors has established itself as a leading provider of premium European automotive components. Our commitment to excellence and authenticity has made us the trusted choice for automotive enthusiasts and professional mechanics across the globe.",
      buttonOne: "Learn More",
      buttonTwo: "Contact Us",
      qualities: [
        {
          quality: "15+ Years Experience",
        },
        {
          quality: "Certified Experts",
        },
        {
          quality: "Global Shipping",
        },
        {
          quality: "Quality Guarantee",
        },
      ],
    },
    contactForm: {
      title: "Get in Touch",
      subtitle:
        "We're here to help with any questions about our premium automotive components. Fill out the form below and we'll get back to you shortly.",
      leftSide: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phoneNumber: "Phone Number",
        message: "Message",
        placeholderFN: "Enter your first name",
        placeholderLN: "Enter your last name",
        placeholderEmail: "Enter your email",
        placeholderPN: "Enter your phone number",
        placeholderMessage: "How can we help you?",
        sendButton: "Submit",
      },
      rightSide: {
        titlelocation: "Our Location",
        firstPartLocation: "Str. Marshala Govorova, house 37, lit. A",
        secondPartLocation: "St. Petersburg, Russia, 198095",
        contactInfo: "Contact Information",
        workingHours: "Mon-Fri: 9.00 — 19.00",
        phone_1: "+7 965 004 84-38",
        phone_2: "+7 962 685 84-17",
        ourEmail: "6801782@mail.ru",
        connect: "Connect With Us",
      },
      agreementText: "I agree to the {policy} and {terms}.",
      agreementError:
        "You must agree to the Privacy Policy and Terms and Conditions.",
    },
    footer: {
      subtitle:
        "Premium European vehicle components for discerning automotive enthusiasts. Quality, authenticity, and excellence in every part.",
      rules: "© 2025 UltraMotors. All rights reserved.",
      quickLinks: {
        title: "Quick Links",
        catalog: "Product Catalog",
        about: "About Us",
        offers: "Offers",
        policy: "Privacy Policy",
        terms: "Terms & Conditions",
      },
      contactUs: {
        title: "Contact Us",
        firstPartAddress: "Str. Marshala Govorova, house 37, lit. A",
        secondPartAddress: "St. Petersburg, Russia, 198095",
        number_1: "+7 (965) 004-84-38",
        number_2: "+7 (962) 685-84-17",
        email: "6801782@mail.ru",
        workingHours: "Mon-Fri: 9.00 — 19.00",
      },
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
      button: "Связаться",
      slides: [
        {
          title: "Решения для Спецтехники",
          subtitle:
            "Комплектующие и запасные части для экскаваторов, погрузчиков, тракторов, лесозаготовительной и другой специализированной техники.",
        },
        {
          title: "Компоненты для Тяжелой Техники",
          subtitle: "Высококачественные запчасти для коммерческого транспорта",
        },
        {
          title: "Комплексные решения для грузового транспорта",
          subtitle:
            "Оборудование, запчасти и аксессуары для любых грузовых автомобилей европейских марок",
        },
      ],
    },
    categories: {
      title: "Премиальные европейские компоненты для спецтехники и траков",
      subtitle:
        "Выбирай комплектующие, созданные для максимальной надежности и долговечности.",
      button: "Связаться",
      slides: [
        {
          title: "Моторные детали",
          subtitle:
            "Моторные детали с Европейских заводов специально для вашего трака",
        },
        {
          title: "Детали подвески",
          subtitle:
            "Сайлентблоки, рычаги, стойки, тяги, пневмоподушки, амортизаторы, пружины, рессоры и многое другое.",
        },
        {
          title: "Тормозная cистема",
          subtitle:
            "Тормозные колодки, диски, барабаны, суппорты, цилиндры, ремкомплекты, блоки управления ABS/ESP, компрессора и многое другое для вашей безопасности",
        },
        {
          title: "Детали салона и кузовные элементы",
          subtitle:
            "Крылья, бампера, стекла, решетки радиатора, зеркала , фары, поворотники и другое.",
        },
      ],
    },
    arrivals: {
      title: "Новые поступления",
      button: "Связаться",
      arrivals: [
        {
          title: "Топливная форсунка Caterpillar DEUTZ",
          price: "Узнать",
          availability: "В наличии",
        },
        {
          title: "Компрессор кондиционера HITACHI ZEXEL",
          price: "Узнать",
          availability: "Предзаказ",
        },
        {
          title: "Гидромотор 0077847 Ponsse",
          price: "Узнать",
          availability: "В наличии",
        },
        {
          title: "Гидромотор FUCHS TEREX",
          price: "Узнать",
          availability: "Предзаказ",
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
      title: "Работаем с широким спектром марок грузовиков и спецтехники",
      subtitle:
        "Мы сотрудничаем с крупнейшими мировыми и российскими производителями спецтехники и грузовых автомобилей, чтобы поставлять оригинальные и высокоэффективные комплектующие.",
    },
    callToAction: {
      title: "Европейские стандарты качества",
      subtitle:
        "Почувствуйте разницу, которую приносит европейское инженерное мастерство. Наши компоненты поставляются напрямую от тех же производителей, которые снабжают самые престижные автомобильные бренды Европы.",
      buttonOne: "Запросить цену",
      buttonTwo: "Связаться",
    },
    aboutUs: {
      title: "О компании UltraMotors",
      subtitle:
        "Основанная в 2010 году, компания UltraMotors зарекомендовала себя как ведущий поставщик премиальных европейских автокомпонентов. Наша приверженность качеству и подлинности сделала нас надёжным выбором как для автолюбителей, так и для профессиональных механиков по всему миру.",
      buttonOne: "Узнать больше",
      buttonTwo: "Связаться",
      qualities: [
        {
          quality: "15 лет опыта",
        },
        {
          quality: "Сертифицированные специалисты",
        },
        {
          quality: "Доставка по всему миру",
        },
        {
          quality: "Гарантия качества",
        },
      ],
    },
    contactForm: {
      title: "Свяжитесь с нами",
      subtitle:
        "Мы готовы помочь с любыми вопросами о наших премиальных автокомпонентах. Заполните форму ниже — и мы свяжемся с вами в ближайшее время.",
      leftSide: {
        firstName: "Имя",
        lastName: "Фамилия",
        email: "Электронная почта",
        phoneNumber: "Номер телефона",
        message: "Сообщение",
        placeholderFN: "Введите ваше имя",
        placeholderLN: "Введите вашу фамилию",
        placeholderEmail: "Введите вашу почту",
        placeholderPN: "Введите номер телефона",
        placeholderMessage: "Чем мы можем помочь?",
        sendButton: "Отправить",
      },
      rightSide: {
        titlelocation: "Наш адрес",
        firstPartLocation: "ул. Маршала Говорова, дом 37, лит. А",
        secondPartLocation: "Санкт-Петербург, Россия, 198095",
        contactInfo: "Контактная информация",
        workingHours: "Пн–Пт: 9:00 — 19:00",
        phone_1: "+7 965 004 84-38",
        phone_2: "+7 962 685 84-17",
        ourEmail: "6801782@mail.ru",
        connect: "Мы в соцсетях",
      },
      agreementText: "Я соглашаюсь с {policy} и {terms}.",
      agreementError:
        "Вы должны согласиться с Политикой конфиденциальности и Условиями использования.",
    },
    footer: {
      subtitle:
        "Премиальные европейские автокомпоненты для требовательных автолюбителей. Качество, подлинность и совершенство в каждой детали.",
      rules: "© 2025 UltraMotors. Все права защищены.",
      quickLinks: {
        title: "Быстрые ссылки",
        catalog: "Каталог продукции",
        about: "О нас",
        offers: "Предложения",
        policy: "Политика конфиденциальности",
        terms: "Условия использования",
      },
      contactUs: {
        title: "Свяжитесь с нами",
        firstPartAddress: "ул. Маршала Говорова, дом 37, лит. А",
        secondPartAddress: "Санкт-Петербург, Россия, 198095",
        number_1: "+7 (965) 004-84-38",
        number_2: "+7 (962) 685-84-17",
        email: "6801782@mail.ru",
        workingHours: "Пн–Пт: 9:00 — 19:00",
      },
    },
  },
};
