import React from "react";

const KeyBenefits: React.FC = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-block p-4 bg-amber-500 rounded-full mb-4">
              <i className="fas fa-medal text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
            <p className="text-blue-100">
              Every component meets or exceeds OEM specifications, ensuring
              exceptional performance and durability.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-block p-4 bg-amber-500 rounded-full mb-4">
              <i className="fas fa-certificate text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Authenticity Guaranteed</h3>
            <p className="text-blue-100">
              All our products come with verification certificates and full
              manufacturer warranties.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-block p-4 bg-amber-500 rounded-full mb-4">
              <i className="fas fa-shipping-fast text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Express Shipping</h3>
            <p className="text-blue-100">
              Fast and secure worldwide delivery with real-time tracking and
              insurance included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
