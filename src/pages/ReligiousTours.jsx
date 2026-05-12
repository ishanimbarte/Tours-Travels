import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../assets/package/ajmer.jpg";
import img2 from "../assets/package/tirupati.jpg";
import img3 from "../assets/package/varanasi.jpg";


const tours = [
  {
    id: 1,
    title: "Ajmer",
    location: "Yamunotri, Gangotri, Kedarnath, Badrinath",
    duration: "10 Nights / 11 Days",
    price: "₹29,999",
    image:
      img1,
  },

  {
    id: 2,
    title: "Tirupati Balaji",
    location: "Katra, Jammu",
    duration: "3 Nights / 4 Days",
    price: "₹12,999",
    image:
      img2,
  },

  {
    id: 3,
    title: "Varanasi Spiritual Tour",
    location: "Shirdi, Trimbakeshwar, Nashik",
    duration: "2 Nights / 3 Days",
    price: "₹8,999",
    image:
      img3,
  },
];

export default function ReligiousTours() {
  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-amber-50 min-h-screen pt-28 pb-20 overflow-hidden relative">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >

      <span className="bg-orange-100 text-orange-700 px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase shadow-sm">
        Spiritual Journeys
      </span>

      <h1 className="text-5xl md:text-6xl font-black text-gray-900 mt-6 leading-tight font-serif">
        Religious Tours
      </h1>

      <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto leading-relaxed">
        Experience divine peace, sacred destinations, and spiritual journeys
        with our carefully curated pilgrimage and religious tour packages.
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
          className="group"
        >

          {/* Card */}
          <div className="bg-white/80 backdrop-blur-xl border border-orange-100 rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3">

            {/* Image */}
            <div className="relative overflow-hidden">

              <img
                src={tour.image}
                alt={tour.title}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Price */}
              <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {tour.price}
              </div>

              {/* Spiritual Badge */}
              <div className="absolute top-5 right-5 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest shadow-lg">
                SPIRITUAL
              </div>

              {/* Bottom Location */}
              <div className="absolute bottom-5 left-5 text-white">

                <p className="text-sm opacity-90">
                  📍 {tour.location}
                </p>

              </div>

            </div>

            {/* Content */}
            <div className="p-6">

              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition font-serif">
                {tour.title}
              </h3>

              <div className="flex items-center justify-between mt-5">

                <div>
                  <p className="text-gray-500 text-sm">
                    Duration
                  </p>

                  <p className="font-semibold text-gray-700">
                    {tour.duration}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-yellow-500 font-semibold">
                  ✨ Divine
                </div>

              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mt-5">

                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                  Temple Visit
                </span>

                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                  Pilgrimage
                </span>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                  Spiritual
                </span>

              </div>

              {/* Button */}
              <Link to={`/religious-tours/${tour.id}`}>
                <button className="mt-7 w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-orange-300/50 transition duration-300">
                  Explore Journey ✨
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
