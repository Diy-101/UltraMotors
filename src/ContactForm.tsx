import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              We're here to help with any questions about our premium automotive
              components. Fill out the form below and we'll get back to you
              shortly.
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
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-2"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Enter your last name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 !rounded-button"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Our Location
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-map-marker-alt text-amber-500 mt-1"></i>
                    <div>
                      <p className="text-gray-600">123 Luxury Lane</p>
                      <p className="text-gray-600">Munich, Germany</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Contact Information
                </h3>
                <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-phone-alt text-amber-500"></i>
                    <p className="text-gray-600">+49 123 456 7890</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-envelope text-amber-500"></i>
                    <p className="text-gray-600">info@ultramotors.com</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-clock text-amber-500"></i>
                    <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Connect With Us
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
