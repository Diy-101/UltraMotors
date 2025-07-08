import React from "react";
import type { Translations } from "./utils/translations";
import type { Language } from "./hooks/useLanguage";
import type { Brand } from "./types/brand";
import { BrandLogo } from "./BrandLogo";

interface BrandShowcaseProps {
  brands: Brand[];
  translations: Translations;
  language: Language;
}

const BrandShowcase: React.FC<BrandShowcaseProps> = ({
  brands,
  translations,
  language,
}) => {
  return (
    <section id="brands" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl sm:text-2xl text-blue-900 mb-4">
            {translations[language].brands.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-base sm:text-sm">
            {translations[language].brands.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map(({ name, logo, url }) => (
            <BrandLogo name={name} logo={logo} url={url} key={name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
