import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../assets/package/manali.jpg";
import img2 from "../assets/package/kashmir.jpg";
import img3 from "../assets/package/rajasthan.jpg";
import img4 from "../assets/package/odisha.jpg";
import img5 from "../assets/package/uk.jpg";
import img6 from "../assets/package/shimla.jpg";

export default function DomesticTours() {
  const tours = [
    {
      id: 1,
      title: "Manali Adventure Tour",
      duration: "5 Nights / 6 Days",
      price: "₹12,999",
      image: img1,
    },
    {
      id: 2,
      title: "Kashmir Paradise Tour",
      duration: "6 Nights / 7 Days",
      price: "₹18,499",
      image: img2,
    },
    {
      id: 3,
      title: "Royal Rajasthan Tour",
      duration: "7 Nights / 8 Days",
      price: "₹15,999",
      image: img3,
    },
    {
      id: 4,
      title: "Odisha Temple Tour",
      duration: "4 Nights / 5 Days",
      price: "₹9,999",
      image: img4,
    },
    {
      id: 5,
      title: "Uttarakhand Hill Tour",
      duration: "5 Nights / 6 Days",
      price: "₹11,499",
      image: img5,
    },
    {
      id: 6,
      title: "Shimla Honeymoon Special",
      duration: "4 Nights / 5 Days",
      price: "₹10,999",
      image: img6,
    },
  ];

  return (
    <div className="pt-0 bg-[#f8f6f2] overflow-hidden">

  {/* ================= Hero Section ================= */}
  <section className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">

    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Domestic Tours"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/70"></div>
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
      className="relative z-10 px-6 text-white"
    >

      <p className="uppercase tracking-[0.35em] text-white/70 text-xs sm:text-sm mb-5">
        Explore Incredible India
      </p>

      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-tight">
        Domestic <br />
        Tours
      </h1>

      <p className="mt-6 max-w-2xl mx-auto text-white/80 text-base md:text-xl leading-relaxed">
        Discover breathtaking landscapes, vibrant cultures, and unforgettable
        journeys across India with our luxury domestic travel experiences.
      </p>

      {/* Decorative Line */}
      <div className="w-32 h-[1px] bg-white/40 mx-auto mt-10"></div>

    </motion.div>
  </section>

  {/* ================= Tours Section ================= */}
  <section className="max-w-7xl mx-auto px-6 py-24">

    {/* Heading */}
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">

      <div>
        <p className="uppercase tracking-[0.3em] text-gray-500 text-sm mb-4">
          Handpicked Experiences
        </p>

        <h2 className="font-serif text-4xl sm:text-5xl font-light text-gray-900 leading-tight">
          Featured Tours
        </h2>
      </div>

      <p className="max-w-xl text-gray-600 leading-relaxed text-base md:text-lg">
        Experience curated travel packages designed to offer comfort,
        adventure, and unforgettable memories across India’s most iconic
        destinations.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">

      {tours.map((tour, index) => (
        <motion.div
          key={tour.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.12 }}
          viewport={{ once: true }}
          className="group"
        >

          <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.14)]">

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={tour.image}
                alt={tour.title}
                className="h-72 w-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

              {/* Price */}
              <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full text-white text-xs uppercase tracking-[0.2em] shadow-lg">
                {tour.price}
              </div>

              {/* Content on Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white">

                <p className="uppercase tracking-[0.25em] text-[11px] text-white/70 mb-2">
                  Luxury Tour
                </p>

                <h3 className="font-serif text-3xl font-light leading-tight">
                  {tour.title}
                </h3>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="p-6">

              {/* Duration */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">

                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-1">
                    Duration
                  </p>

                  <p className="text-gray-700 font-medium">
                    {tour.duration}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-lg">
                  ✈
                </div>
              </div>

              {/* Button */}
              <Link to={`/domestic/${tour.id}`}>
                <button className="mt-6 w-full rounded-full border border-black bg-black text-white py-3 text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:bg-orange-500 hover:border-orange-500">
                  View Details
                </button>
              </Link>

            </div>

            {/* Bottom Hover Line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-black group-hover:w-full transition-all duration-700"></div>

          </div>
        </motion.div>
      ))}
    </div>
  </section>
</div>
  );
}
