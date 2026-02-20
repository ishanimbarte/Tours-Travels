import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Amazing experience! Everything was perfectly organized. Hotels, transport, and sightseeing were top class.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    location: "Delhi",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Best travel agency I’ve used. Very professional team and great support throughout the trip.",
    rating: 5,
  },
  {
    name: "Sneha Patil",
    location: "Pune",
    image:
      "https://randomuser.me/api/portraits/women/45.jpg",
    review:
      "Our honeymoon trip was unforgettable. Highly recommended for couples and family tours.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold text-gray-800">
            What Our Travelers Say ❤️
          </h2>
          <p className="text-gray-600 mt-2 md:mt-3 text-sm sm:text-base">
            Real experiences from our happy customers
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-5 md:p-6 relative"
            >
              {/* Stars */}
              <div className="text-yellow-400 text-base md:text-lg mb-2 md:mb-3">
                {"⭐".repeat(t.rating)}
              </div>

              {/* Review */}
              <p className="text-gray-600 mb-5 md:mb-6 text-sm md:text-base leading-relaxed">
                “{t.review}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3 md:gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-orange-400"
                />

                <div>
                  <h4 className="font-semibold text-gray-800 text-sm md:text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500">
                    {t.location}
                  </p>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4 text-orange-200 text-4xl md:text-5xl font-bold">
                ”
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}