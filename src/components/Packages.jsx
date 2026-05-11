import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import img1 from "../assets/package/kashmir.jpg";
import img2 from "../assets/package/Goa.jpg";
import img3 from "../assets/package/bali.jpg";
import img4 from "../assets/package/dubai.jpg";
import img5 from "../assets/package/maldive.jpg";
import img6 from "../assets/package/manali.jpg";

const allPackages = [
  {
    id: 1,
    title: "Kashmir Paradise Tour",
    category: "Domestic",
    duration: "5 Nights / 6 Days",
    price: "₹14,999",
    image: img1,
  },
  {
    id: 2,
    title: "Goa Beach Holiday",
    category: "Domestic",
    duration: "3 Nights / 4 Days",
    price: "₹7,999",
    image: img2,
  },
  {
    id: 3,
    title: "Bali Adventure Tour",
    category: "International",
    duration: "5 Nights / 6 Days",
    price: "₹29,999",
    image: img3,
  },
  {
    id: 4,
    title: "Dubai Luxury Tour",
    category: "International",
    duration: "5 Nights / 6 Days",
    price: "₹39,999",
    image: img4,
  },
  {
    id: 5,
    title: "Honeymoon in Maldives",
    category: "Honeymoon",
    duration: "4 Nights / 5 Days",
    price: "₹49,999",
    image: img5,
  },
  {
    id: 6,
    title: "Family Trip to Manali",
    category: "Family",
    duration: "4 Nights / 5 Days",
    price: "₹12,999",
    image: img6,
  },
];

const categories = ["All", "Domestic", "International", "Honeymoon", "Family"];

export default function Packages() {
  const [filter, setFilter] = useState("All");

  const filteredPackages =
    filter === "All"
      ? allPackages
      : allPackages.filter((pkg) => pkg.category === filter);

  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-800">
            Our Packages
          </h2>
          <p className="mt-3 md:mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Explore our wide range of travel packages carefully designed for your perfect journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 md:gap-4 mb-8 md:mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 md:px-5 py-2 rounded-full font-semibold text-sm md:text-base transition ${
                filter === cat
                  ? "bg-black text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
  {filteredPackages.map((pkg, index) => (
    <motion.div
      key={pkg.id}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-[30px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="h-64 md:h-72 w-full object-cover group-hover:scale-105 transition duration-700"
          />

          {/* Elegant Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

          {/* Price Badge */}
          <div className="absolute top-5 left-5 bg-white/15 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs tracking-[0.15em] uppercase shadow-lg">
            {pkg.price}
          </div>

          {/* Bottom Content Over Image */}
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-white/80 text-[11px] uppercase tracking-[0.25em] mb-2">
              Premium Tour Package
            </p>

            <h3 className="font-serif text-3xl font-light text-white leading-tight">
              {pkg.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">

          {/* Duration */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-1">
                Duration
              </p>

              <p className="text-gray-700 font-medium">
                {pkg.duration}
              </p>
            </div>

            {/* Minimal Circle */}
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 text-lg">
              ✈
            </div>
          </div>

          {/* Button */}
          <Link to={`/our-packages/${pkg.id}`}>
            <button className="mt-6 w-full rounded-full border border-black bg-black text-white py-3 text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white hover:text-black">
              View Details
            </button>
          </Link>
        </div>

        {/* Animated Bottom Border */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-black group-hover:w-full transition-all duration-700"></div>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}