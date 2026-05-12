import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import img1 from "../assets/package/manali.jpg";
import img2 from "../assets/package/Goa.jpg";
import img3 from "../assets/package/dubai.jpg";
import img4 from "../assets/package/kerala.jpg";
import img5 from "../assets/package/singapore.jpg";
import img6 from "../assets/package/rajasthan.jpg";

const familyTours = [
  {
    id: 1,
    title: "Manali Family Vacation",
    location: "Manali, Himachal Pradesh",
    duration: "5 Nights / 6 Days",
    price: "₹18,999",
    image:
      img1,
  },
  {
    id: 2,
    title: "Goa Family Fun Trip",
    location: "Goa, India",
    duration: "4 Nights / 5 Days",
    price: "₹14,999",
    image:
      img2,
  },
  {
    id: 3,
    title: "Dubai Family Holiday",
    location: "Dubai, UAE",
    duration: "5 Nights / 6 Days",
    price: "₹49,999",
    image:
      img3,
  },
  {
    id: 4,
    title: "Kerala Backwaters Family Tour",
    location: "Kerala, India",
    duration: "6 Nights / 7 Days",
    price: "₹22,999",
    image:
      img4,
  },
  {
    id: 5,
    title: "Singapore Family Adventure",
    location: "Singapore",
    duration: "5 Nights / 6 Days",
    price: "₹55,999",
    image:
      img5,
  },
  {
    id: 6,
    title: "Rajasthan Heritage Family Tour",
    location: "Jaipur, Jodhpur, Udaipur",
    duration: "6 Nights / 7 Days",
    price: "₹19,999",
    image:
      img6,
  },
];

export default function FamilyTours() {
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-orange-50 min-h-screen pt-28 pb-20 relative overflow-hidden">

  {/* Background Glow Effects */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl"></div>

  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10"
  >
    <span className="inline-block px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold tracking-wide shadow-sm">
      FAMILY HOLIDAYS
    </span>

    <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
      Family Tour Packages 👨‍👩‍👧‍👦
    </h1>

    <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg leading-relaxed">
      Create unforgettable memories with your loved ones through our
      carefully designed family-friendly holiday packages filled with
      fun, comfort, and beautiful experiences.
    </p>
  </motion.div>

  {/* Packages Grid */}
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">

    {familyTours.map((pkg, index) => (
      <motion.div
        key={pkg.id}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        viewport={{ once: true }}
        className="group relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
      >

        {/* Image */}
        <div className="relative overflow-hidden">

          <img
            src={pkg.image}
            alt={pkg.title}
            className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

          {/* Price */}
          <div className="absolute top-5 left-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
            {pkg.price}
          </div>

          {/* Floating Tag */}
          <div className="absolute bottom-5 left-5">
            <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-1 rounded-full text-xs tracking-wide uppercase">
              Family Friendly
            </span>
          </div>

        </div>

        {/* Content */}
        <div className="p-6">

          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-500 transition">
              {pkg.title}
            </h3>

            <div className="w-11 h-11 rounded-full bg-yellow-100 flex items-center justify-center text-xl shadow-sm group-hover:bg-orange-500 group-hover:text-white transition">
              ✈️
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 text-gray-500">
            <MapPin size={17} className="text-orange-500" />
            <p className="text-sm">{pkg.location}</p>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Duration:
              <span className="font-semibold text-gray-700 ml-1">
                {pkg.duration}
              </span>
            </p>

            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              ⭐⭐⭐⭐⭐
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mt-5">
            <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
              Family Stay
            </span>

            <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">
              Meals Included
            </span>

            <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
              Guided Tour
            </span>
          </div>

          {/* Button */}
          <Link to={`/family-tours/${pkg.id}`}>
            <button className="mt-7 w-full py-3.5 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 text-white font-semibold shadow-lg hover:shadow-orange-300/50 hover:scale-[1.02] transition-all duration-300">
              Explore Package
            </button>
          </Link>

        </div>

      </motion.div>
    ))}

  </div>
</div>
  );
}
