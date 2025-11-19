import React, { useState, useRef, useEffect } from "react";
import type { Translations } from "./utils/translations";
import type { Language } from "./hooks/useLanguage";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  //Facebook,
  //Twitter,
  //Instagram,
  //Linkedin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactProps {
  translations: Translations;
  language: Language;
}

const ContactForm: React.FC<ContactProps> = ({ translations, language }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const closeModalButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (showModal && closeModalButtonRef.current) {
      closeModalButtonRef.current.focus();
    }
  }, [showModal]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // БЕЗ ОТПРАВКИ НА BACKEND
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreed) {
      setShowError(true);
      return;
    }

    setShowError(false);

    // Если нужно — просто логируем данные в консоль
    console.log("Форма отправлена (локально):", formData);

    // Сбрасываем форму
    setFormData({
      firstName: "",
      email: "",
      phone: "",
      message: "",
    });

    // Показываем модалку об успехе
    setShowModal(true);
  };

  const agreementHtml = translations[language].contactForm.agreementText
    .replace(
      "{policy}",
      `<a href="/privacy-policy" target="_blank" rel="noopener noreferrer" class="text-blue-900 underline">${translations[language].footer.quickLinks.policy}</a>`
    )
    .replace(
      "{terms}",
      `<a href="/terms" target="_blank" rel="noopener noreferrer" class="text-blue-900 underline">${translations[language].footer.quickLinks.terms}</a>`
    );

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                e.stopPropagation()
              }
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-success-title"
            >
              <h3
                id="contact-success-title"
                className="text-2xl font-bold text-blue-900 mb-4"
              >
                Спасибо!
              </h3>
              <p className="text-gray-700 mb-6">
                Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее
                время.
              </p>
              <button
                ref={closeModalButtonRef}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300"
                onClick={() => setShowModal(false)}
              >
                Закрыть
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Заголовок */}
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
              <form className="space-y-6" onSubmit={handleSubmit}>
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
                      translations[language].contactForm.leftSide.placeholderFN
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy-agree"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mr-2"
                    required
                  />
                  <label
                    htmlFor="privacy-agree"
                    className="text-sm text-gray-700"
                  >
                    <span dangerouslySetInnerHTML={{ __html: agreementHtml }} />
                  </label>
                </div>
                {showError && (
                  <div className="text-red-600 text-sm mb-2">
                    {translations[language].contactForm.agreementError}
                  </div>
                )}
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
                            .secondPartLocation
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
                      {translations[language].contactForm.rightSide.phone_1}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-amber-500 w-5 h-5" />
                    <p className="text-gray-600">
                      {translations[language].contactForm.rightSide.phone_2}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
