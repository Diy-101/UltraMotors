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
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            {translations[language].brands.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {translations[language].brands.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map(({ name, logo, url }, index) => (
            <BrandLogo name={name} logo={logo} url={url} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
