import React from "react";
import type { Translations } from "./utils/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import {
  scrollToSectionOrNavigate,
  scrollToTopOrNavigate,
} from "./utils/navigation";

type Language = keyof Translations;

interface HeaderProps {
  isScrolled: boolean;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  translations: Translations;
}

const Header: React.FC<HeaderProps> = ({
  isScrolled,
  language,
  setLanguage,
  translations,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Helper to handle hash navigation from any route
  const handleNav = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSectionOrNavigate(hash, location, navigate);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* ЛОГОТИП */}
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            scrollToTopOrNavigate(location, navigate);
          }}
        >
          <div className="flex-shrink-0 text-2xl font-bold text-blue-900">
            <span className="text-blue-900">Ultra</span>
            <span className="text-amber-500">Motors</span>
          </div>
        </Link>
        {/* НАВИГАЦИЯ ПО ЦЕНТРУ */}
        <div className="flex-1 flex justify-center">
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-blue-900 font-medium hover:text-amber-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToTopOrNavigate(location, navigate);
              }}
            >
              {translations[language].nav.home}
            </Link>
            <a
              href="#categories"
              className="text-blue-900 font-medium hover:text-amber-500 transition-colors"
              onClick={handleNav("#categories")}
            >
              {translations[language].nav.products}
            </a>
            <a
              href="#about"
              className="text-blue-900 font-medium hover:text-amber-500 transition-colors"
              onClick={handleNav("#about")}
            >
              {translations[language].nav.aboutUs}
            </a>
            <a
              href="#contact"
              className="text-blue-900 font-medium hover:text-amber-500 transition-colors"
              onClick={handleNav("#contact")}
            >
              {translations[language].nav.contact}
            </a>
          </nav>
        </div>

        {/* БУРГЕР ДЛЯ МОБИЛЬНЫХ */}
        <div className="md:hidden flex items-center">
          <button
            className="text-blue-900 focus:outline-none"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА СПРАВА */}
        <div className="ml-8 hidden md:block">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </div>
      {/* МОБИЛЬНОЕ МЕНЮ */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setMobileOpen(false)}
        >
          <nav
            className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg flex flex-col py-8 px-6 space-y-6 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-6 text-blue-900"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X size={28} />
            </button>
            <Link
              to="/"
              className="text-blue-900 font-medium hover:text-amber-500 transition-colors text-lg"
              onClick={(e) => {
                e.preventDefault();
                scrollToTopOrNavigate(location, navigate);
                setMobileOpen(false);
              }}
            >
              {translations[language].nav.home}
            </Link>
            <a
              href="#categories"
              className="text-blue-900 font-medium hover:text-amber-500 transition-colors text-lg"
              onClick={(e) => {
                handleNav("#categories")(e);
                setMobileOpen(false);
              }}
            >
              {translations[language].nav.products}
            </a>
            <a
              href="#about"
              className="text-blue-900 font-medium hover:text-amber-500 transition-colors text-lg"
              onClick={(e) => {
                handleNav("#about")(e);
                setMobileOpen(false);
              }}
            >
              {translations[language].nav.aboutUs}
            </a>
            <a
              href="#contact"
              className="text-blue-900 font-medium hover:text-amber-500 transition-colors text-lg"
              onClick={(e) => {
                handleNav("#contact")(e);
                setMobileOpen(false);
              }}
            >
              {translations[language].nav.contact}
            </a>
            {/* Bottom section: language switcher and phone */}
            <div className="flex flex-col justify-end flex-1 mt-auto">
              <div className="flex justify-end mb-4">
                <LanguageSwitcher
                  language={language}
                  setLanguage={setLanguage}
                />
              </div>
              <a
                href="tel:+79650048438"
                className="flex items-center justify-center text-blue-900 font-semibold text-base bg-amber-100 rounded-lg py-2 px-4 shadow hover:bg-amber-200 transition-colors whitespace-nowrap"
                style={{ letterSpacing: "0.5px" }}
              >
                <Phone className="w-5 h-5 mr-2 text-amber-500" />
                +7 (965) 004-84-38
              </a>
              <a
                href="tel:+79626858417"
                className="flex items-center justify-center text-blue-900 font-semibold text-base bg-amber-100 rounded-lg py-2 px-4 shadow hover:bg-amber-200 transition-colors whitespace-nowrap"
                style={{ letterSpacing: "0.5px" }}
              >
                <Phone className="w-5 h-5 mr-2 text-amber-500" />
                +7 (962) 685-84-17
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
