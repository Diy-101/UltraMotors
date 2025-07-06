import React from "react";
import type { Language } from "./hooks/useLanguage";
import type { Translations } from "./utils/translations";

interface AboutUsProps {
  language: Language;
  translations: Translations;
}

const AboutUs: React.FC<AboutUsProps> = ({ language, translations }) => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20luxury%20automotive%20workshop%20interior%20with%20professional%20mechanics%20working%20on%20high-end%20European%20vehicles%2C%20clean%20and%20organized%20space%20with%20premium%20tools%20and%20equipment%2C%20dramatic%20lighting%20with%20natural%20ambiance%2C%20high-end%20professional%20environment&width=600&height=400&seq=13&orientation=landscape"
              alt="About UltraMotors"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover object-top"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              {translations[language].aboutUs.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {translations[language].aboutUs.subtitle}
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                {translations[language].aboutUs.qualities.map((quality) => (
                  <div className="flex items-center mb-3">
                    <i className="fas fa-check-circle text-amber-500 mr-2"></i>
                    <span className="font-medium text-blue-900">
                      {quality.quality}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer">
                {translations[language].aboutUs.buttonOne}
              </button>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer">
                {translations[language].aboutUs.buttonTwo}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
