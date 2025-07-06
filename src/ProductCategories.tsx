import React from "react";

interface ProductCategory {
  title: string;
  image: string;
  description: string;
}

interface ProductCategoriesProps {
  title: string;
  subtitle: string;
  button: string;
  productCategories: ProductCategory[];
}

const ProductCategories: React.FC<ProductCategoriesProps> = ({
  title,
  subtitle,
  button,
  productCategories,
}) => {
  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a
                  href="#contact"
                  className="text-amber-500 font-medium hover:text-amber-600 inline-flex items-center cursor-pointer"
                >
                  {button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
