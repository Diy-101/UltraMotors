import React from "react";
import type { Translations } from "./utils/translations";
import type { Language } from "./hooks/useLanguage";
import type { Slide } from "./types/slide";

interface HeroProps {
  heroSlides: Slide[];
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  translations: Translations;
  language: Language;
}

const Hero: React.FC<HeroProps> = ({
  heroSlides,
  currentSlide,
  setCurrentSlide,
  translations,
  language,
}) => {
  return (
    <section id="hero" className="relative h-[600px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-6">
              <div className="max-w-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl text-gray-200 mb-8">{slide.subtitle}</p>
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer">
                  {translations[language].hero.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
              index === currentSlide
                ? "bg-amber-500"
                : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
