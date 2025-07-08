import React, { useState, useEffect } from "react";
import Header from "./Header.tsx";
import Hero from "./Hero.tsx";
import ProductCategories from "./ProductCategories.tsx";
import NewArrivals from "./NewArrivals.tsx";
import KeyBenefits from "./KeyBenefits.tsx";
import BrandShowcase from "./BrandShowcase.tsx";
import AboutUs from "./AboutUs.tsx";
import CallToAction from "./CallToAction.tsx";
import ContactForm from "./ContactForm.tsx";
import { translations } from "./utils/translations.ts";
import Footer from "./Footer.tsx";
import { useLanguage } from "./hooks/useLanguage.ts";
import type { Language } from "./hooks/useLanguage.ts";
import { Truck, BadgeCheck, PackageCheck } from "lucide-react";
import { brands } from "./data/brands.ts";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  const browserLang = navigator.language.slice(0, 2); // "en", "ru"
  const supportedLangs = ["en", "ru"];
  const initialLang = supportedLangs.includes(browserLang)
    ? (browserLang as Language)
    : "en";

  const { language, setLanguage, t } = useLanguage(initialLang);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      image: "/machine.jpg",
      title: t.hero.slides[0].title,
      subtitle: t.hero.slides[0].subtitle,
    },
    {
      image: "/digger.jpg",
      title: t.hero.slides[1].title,
      subtitle: t.hero.slides[1].subtitle,
    },
    {
      image: "/hero3.jpg",
      title: t.hero.slides[2].title,
      subtitle: t.hero.slides[2].subtitle,
    },
  ];

  const productCategories = [
    {
      title: t.categories.slides[0].title,
      image: "/engine.jpg",
      description: t.categories.slides[0].subtitle,
    },
    {
      title: t.categories.slides[1].title,
      image: "/suspension.jpg",
      description: t.categories.slides[1].subtitle,
    },
    {
      title: t.categories.slides[2].title,
      image: "/break.jpg",
      description: t.categories.slides[2].subtitle,
    },
    {
      title: t.categories.slides[3].title,
      image: "/interior.jpg",
      description: t.categories.slides[3].subtitle,
    },
  ];

  const newArrivals = [
    {
      title: translations[language].arrivals.arrivals[0].title,
      image: "/nozzle.png",
      price: translations[language].arrivals.arrivals[0].price,
      availability: translations[language].arrivals.arrivals[0].availability,
    },
    {
      title: translations[language].arrivals.arrivals[1].title,
      image: "/compressor.png",
      price: translations[language].arrivals.arrivals[1].price,
      availability: translations[language].arrivals.arrivals[1].availability,
    },
    {
      title: translations[language].arrivals.arrivals[2].title,
      image: "/ponsse_component.png",
      price: translations[language].arrivals.arrivals[2].price,
      availability: translations[language].arrivals.arrivals[2].availability,
    },
    {
      title: translations[language].arrivals.arrivals[3].title,
      image: "/pump.png",
      price: translations[language].arrivals.arrivals[3].price,
      availability: translations[language].arrivals.arrivals[3].availability,
    },
  ];

  const keybenefits = [
    {
      title: t.keybenefits.slides[0].title,
      subtitle: t.keybenefits.slides[0].subtitle,
      icon: Truck,
    },
    {
      title: t.keybenefits.slides[1].title,
      subtitle: t.keybenefits.slides[1].subtitle,
      icon: BadgeCheck,
    },
    {
      title: t.keybenefits.slides[2].title,
      subtitle: t.keybenefits.slides[2].subtitle,
      icon: PackageCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header
        isScrolled={isScrolled}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        language={language}
        setLanguage={setLanguage}
        translations={translations}
      />
      <main className="pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero
                  heroSlides={heroSlides}
                  currentSlide={currentSlide}
                  setCurrentSlide={setCurrentSlide}
                  translations={translations}
                  language={language}
                />
                <ProductCategories
                  title={translations[language].categories.title}
                  subtitle={translations[language].categories.subtitle}
                  button={translations[language].categories.button}
                  productCategories={productCategories}
                />
                <NewArrivals
                  newArrivals={newArrivals}
                  translation={translations}
                  language={language}
                />
                <KeyBenefits benefitSlides={keybenefits} />
                <BrandShowcase
                  brands={brands}
                  translations={translations}
                  language={language}
                />
                <AboutUs language={language} translations={translations} />
                <CallToAction language={language} translations={translations} />
                <ContactForm language={language} translations={translations} />
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </main>
      <Footer language={language} translations={translations} />
    </div>
  );
};

export default App;
