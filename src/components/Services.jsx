import React from "react";
import { motion } from "framer-motion";
import {
  Plane,
  Hotel,
  Globe,
  Briefcase,
  Heart,
  Map,
} from "lucide-react";

const services = [
  {
    icon: <Plane size={40} />,
    title: "Flight Booking",
    desc: "Best deals on domestic and international flights with flexible options.",
  },
  {
    icon: <Hotel size={40} />,
    title: "Hotel Booking",
    desc: "Comfortable stays from budget to luxury hotels at top destinations.",
  },
  {
    icon: <Globe size={40} />,
    title: "Visa Assistance",
    desc: "Hassle-free visa processing with expert guidance and documentation support.",
  },
  {
    icon: <Map size={40} />,
    title: "Tour Packages",
    desc: "Carefully crafted tour packages for families, couples, and groups.",
  },
  {
    icon: <Briefcase size={40} />,
    title: "Corporate Tours",
    desc: "Professional travel management solutions for corporate clients and events.",
  },
  {
    icon: <Heart size={40} />,
    title: "Honeymoon Planning",
    desc: "Romantic and memorable honeymoon experiences at stunning destinations.",
  },
];

export default function Services() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-600 mt-2 md:mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            We provide complete travel solutions to make your journey smooth,
            comfortable, and unforgettable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition group text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 md:mb-5 text-blue-600 group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-2 md:mt-3 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}