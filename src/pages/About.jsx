import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Award, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

import bg from "../assets/kashmir-bg.jpg";

export default function AboutPage() {
  const stats = [
    { icon: <Users size={28} />, value: "10,000+", label: "Happy Travelers" },
    { icon: <Globe size={28} />, value: "50+", label: "Destinations" },
    { icon: <Award size={28} />, value: "8+", label: "Years Experience" },
    { icon: <HeartHandshake size={28} />, value: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src={bg}
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Travel Company
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Creating unforgettable journeys and lifetime memories with expertly
            crafted travel experiences across India and the world.
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="relative overflow-hidden bg-[#f8f6f2] py-24 md:py-32">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* Image Section */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative group"
    >

      {/* Decorative Border */}
      <div className="absolute -top-5 -left-5 w-full h-full border border-orange-200 rounded-[36px]"></div>

      {/* Image */}
      <div className="relative overflow-hidden rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
        <img
          src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
          alt="About Travel"
          className="w-full h-[650px] object-cover group-hover:scale-105 transition duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Floating Card */}
        <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-white shadow-xl">

          <p className="uppercase tracking-[0.25em] text-xs text-white/70 mb-2">
            Trusted Travel Agency
          </p>

          <h3 className="font-serif text-3xl font-light">
            10+ Years
          </h3>

          <p className="text-sm text-white/80 mt-1">
            Creating unforgettable journeys worldwide.
          </p>
        </div>
      </div>
    </motion.div>

    {/* Content Section */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      {/* Small Heading */}
      <p className="uppercase tracking-[0.35em] text-gray-500 text-sm mb-5">
        About Our Company
      </p>

      {/* Main Heading */}
      <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-tight">
        Crafting Journeys <br />
        Beyond Expectations
      </h2>

      {/* Description */}
      <p className="mt-8 text-gray-600 text-base md:text-lg leading-relaxed">
        We are a passionate travel company dedicated to creating unforgettable
        experiences for travelers around the world. From luxury escapes and
        romantic honeymoons to adventurous expeditions and family vacations,
        every journey is thoughtfully designed with care and precision.
      </p>

      <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
        Our focus is on comfort, personalization, and premium service to ensure
        every trip becomes a cherished memory. Whether exploring beaches,
        mountains, or cultural destinations, we make every journey seamless,
        elegant, and truly extraordinary.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mt-10">

        <div>
          <h3 className="font-serif text-4xl font-light text-gray-900">
            10K+
          </h3>

          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mt-2">
            Happy Travelers
          </p>
        </div>

        <div>
          <h3 className="font-serif text-4xl font-light text-gray-900">
            120+
          </h3>

          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mt-2">
            Destinations
          </p>
        </div>

        <div>
          <h3 className="font-serif text-4xl font-light text-gray-900">
            4.9★
          </h3>

          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mt-2">
            Client Rating
          </p>
        </div>

      </div>

      {/* Button */}
      <Link to="/contact">
        <button className="mt-12 group relative overflow-hidden px-8 py-4 rounded-full bg-black text-white tracking-[0.15em] uppercase text-sm transition-all duration-500 hover:bg-orange-500 hover:scale-105 shadow-2xl">

          <span className="relative flex items-center gap-3">
            Discover More
          </span>
        </button>
      </Link>

    </motion.div>
  </div>
</section>


      {/* Why Choose Us */}
      <section className="relative overflow-hidden bg-[#f8f6f2] py-24 md:py-32">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="uppercase tracking-[0.35em] text-gray-500 text-sm mb-4">
        Why Travelers Choose Us
      </p>

      <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-tight">
        Crafted for Luxury <br />
        Travel Experiences
      </h2>

      <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
        We combine premium destinations, personalized planning, and
        exceptional service to create unforgettable journeys tailored
        to every traveler.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {[
        {
          title: "Expert Planning",
          desc: "Professionally designed itineraries to maximize your travel experience.",
          number: "01",
        },
        {
          title: "Affordable Pricing",
          desc: "Best price guarantee with premium services and no hidden costs.",
          number: "02",
        },
        {
          title: "Trusted Support",
          desc: "Dedicated assistance before, during, and after your journey.",
          number: "03",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.15 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-[32px] bg-white/70 backdrop-blur-xl border border-white/40 p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
        >

          {/* Number */}
          <div className="absolute top-6 right-6 text-6xl font-serif text-black/5 group-hover:text-orange-100 transition duration-500">
            {item.number}
          </div>

          {/* Small Line */}
          <div className="w-14 h-[2px] bg-orange-400 mb-8 group-hover:w-20 transition-all duration-500"></div>

          {/* Title */}
          <h3 className="font-serif text-3xl font-light text-gray-900 mb-5">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-base">
            {item.desc}
          </p>

          {/* Bottom Hover Line */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-black group-hover:w-full transition-all duration-700"></div>

        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
      alt="Travel"
      className="w-full h-full object-cover"
    />

    {/* Dark Luxury Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/70"></div>
  </div>

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative max-w-5xl mx-auto px-6 text-center text-white"
  >

    {/* Small Heading */}
    <p className="uppercase tracking-[0.35em] text-white/70 text-xs sm:text-sm mb-5">
      Begin Your Luxury Escape
    </p>

    {/* Main Heading */}
    <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light leading-tight">
      Ready to Start <br />
      Your Journey?
    </h2>

    {/* Description */}
    <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
      Let us create unforgettable travel experiences with personalized
      itineraries, premium destinations, and seamless planning tailored
      just for you.
    </p>

    {/* Buttons */}
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

      {/* Contact Button */}
      <Link to="/contact">
        <button className="group relative overflow-hidden px-8 py-4 rounded-full bg-white text-black font-medium tracking-[0.15em] uppercase transition-all duration-500 hover:scale-105 hover:bg-orange-500 hover:text-white shadow-2xl">

          <span className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-500"></span>

          <span className="relative">
            Contact Us
          </span>
        </button>
      </Link>

      {/* Explore Button */}
      <Link to="/packages">
        <button className="group relative overflow-hidden px-8 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white tracking-[0.15em] uppercase transition-all duration-500 hover:bg-white hover:text-black hover:scale-105">

          <span className="relative">
            Explore Tours
          </span>
        </button>
      </Link>
    </div>

    {/* Decorative Line */}
    <div className="w-32 h-[1px] bg-white/30 mx-auto mt-14"></div>

  </motion.div>
</section>
    </div>
  );
}
