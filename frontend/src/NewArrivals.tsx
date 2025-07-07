import React from "react";
import type { Arrival } from "./types/arrival";
import type { Translations } from "./utils/translations";
import type { Language } from "./hooks/useLanguage";
import { motion } from "framer-motion";

interface NewArrivalsProps {
  newArrivals: Arrival[];
  translation: Translations;
  language: Language;
}

const NewArrivals: React.FC<NewArrivalsProps> = ({
  newArrivals,
  translation,
  language,
}) => {
  return (
    <section id="arrivals" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">
            {translation[language].arrivals.title}
          </h2>
          <a
            href="#"
            className="text-amber-500 font-medium hover:text-amber-600 inline-flex items-center cursor-pointer"
          >
            {translation[language].arrivals.button}
            <i className="fas fa-arrow-right ml-2 text-sm"></i>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px rgba(251,191,36,0.15)",
              }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  {product.title}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-amber-500">
                    {product.price}
                  </span>
                  <span
                    className={`text-sm px-3 py-1 rounded-full ${
                      product.availability === "In Stock"
                        ? "bg-green-100 text-green-800"
                        : product.availability === "Limited Stock"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {product.availability}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
