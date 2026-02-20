import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "../assets/package/Goa.jpg";
import img2 from "../assets/package/kashmir.jpg";
import img3 from "../assets/package/bali.jpg";
import img4 from "../assets/package/dubai.jpg";
import img5 from "../assets/package/paris.jpg";
import img6 from "../assets/package/manali.jpg";

const destinations = [
  { id: 1, name: "Goa", location: "India", image: img1 },
  { id: 2, name: "Kashmir", location: "India", image: img2 },
  { id: 3, name: "Bali", location: "Indonesia", image: img3 },
  { id: 4, name: "Dubai", location: "UAE", image: img4 },
  { id: 5, name: "Paris", location: "France", image: img5 },
  { id: 6, name: "Manali", location: "India", image: img6 },
];

export default function TopDestinations() {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Top Destinations
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Explore our most popular destinations that travelers love the most.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer"
            >
              {/* Image */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-60 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition flex flex-col justify-end p-4 sm:p-5 md:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {dest.name}
                </h3>

                <div className="flex items-center gap-2 mt-1.5 sm:mt-2 text-white/90 text-xs sm:text-sm">
                  <MapPin size={16} /> {dest.location}
                </div>

                <Link to={`/destination/${dest.id}`}>
                  <button className="mt-3 sm:mt-4 px-4 sm:px-5 py-2 bg-orange-500 rounded-full text-white text-sm sm:text-base hover:bg-orange-600">
                    View Packages
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