import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import ProductCategories from "./ProductCategories";
import NewArrivals from "./NewArrivals";
import KeyBenefits from "./KeyBenefits";
import BrandShowcase from "./BrandShowcase";
import AboutUs from "./AboutUs";
import CallToAction from "./CallToAction";
import ContactForm from "./ContactForm";
import { translations } from "./utils/translations.ts";
import Footer from "./Footer";
import { useLanguage } from "./hooks/useLanguage";
import type { Language } from "./hooks/useLanguage";

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
      image:
        "https://readdy.ai/api/search-image?query=Luxury%20automotive%20components%20arranged%20elegantly%20on%20a%20clean%20white%20surface%2C%20high-end%20car%20parts%20with%20chrome%20and%20carbon%20fiber%20finishes%2C%20professional%20studio%20lighting%2C%20ultra%20high%20resolution%20product%20photography%2C%20minimalist%20background%20with%20soft%20shadows&width=1200&height=600&seq=1&orientation=landscape",
      title: translations[language].hero.slides[0].title,
      subtitle: translations[language].hero.slides[0].subtitle,
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=Close-up%20of%20pristine%20engine%20parts%20and%20luxury%20vehicle%20components%20with%20metallic%20finish%2C%20arranged%20on%20white%20surface%2C%20professional%20product%20photography%20with%20dramatic%20lighting%2C%20automotive%20engineering%20excellence%2C%20minimalist%20clean%20background&width=1200&height=600&seq=2&orientation=landscape",
      title: translations[language].hero.slides[1].title,
      subtitle: translations[language].hero.slides[1].subtitle,
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=Luxury%20car%20interior%20components%20and%20dashboard%20elements%20with%20premium%20leather%20and%20carbon%20fiber%20textures%2C%20arranged%20on%20white%20surface%2C%20professional%20automotive%20photography%20with%20perfect%20lighting%2C%20minimalist%20clean%20background&width=1200&height=600&seq=3&orientation=landscape",
      title: translations[language].hero.slides[2].title,
      subtitle: translations[language].hero.slides[2].subtitle,
    },
  ];

  const productCategories = [
    {
      title: "Engine Components",
      image:
        "https://readdy.ai/api/search-image?query=High-performance%20engine%20components%20and%20parts%20arranged%20elegantly%2C%20pistons%2C%20valves%20and%20camshafts%20with%20metallic%20finish%2C%20professional%20product%20photography%20on%20white%20background%20with%20soft%20shadows%2C%20automotive%20engineering%20excellence&width=400&height=300&seq=4&orientation=landscape",
      description:
        "Premium quality engine parts from leading European manufacturers",
    },
    {
      title: "Suspension Systems",
      image:
        "https://readdy.ai/api/search-image?query=Luxury%20car%20suspension%20components%20and%20shock%20absorbers%20with%20chrome%20finish%2C%20arranged%20professionally%20on%20white%20surface%2C%20high-end%20automotive%20parts%20photography%20with%20perfect%20lighting%2C%20minimalist%20clean%20background&width=400&height=300&seq=5&orientation=landscape",
      description:
        "Performance-enhancing suspension components for optimal handling",
    },
    {
      title: "Brake Systems",
      image:
        "https://readdy.ai/api/search-image?query=Premium%20brake%20discs%2C%20calipers%20and%20brake%20pads%20with%20metallic%20finish%2C%20arranged%20professionally%20on%20white%20surface%2C%20high-end%20automotive%20parts%20photography%20with%20dramatic%20lighting%2C%20minimalist%20clean%20background&width=400&height=300&seq=6&orientation=landscape",
      description: "Superior braking solutions for safety and performance",
    },
    {
      title: "Interior Accessories",
      image:
        "https://readdy.ai/api/search-image?query=Luxury%20automotive%20interior%20accessories%20including%20leather-wrapped%20steering%20wheels%2C%20carbon%20fiber%20trim%20pieces%20and%20premium%20control%20knobs%2C%20arranged%20on%20white%20surface%2C%20professional%20product%20photography%20with%20perfect%20lighting%2C%20minimalist%20clean%20background&width=400&height=300&seq=7&orientation=landscape",
      description:
        "Luxurious interior components to enhance comfort and aesthetics",
    },
  ];

  const newArrivals = [
    {
      title: "Carbon Fiber Intake System",
      image:
        "https://readdy.ai/api/search-image?query=Carbon%20fiber%20automotive%20air%20intake%20system%20with%20polished%20metal%20accents%2C%20professional%20product%20photography%20on%20white%20background%20with%20soft%20shadows%2C%20high-end%20car%20part%20with%20detailed%20textures%2C%20minimalist%20clean%20presentation&width=300&height=300&seq=8&orientation=squarish",
      price: "$1,299.99",
      availability: "In Stock",
    },
    {
      title: "Premium Leather Steering Wheel",
      image:
        "https://readdy.ai/api/search-image?query=Luxury%20car%20steering%20wheel%20with%20premium%20perforated%20leather%20and%20carbon%20fiber%20accents%2C%20professional%20automotive%20photography%20on%20white%20background%20with%20soft%20shadows%2C%20high-end%20interior%20component%2C%20minimalist%20clean%20presentation&width=300&height=300&seq=9&orientation=squarish",
      price: "$899.99",
      availability: "Limited Stock",
    },
    {
      title: "Performance Exhaust System",
      image:
        "https://readdy.ai/api/search-image?query=High-performance%20car%20exhaust%20system%20with%20polished%20stainless%20steel%20finish%2C%20professional%20automotive%20photography%20on%20white%20background%20with%20soft%20shadows%2C%20premium%20vehicle%20component%20with%20detailed%20engineering%2C%20minimalist%20clean%20presentation&width=300&height=300&seq=10&orientation=squarish",
      price: "$2,499.99",
      availability: "Pre-order",
    },
    {
      title: "LED Matrix Headlight Set",
      image:
        "https://readdy.ai/api/search-image?query=Advanced%20LED%20matrix%20headlight%20assembly%20for%20luxury%20vehicles%20with%20sleek%20design%2C%20professional%20automotive%20photography%20on%20white%20background%20with%20soft%20shadows%2C%20high-tech%20car%20component%20with%20crystal%20clear%20lens%2C%20minimalist%20clean%20presentation&width=300&height=300&seq=11&orientation=squarish",
      price: "$3,199.99",
      availability: "In Stock",
    },
  ];

  const brands = [
    "KAMAZ",
    "MAN",
    "Volvo Trucks",
    "Scania",
    "DAF",
    "IVECO",
    "Caterpillar",
    "Liebherr",
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
        <Hero
          heroSlides={heroSlides}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          translations={translations}
          language={language}
        />
        <ProductCategories productCategories={productCategories} />
        <NewArrivals newArrivals={newArrivals} />
        <KeyBenefits />
        <BrandShowcase brands={brands} />
        <AboutUs />
        <CallToAction />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
