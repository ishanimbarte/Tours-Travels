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
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800">
            Why Choose Us
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            We provide premium travel experiences that are safe, fun, and unforgettable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
  {reasons.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.03 }}
      className="group relative overflow-hidden rounded-[30px] bg-white/80 backdrop-blur-xl border border-white/20 p-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)] transition-all duration-500"
    >

      {/* Animated Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-700"></div>

      {/* Floating Blur Circle */}
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-200/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

      {/* Shine Animation */}
      <div className="absolute -left-32 top-0 w-32 h-full bg-white/30 skew-x-12 group-hover:left-[140%] transition-all duration-1000"></div>

      {/* Icon Container */}
      <div
        className={`relative w-20 h-20 flex items-center justify-center rounded-[24px] mx-auto mb-6 ${item.bg}
        shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
      >

        {/* Glow Behind Icon */}
        <div className="absolute inset-0 rounded-[24px] bg-white/20 blur-md"></div>

        <div className="relative z-10 text-3xl">
          {item.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="relative text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition duration-300">
        {item.title}
      </h3>

      {/* Small Divider */}
      <div className="w-12 h-1 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mb-4 group-hover:w-20 transition-all duration-500"></div>

      {/* Description */}
      <p className="relative text-gray-600 text-sm leading-relaxed">
        {item.desc}
      </p>

      {/* Bottom Hover Border */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 group-hover:w-full transition-all duration-500"></div>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}