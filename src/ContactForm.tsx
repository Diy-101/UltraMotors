import React from "react";
import type { Translations } from "./utils/translations";
import type { Language } from "./hooks/useLanguage";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

interface ContactProps {
  translations: Translations;
  language: Language;
}

const ContactForm: React.FC<ContactProps> = ({ translations, language }) => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              {translations[language].contactForm.title}
            </h2>
            <p className="text-gray-600">
              {translations[language].contactForm.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-2"
                      htmlFor="firstName"
                    >
                      {translations[language].contactForm.leftSide.firstName}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder={
                        translations[language].contactForm.leftSide
                          .placeholderFN
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-2"
                      htmlFor="lastName"
                    >
                      {translations[language].contactForm.leftSide.lastName}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder={
                        translations[language].contactForm.leftSide
                          .placeholderLN
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="email"
                  >
                    {translations[language].contactForm.leftSide.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={
                      translations[language].contactForm.leftSide
                        .placeholderEmail
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="phone"
                  >
                    {translations[language].contactForm.leftSide.phoneNumber}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder={
                      translations[language].contactForm.leftSide.placeholderPN
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="message"
                  >
                    {translations[language].contactForm.leftSide.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder={
                      translations[language].contactForm.leftSide
                        .placeholderMessage
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 !rounded-button"
                >
                  {translations[language].contactForm.leftSide.sendButton}
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {translations[language].contactForm.rightSide.titlelocation}
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-amber-500 mt-1 w-5 h-5" />
                    <div>
                      <p className="text-gray-600">
                        {
                          translations[language].contactForm.rightSide
                            .firstPartLocation
                        }
                      </p>
                      <p className="text-gray-600">
                        {
                          translations[language].contactForm.rightSide
                            .secondPartLoaction
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {translations[language].contactForm.rightSide.contactInfo}
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="text-amber-500 w-5 h-5" />
                    <p className="text-gray-600">
                      {translations[language].contactForm.rightSide.phone}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-amber-500 w-5 h-5" />
                    <p className="text-gray-600">
                      {translations[language].contactForm.rightSide.ourEmail}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="text-amber-500 w-5 h-5" />
                    <p className="text-gray-600">
                      {
                        translations[language].contactForm.rightSide
                          .workingHours
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {translations[language].contactForm.rightSide.connect}
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex justify-between px-6">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-900 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-900 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-900 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-900 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
