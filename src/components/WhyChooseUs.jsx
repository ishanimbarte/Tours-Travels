import React from "react";
import { ShieldCheck, Clock, Users, PackageCheck, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: <ShieldCheck size={36} className="text-white" />,
    title: "Best Price Guarantee",
    desc: "We offer competitive prices with no hidden charges for all packages.",
    bg: "bg-orange-500",
  },
  {
    icon: <Clock size={36} className="text-white" />,
    title: "24/7 Support",
    desc: "Our team is always available to assist you anytime, anywhere.",
    bg: "bg-blue-500",
  },
  {
    icon: <Users size={36} className="text-white" />,
    title: "Trusted by 10,000+ Travelers",
    desc: "Thousands of happy travelers have experienced our curated tours.",
    bg: "bg-purple-500",
  },
  {
    icon: <PackageCheck size={36} className="text-white" />,
    title: "Custom Packages",
    desc: "Tailor-made tours to suit your preferences and interests.",
    bg: "bg-pink-500",
  },
  {
    icon: <CreditCard size={36} className="text-white" />,
    title: "Secure Booking",
    desc: "Your payments and personal information are always safe with us.",
    bg: "bg-green-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Why Choose Us
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            We provide premium travel experiences that are safe, fun, and unforgettable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-7 md:gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-5 sm:p-6 text-center shadow-lg hover:shadow-2xl transition"
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full mx-auto mb-4 sm:mb-5 ${item.bg}`}
              >
                {item.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1.5 sm:mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}