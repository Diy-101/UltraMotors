import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section
      className="relative py-24 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20car%20workshop%20with%20premium%20vehicles%20being%20serviced%2C%20professional%20automotive%20environment%20with%20high-end%20tools%20and%20equipment%2C%20dramatic%20lighting%20with%20blue%20tint%2C%20clean%20modern%20space%20with%20European%20luxury%20cars%2C%20high%20resolution%20photography&width=1440&height=500&seq=12&orientation=landscape')`,
      }}
    >
      <div className="absolute inset-0 bg-blue-900/80"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            European Quality Standards
          </h2>
          <p className="text-xl mb-8">
            Experience the difference that European engineering excellence
            makes. Our components are sourced directly from the same
            manufacturers that supply Europe's most prestigious automotive
            brands.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer">
              Request Quote
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
