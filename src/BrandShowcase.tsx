import React from "react";

interface BrandShowcaseProps {
  brands: string[];
}

const BrandShowcase: React.FC<BrandShowcaseProps> = ({ brands }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with Europe's most prestigious automotive manufacturers to
            bring you authentic, high-performance components.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center py-8 px-6 bg-gray-100 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all duration-300">
                <i
                  className={`fas fa-car text-3xl text-gray-400`}
                ></i>
                <span className="text-xl font-bold text-gray-500 transition-colors duration-300">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
