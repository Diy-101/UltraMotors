import React from "react";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  language: "en" | "ru";
  setLanguage: (lang: "en" | "ru") => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  language,
  setLanguage,
}) => {
  return (
    <div className="relative group ml-4">
      <button className="flex items-center justify-center text-blue-900 hover:text-amber-500 transition-colors cursor-pointer">
        <Globe className="w-5 h-5" />
      </button>
      <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top-right z-50">
        <button
          onClick={() => setLanguage("en")}
          className={`block w-full px-4 py-2 text-sm text-left ${
            language === "en"
              ? "bg-blue-900 text-white"
              : "text-gray-700 hover:bg-blue-900 hover:text-white"
          } cursor-pointer`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage("ru")}
          className={`block w-full px-4 py-2 text-sm text-left ${
            language === "ru"
              ? "bg-blue-900 text-white"
              : "text-gray-700 hover:bg-blue-900 hover:text-white"
          } cursor-pointer`}
        >
          Русский
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
