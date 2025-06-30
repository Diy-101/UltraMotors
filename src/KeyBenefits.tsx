import React from "react";
import type { Slide } from "./utils/translations";
import type { LucideProps } from "lucide-react";

export interface BenefitSlide extends Slide {
  icon: React.FC<LucideProps>;
}

interface BenefitsProps {
  benefitSlides: BenefitSlide[];
}

const KeyBenefits: React.FC<BenefitsProps> = ({ benefitSlides }) => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitSlides.map((slides) => {
            const Icon = slides.icon;
            return (
              <div className="text-center">
                <div className="inline-block p-4 bg-amber-500 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{slides.title}</h3>
                <p className="text-blue-100">{slides.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
