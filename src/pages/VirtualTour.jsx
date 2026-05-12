import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const destinations = [
  {
    id: 1,
    name: "Bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  },
  {
    id: 2,
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
  {
    id: 3,
    name: "Kashmir",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
  },
  {
    id: 4,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
  },
  {
    id: 5,
    name: "Switzerland",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    id: 6,
    name: "Goa",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86",
  },
];

export default function VirtualTour() {
  return (

<section className="relative py-20 md:py-28 overflow-hidden bg-[#f8f6f2]">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

  {/* Heading */}
  <div className="relative max-w-7xl mx-auto px-6 mb-14 md:mb-20">

    <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
      Explore The World
    </p>

    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

      <div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-tight">
          Featured <br />
          Destinations
        </h2>
      </div>

      <p className="max-w-xl text-gray-600 leading-relaxed text-base md:text-lg">
        Discover handpicked destinations crafted for unforgettable
        experiences, breathtaking landscapes, and luxury journeys across
        the world.
      </p>
    </div>
  </div>

  {/* Destination Grid */}
  <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">

    {/* Large Card */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="md:col-span-7"
    >
      <Link
        to="/destinations"
        className="group block relative overflow-hidden rounded-[32px] h-[650px]"
      >
        <img
          src={destinations[0].image}
          alt={destinations[0].name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

        <div className="absolute bottom-8 left-8 right-8 text-white">

          <p className="uppercase tracking-[0.25em] text-xs text-white/70 mb-3">
            Luxury Destination
          </p>

          <h3 className="font-serif text-5xl font-light leading-tight">
            {destinations[0].name}
          </h3>

          <p className="mt-3 text-white/75 italic">
            Discover breathtaking views and unforgettable memories.
          </p>

          <div className="mt-6 flex items-center gap-3 uppercase tracking-[0.2em] text-sm">
            <span className="w-12 h-[1px] bg-white"></span>
            Explore Now
          </div>
        </div>
      </Link>
    </motion.div>

    {/* Right Side Cards */}
    <div className="md:col-span-5 grid grid-cols-1 gap-6 lg:gap-8">

      {destinations.slice(1, 3).map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.15 }}
          viewport={{ once: true }}
        >
          <Link
            to="/destinations"
            className="group block relative overflow-hidden rounded-[30px] h-[310px]"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white">

              <p className="uppercase tracking-[0.25em] text-[11px] text-white/70 mb-2">
                Featured Tour
              </p>

              <h3 className="font-serif text-3xl font-light">
                {item.name}
              </h3>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>

    {/* Bottom Row */}
    <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

      {destinations.slice(3, 6).map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.15 }}
          viewport={{ once: true }}
        >
          <Link
            to="/destinations"
            className="group block relative overflow-hidden rounded-[30px] h-[320px]"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white">

              <p className="uppercase tracking-[0.25em] text-[11px] text-white/70 mb-2">
                Explore Destination
              </p>

              <h3 className="font-serif text-3xl font-light">
                {item.name}
              </h3>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}