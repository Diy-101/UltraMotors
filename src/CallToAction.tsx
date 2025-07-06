import React from "react";
import type { Language } from "./hooks/useLanguage";
import type { Translations } from "./utils/translations";

interface CallProps {
  language: Language;
  translations: Translations;
}

const CallToAction: React.FC<CallProps> = ({ language, translations }) => {
  return (
    <section
      id="callToAction"
      className="relative py-24 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/trucks.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-blue-900/80"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {translations[language].callToAction.title}
          </h2>
          <p className="text-xl mb-8">
            {translations[language].callToAction.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer">
              {translations[language].callToAction.buttonOne}
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer">
              {translations[language].callToAction.buttonTwo}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
