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
    <section className="relative py-20 md:py-32 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={bg}
      alt="Travel"
      className="w-full h-full object-cover scale-105"
    />

    {/* Luxury Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60"></div>

    {/* Blur Glow */}
    <div className="absolute top-0 left-0 w-full h-full bg-blue-900/20 backdrop-blur-[2px]"></div>
  </div>

  {/* Decorative Blur Circles */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

  {/* Content */}
  <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

    {/* Small Heading */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="uppercase tracking-[0.35em] text-white/70 text-xs sm:text-sm mb-5"
    >
      Luxury Travel Experiences
    </motion.p>

    {/* Main Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="font-serif text-4xl sm:text-5xl md:text-7xl font-light leading-tight"
    >
      Ready for Your <br />
      Next Adventure?
    </motion.h2>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
    >
      Let us craft unforgettable journeys with handpicked destinations,
      personalized itineraries, and premium travel experiences designed
      just for you.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-10 flex flex-col sm:flex-row justify-center gap-5"
    >

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="group relative overflow-hidden px-8 py-4 rounded-full bg-green-500 text-white font-medium tracking-wide shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-green-600"
      >
        <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-500"></span>

        <span className="relative flex items-center justify-center gap-3">
          <MessageCircle size={20} />
          WhatsApp
        </span>
      </button>

      {/* Quote Button */}
      <button className="group relative overflow-hidden px-8 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-medium tracking-wide transition-all duration-500 hover:bg-white hover:text-black hover:scale-105">
        
        <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-500"></span>

        <span className="relative flex items-center justify-center gap-3">
          <Phone size={20} />
          Get Quote
        </span>
      </button>
    </motion.div>

    {/* Bottom Line */}
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="w-32 h-[1px] bg-white/40 mx-auto mt-14"
    ></motion.div>

  </div>
</section>
  );
}