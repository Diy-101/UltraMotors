import React from "react";
import type { Arrival } from "./types/arrival";
import type { Translations } from "./utils/translations";
import type { Language } from "./hooks/useLanguage";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
            href="#contact"
            className="text-amber-500 font-medium hover:text-amber-600 inline-flex items-center cursor-pointer"
          >
            {translation[language].arrivals.button}
            <ArrowRight className="ml-2 w-4 h-4" />
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
              <div className="h-64 overflow-hidden flex items-center justify-center bg-gray-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  {product.title}
                </h3>
                <div className="flex justify-between items-center">
                  <a href="#contact" className="group">
                    <span className="text-xl font-bold text-amber-500 group-hover:underline group-hover:text-amber-600 group-hover:scale-105 transition-all duration-200">
                      {product.price}
                    </span>
                  </a>
                  <span
                    className={`text-sm px-3 py-1 rounded-full ${
                      ["In Stock", "В наличии"].includes(product.availability)
                        ? "bg-green-100 text-green-800"
                        : ["Limited Stock", "Ограничено"].includes(
                            product.availability
                          )
                        ? "bg-yellow-100 text-yellow-800"
                        : ["Pre-order", "Предзаказ"].includes(
                            product.availability
                          )
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
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
