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
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800">
            Top Destinations
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Explore our most popular destinations that travelers love the most.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to={`/destination/${dest.id}`}
                className="block relative overflow-hidden rounded-[28px] aspect-[4/5] img-hover"
              >

                {/* Image */}
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-7 left-7 right-7 text-white">

                  {/* Category */}
                  <p className="text-[11px] uppercase tracking-[0.25em] mb-3 text-white/80">
                    Destination · {dest.location}
                  </p>

                  {/* Title */}
                  <h3 className="font-serif text-3xl sm:text-4xl font-light leading-tight">
                    {dest.name}
                  </h3>

                  {/* Small Tagline */}
                  <p className="mt-2 text-sm italic text-white/70">
                    Discover unforgettable journeys
                  </p>

                  {/* Minimal Link */}
                  <div className="mt-5 flex items-center gap-2 text-sm tracking-wide uppercase">
                    <span className="w-10 h-[1px] bg-white/70 group-hover:w-16 transition-all duration-500"></span>

                    <span className="text-white/90">
                      View Packages
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}