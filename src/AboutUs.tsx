import React from "react";

const AboutUs: React.FC = () => {
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
              About UltraMotors
            </h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, UltraMotors has established itself as a leading
              provider of premium European automotive components. Our
              commitment to excellence and authenticity has made us the trusted
              choice for automotive enthusiasts and professional mechanics
              across the globe.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="flex items-center mb-3">
                  <i className="fas fa-check-circle text-amber-500 mr-2"></i>
                  <span className="font-medium text-blue-900">
                    15+ Years Experience
                  </span>
                </div>
                <div className="flex items-center mb-3">
                  <i className="fas fa-check-circle text-amber-500 mr-2"></i>
                  <span className="font-medium text-blue-900">Certified Experts</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <i className="fas fa-check-circle text-amber-500 mr-2"></i>
                  <span className="font-medium text-blue-900">Global Shipping</span>
                </div>
                <div className="flex items-center mb-3">
                  <i className="fas fa-check-circle text-amber-500 mr-2"></i>
                  <span className="font-medium text-blue-900">Quality Guarantee</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer">
                Learn More
              </button>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
