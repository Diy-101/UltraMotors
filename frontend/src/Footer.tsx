import React from "react";
import type { Translations } from "./utils/translations";
import type { Language } from "./hooks/useLanguage";
import { MapPin, Phone, Mail, Clock, ArrowUp } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  scrollToSectionOrNavigate,
  scrollToTopOrNavigate,
} from "./utils/navigation";

interface FooterProps {
  language: Language;
  translations: Translations;
}

const Footer: React.FC<FooterProps> = ({ language, translations }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to handle hash navigation from any route
  const handleNav = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSectionOrNavigate(hash, location, navigate);
  };

  // Helper for scroll-to-top that works from any route
  const handleScrollToTop = () => {
    scrollToTopOrNavigate(location, navigate);
  };

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
              {translations[language].footer.subtitle}
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
            <h3 className="text-lg font-bold mb-6">
              {translations[language].footer.quickLinks.title}
            </h3>
            <ul className="space-y-3">
              {[
                {
                  translation: translations[language].footer.quickLinks.catalog,
                  href: "#categories",
                  isPrivacy: false,
                  isTerms: false,
                },
                {
                  translation: translations[language].footer.quickLinks.about,
                  href: "#about",
                  isPrivacy: false,
                  isTerms: false,
                },
                {
                  translation: translations[language].footer.quickLinks.offers,
                  href: "#arrivals",
                  isPrivacy: false,
                  isTerms: false,
                },
                {
                  translation: translations[language].footer.quickLinks.policy,
                  href: "/privacy-policy",
                  isPrivacy: true,
                  isTerms: false,
                },
                {
                  translation: translations[language].footer.quickLinks.terms,
                  href: "/terms",
                  isPrivacy: false,
                  isTerms: true,
                },
              ].map((link) => (
                <li key={link.translation}>
                  {link.isPrivacy || link.isTerms ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.translation}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      onClick={handleNav(link.href)}
                    >
                      {link.translation}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">
              {translations[language].footer.contactUs.title}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-amber-500" />
                <div className="flex flex-col">
                  <span className="text-gray-400">
                    {translations[language].footer.contactUs.firstPartAddress}
                  </span>
                  <span className="text-gray-400">
                    {translations[language].footer.contactUs.secondPartAddress}
                  </span>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-amber-500" />
                <span className="text-gray-400">
                  {translations[language].footer.contactUs.number}
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-amber-500" />
                <span className="text-gray-400">
                  {translations[language].footer.contactUs.email}
                </span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-amber-500" />
                <span className="text-gray-400">
                  {translations[language].footer.contactUs.workingHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            {translations[language].footer.rules}
          </p>
        </div>
      </div>
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300 !rounded-button cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-current" />
      </button>
    </footer>
  );
};

export default Footer;
