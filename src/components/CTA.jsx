import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import bg from "../assets/tour-bg.jpg";

export default function CTA() {
  const phoneNumber = "919999999999"; // change to your number

  const openWhatsApp = () => {
    const message = "Hello, I want to plan my next trip. Please share details.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative py-16 md:py-24">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Travel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          Ready for Your Next Adventure?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 md:mt-4 text-base sm:text-lg text-white/90 max-w-2xl mx-auto"
        >
          Let us plan your dream vacation with the best prices, personalized
          itineraries, and unforgettable experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5"
        >
          {/* WhatsApp */}
          <button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 px-6 sm:px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg transition w-full sm:w-auto"
          >
            <MessageCircle size={20} />
            WhatsApp
          </button>

          {/* Get Quote */}
          <button className="bg-white text-blue-700 hover:bg-gray-100 px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg transition flex items-center justify-center gap-2 w-full sm:w-auto">
            <Phone size={20} />
            Get Quote
          </button>
        </motion.div>

      </div>
    </section>
  );
}