import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] md:h-screen flex items-center justify-center">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
    }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Gradient Overlay for Navbar Match */}
  <div className="absolute inset-0"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl">

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug md:leading-tight"
    >
      Discover Your Next <br />
      <span className="text-yellow-300">Dream Destination</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="mt-4 md:mt-6 text-base sm:text-lg text-white/90"
    >
      Explore breathtaking locations, luxury stays, and unforgettable
      travel experiences with our expert-designed tour packages.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
    >
      <button className="px-6 sm:px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-full font-semibold shadow-lg transition">
        <Link to="/packages" className="text-white">
          Explore Packages
        </Link>
      </button>

      <button className="px-6 sm:px-8 py-3 bg-white/20 backdrop-blur-md border border-white/40 rounded-full hover:bg-white/30 transition">
        <Link to="/contact" className="text-white">
          Contact Us
        </Link>
      </button>
    </motion.div>

  </div>

</section>
  );
}
