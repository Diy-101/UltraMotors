import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-6">
              <span className="text-white">Ultra</span>
              <span className="text-amber-500">Motors</span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium European vehicle components for discerning automotive
              enthusiasts. Quality, authenticity, and excellence in every part.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "Product Catalog",
                "Special Offers",
                "Shipping & Returns",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-amber-500"></i>
                <span className="text-gray-400">123 Luxury Lane, Munich, Germany</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-amber-500"></i>
                <span className="text-gray-400">+49 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-amber-500"></i>
                <span className="text-gray-400">info@ultramotors.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3 text-amber-500"></i>
                <span className="text-gray-400">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 UltraMotors. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 text-sm">Payment Methods:</span>
            <i className="fab fa-cc-visa text-gray-400" aria-label="Visa"></i>
            <i className="fab fa-cc-mastercard text-gray-400" aria-label="Mastercard"></i>
            <i className="fab fa-cc-amex text-gray-400" aria-label="American Express"></i>
            <i className="fab fa-cc-paypal text-gray-400" aria-label="PayPal"></i>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300 !rounded-button cursor-pointer"
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;