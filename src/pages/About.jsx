import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Award, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

import bg from "../assets/kashmir-bg.jpg";

export default function AboutPage() {
  const stats = [
    { icon: <Users size={28} />, value: "10,000+", label: "Happy Travelers" },
    { icon: <Globe size={28} />, value: "50+", label: "Destinations" },
    { icon: <Award size={28} />, value: "8+", label: "Years Experience" },
    { icon: <HeartHandshake size={28} />, value: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src={bg}
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Travel Company
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Creating unforgettable journeys and lifetime memories with expertly
            crafted travel experiences across India and the world.
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
          alt="About Travel"
          className="rounded-2xl shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            We are a passionate travel company dedicated to providing memorable
            experiences for travelers. From romantic honeymoons to thrilling
            adventures, relaxing family vacations, and spiritual journeys — we
            design trips tailored to your dreams.
          </p>
          <p className="text-gray-600">
            Our team focuses on comfort, affordability, and personalized service
            to ensure every journey becomes a cherished memory. Whether you are
            exploring mountains, beaches, or cultural destinations, we are here
            to make it seamless and enjoyable.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6"
            >
              <div className="text-blue-600 flex justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold">{item.value}</h3>
              <p className="text-gray-500">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Planning",
              desc: "Professionally designed itineraries to maximize your travel experience.",
            },
            {
              title: "Affordable Pricing",
              desc: "Best price guarantee with premium services and no hidden costs.",
            },
            {
              title: "Trusted Support",
              desc: "Dedicated assistance before, during, and after your journey.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-14 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="mb-6">
            Contact us today and let us plan your perfect vacation.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition">
            <Link to="/contact">Contact Us</Link>
          </button>
        </motion.div>
      </section>
    </div>
  );
}
