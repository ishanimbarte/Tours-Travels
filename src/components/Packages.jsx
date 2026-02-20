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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
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
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-52 sm:h-56 md:h-60 w-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-orange-500 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold shadow">
                  {pkg.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
                  Duration: {pkg.duration}
                </p>

                <Link to={`/our-packages/${pkg.id}`}>
                  <button className="mt-4 md:mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-medium transition text-sm md:text-base">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}