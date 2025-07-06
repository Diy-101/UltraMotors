import React from "react";
import type { Translations } from "./utils/translations";
import LanguageSwitcher from "./LanguageSwitcher";

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
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* ЛОГОТИП */}
        <div className="flex-shrink-0 text-2xl font-bold text-blue-900">
          <span className="text-blue-900">Ultra</span>
          <span className="text-amber-500">Motors</span>
        </div>

        {/* НАВИГАЦИЯ ПО ЦЕНТРУ */}
        <div className="flex-1 flex justify-center">
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-blue-900 font-medium hover:text-amber-500 transition-colors"
            >
              {translations[language].nav.home}
            </a>
            <a
              href="#categories"
              className="text-blue-900 font-medium hover:text-amber-500 transition-colors"
            >
              {translations[language].nav.products}
            </a>
            <a
              href="#about"
              className="text-blue-900 font-medium hover:text-amber-500 transition-colors"
            >
              {translations[language].nav.aboutUs}
            </a>
            <a
              href="#contact"
              className="text-blue-900 font-medium hover:text-amber-500 transition-colors"
            >
              {translations[language].nav.contact}
            </a>
          </nav>
        </div>

        {/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА СПРАВА */}
        <div className="ml-8">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </header>
  );
};

export default Header;
