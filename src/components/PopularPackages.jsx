import React from "react";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "../assets/package/kashmir.jpg";
import img2 from "../assets/package/manali.jpg";
import img3 from "../assets/package/Goa.jpg";
import img4 from "../assets/package/dubai.jpg";

const packages = [
  {
    id: 1,
    title: "Kashmir Paradise Tour",
    location: "Srinagar, Gulmarg, Pahalgam",
    duration: "5 Nights / 6 Days",
    price: "₹14,999",
    image: img1,
  },
  {
    id: 2,
    title: "Manali Adventure Trip",
    location: "Manali, Solang Valley",
    duration: "4 Nights / 5 Days",
    price: "₹9,999",
    image: img2,
  },
  {
    id: 3,
    title: "Goa Beach Holiday",
    location: "North Goa, South Goa",
    duration: "3 Nights / 4 Days",
    price: "₹7,999",
    image: img3,
  },
  {
    id: 4,
    title: "Dubai Luxury Tour",
    location: "Dubai, Abu Dhabi",
    duration: "5 Nights / 6 Days",
    price: "₹39,999",
    image: img4,
  },
];

export default function PopularPackages() {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl font-serif sm:text-3xl md:text-4xl lg:text-5xl text-gray-800">
            Popular Tour Packages
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-4xl mx-auto">
            Discover our most loved travel experiences designed for unforgettable
            memories and adventures around the world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {packages.map((pkg, index) => (
    <motion.div
      key={pkg.id}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
      className="group relative rounded-[32px] overflow-hidden bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)] transition-all duration-500 border border-white/20"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-orange-400/10 opacity-0 group-hover:opacity-100 transition duration-700"></div>

      {/* Shine Effect */}
      <div className="absolute -top-40 -left-40 w-72 h-72 bg-white/30 rotate-12 group-hover:left-[120%] transition-all duration-1000 blur-2xl"></div>

      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

        {/* Floating Price Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl backdrop-blur-md border border-white/20">
          {pkg.price}
        </div>

        {/* Top Right Floating Icon */}
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-red-500 transition">
          ❤
        </button>

        {/* Bottom Text Overlay */}
        <div className="absolute bottom-5 left-5">
          <h3 className="text-2xl font-bold text-white drop-shadow-lg">
            {pkg.title}
          </h3>

          <div className="flex items-center text-white/90 mt-1 text-sm">
            <MapPin size={15} className="mr-1" />
            {pkg.location}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">

        {/* Duration Card */}
        <div className="flex items-center justify-between bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">
              Duration
            </p>
            <p className="font-semibold text-gray-700">
              {pkg.duration}
            </p>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
            ✈
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={17}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>

          <span className="text-sm font-semibold text-gray-500">
            5.0 Reviews
          </span>
        </div>

        {/* Button */}
        <Link to={`/package/${pkg.id}`}>
          <button className="relative overflow-hidden mt-6 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-3.5 rounded-2xl font-semibold tracking-wide shadow-lg hover:shadow-blue-300 transition-all duration-500">
            
            {/* Button Glow */}
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></span>

            <span className="relative z-10">
              View Details →
            </span>
          </button>
        </Link>
      </div>

      {/* Bottom Border Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-400 opacity-0 group-hover:opacity-100 transition duration-500"></div>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}