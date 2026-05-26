import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Globe2, MapPinned, Sparkles } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Explore The World",
    subtitle: "Luxury journeys crafted for unforgettable memories",
  },

  {
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Travel Beyond Limits",
    subtitle: "Discover mountains, beaches & hidden gems",
  },

  {
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    title: "Your Dream Vacation",
    subtitle: "Premium tours with seamless experiences",
  },
];

export default function IntroLoader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-black">

      {/* Background Slides */}
      <AnimatePresence mode="wait">

        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.3 }}
          className="absolute inset-0"
        >

          <img
            src={slides[index].image}
            alt="travel"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

        </motion.div>

      </AnimatePresence>

      {/* Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-orange-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-pink-500/20 blur-3xl rounded-full"></div>

      {/* Flying Plane */}
      <motion.div
        animate={{
          x: ["-20%", "120%"],
          y: [0, -40, 0],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-28 left-0 text-white/80"
      >
        <Plane size={80} strokeWidth={1.5} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-3 mb-6"
        >

          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-orange-400 shadow-2xl">
            <Globe2 size={30} />
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-wide text-white">
            Alshifa Travel
          </h1>

        </motion.div>

        {/* Title */}
        <motion.div
          key={slides[index].title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight max-w-5xl">
            {slides[index].title}
          </h2>

          <p className="mt-6 text-lg md:text-2xl text-white/75 max-w-2xl mx-auto leading-relaxed">
            {slides[index].subtitle}
          </p>

        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center gap-6 mt-14 flex-wrap justify-center"
        >

          <div className="flex items-center gap-2 text-white/80">
            <MapPinned size={20} className="text-orange-400" />
            <span>Worldwide Tours</span>
          </div>

          <div className="w-2 h-2 rounded-full bg-white/30"></div>

          <div className="flex items-center gap-2 text-white/80">
            <Sparkles size={20} className="text-pink-400" />
            <span>Luxury Experiences</span>
          </div>

        </motion.div>

        {/* Progress Bar */}
        <div className="w-[260px] h-[5px] bg-white/20 rounded-full overflow-hidden mt-16 backdrop-blur-md">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 8, ease: "linear" }}
            className="h-full bg-gradient-to-r from-orange-400 via-pink-500 to-rose-500 rounded-full"
          />

        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-5 text-white/60 tracking-[4px] uppercase text-sm"
        >
          Preparing Your Journey...
        </motion.p>

      </div>

    </div>
  );
}