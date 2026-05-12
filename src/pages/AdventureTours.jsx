import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../assets/package/manali.jpg";
import img2 from "../assets/package/rishikesh.jpg";
import img3 from "../assets/package/Leh-Ladakh.jpg";

const tours = [
  {
    id: 1,
    title: "Manali Adventure Trip",
    location: "Manali, Solang Valley",
    duration: "5 Nights / 6 Days",
    price: "₹19,999",
    image:
      img1,
  },

  {
    id: 2,
    title: "Rishikesh River Rafting",
    location: "Rishikesh, Uttarakhand",
    duration: "3 Nights / 4 Days",
    price: "₹12,999",
    image:
      img2,
  },

  {
    id: 3,
    title: "Leh Ladakh Bike Tour",
    location: "Leh, Nubra Valley, Pangong",
    duration: "7 Nights / 8 Days",
    price: "₹29,999",
    image:
      img3,
  },
];

export default function AdventureTours() {
  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-cyan-50 min-h-screen pt-28 pb-20 overflow-hidden relative">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300/30 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <span className="bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm">
        Explore Nature & Thrill
      </span>

      <h1 className="text-5xl md:text-6xl font-black text-gray-900 mt-6 leading-tight">
        Adventure Tours
        <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
          For Wild Souls ⛰️
        </span>
      </h1>

      <p className="text-gray-600 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
        Trek through mountains, explore forests, experience thrilling
        adventures, and create unforgettable memories with our premium
        adventure travel experiences.
      </p>
    </motion.div>

    {/* Tours Grid */}
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

      {tours.map((tour, index) => (
        <motion.div
          key={tour.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative"
        >

          {/* Card */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3">

            {/* Image */}
            <div className="relative overflow-hidden">

              <img
                src={tour.image}
                alt={tour.title}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              {/* Price */}
              <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-lg border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {tour.price}
              </div>

              {/* Adventure Badge */}
              <div className="absolute top-5 right-5 bg-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold tracking-wide shadow-lg">
                ADVENTURE
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-sm opacity-90">
                  📍 {tour.location}
                </p>
              </div>

            </div>

            {/* Content */}
            <div className="p-6">

              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition">
                {tour.title}
              </h3>

              <div className="flex items-center justify-between mt-4">

                <div>
                  <p className="text-gray-500 text-sm">
                    Duration
                  </p>

                  <p className="font-semibold text-gray-700">
                    {tour.duration}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-yellow-500 font-semibold">
                  ⭐ 4.9
                </div>

              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mt-5">

                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                  Trekking
                </span>

                <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-medium">
                  Camping
                </span>

                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                  Adventure
                </span>

              </div>

              {/* Button */}
              <Link to={`/adventure-tours/${tour.id}`}>
                <button className="mt-7 w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-emerald-300/50 transition duration-300">
                  Explore Adventure →
                </button>
              </Link>

            </div>
          </div>

        </motion.div>
      ))}

    </div>
  </div>
</div>
  );
}
