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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Popular Tour Packages
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Discover our most loved travel experiences designed for unforgettable
            memories and adventures around the world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
          {packages.map((pkg, index) => (
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

                {/* Price Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-orange-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold shadow">
                  {pkg.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">

                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {pkg.title}
                </h3>

                <div className="flex items-center text-gray-500 mt-1.5 sm:mt-2 text-xs sm:text-sm">
                  <MapPin size={16} className="mr-1" />
                  {pkg.location}
                </div>

                <p className="mt-1.5 sm:mt-2 text-gray-600 text-xs sm:text-sm">
                  Duration: {pkg.duration}
                </p>

                {/* Rating */}
                <div className="flex items-center mt-2.5 sm:mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Button */}
                <Link to={`/package/${pkg.id}`}>
                  <button className="mt-4 sm:mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm sm:text-base">
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