import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plane, Calendar, Users } from "lucide-react";

export default function FlightBooking() {
  const [tripType, setTripType] = useState("round");

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <div className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Book Your Flight ✈️
          </h1>
          <p className="mt-4 text-lg opacity-90">
            Find the best deals for domestic & international flights
          </p>
        </div>
      </div>

      {/* SEARCH FORM */}
      <section className="max-w-6xl mx-auto px-6 -mt-20 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8"
        >
          {/* Trip Type */}
          <div className="flex gap-6 mb-6">
            <button
              onClick={() => setTripType("one")}
              className={`px-5 py-2 rounded-full ${
                tripType === "one"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              One Way
            </button>

            <button
              onClick={() => setTripType("round")}
              className={`px-5 py-2 rounded-full ${
                tripType === "round"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              Round Trip
            </button>
          </div>

          {/* Form Grid */}
          <div className="grid md:grid-cols-4 gap-4">

            <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
              <Plane size={20} className="text-blue-600" />
              <input
                type="text"
                placeholder="From City"
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
              <Plane size={20} className="text-blue-600 rotate-90" />
              <input
                type="text"
                placeholder="To City"
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
              <Calendar size={20} className="text-blue-600" />
              <input
                type="date"
                className="w-full outline-none"
              />
            </div>

            {tripType === "round" && (
              <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
                <Calendar size={20} className="text-blue-600" />
                <input
                  type="date"
                  className="w-full outline-none"
                />
              </div>
            )}

            <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
              <Users size={20} className="text-blue-600" />
              <select className="w-full outline-none bg-transparent">
                <option>1 Traveller</option>
                <option>2 Travellers</option>
                <option>3 Travellers</option>
                <option>4+ Travellers</option>
              </select>
            </div>

            <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
              <select className="w-full outline-none bg-transparent">
                <option>Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>

          </div>

          {/* Button */}
          <div className="mt-6 text-center">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-105 transition transform text-white px-10 py-3 rounded-xl font-semibold shadow-lg">
              Search Flights
            </button>
          </div>

        </motion.div>
      </section>

      {/* WHY BOOK WITH US */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Why Book With Us ?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-lg">Best Price Guarantee</h3>
            <p className="text-gray-600 mt-2">
              Get the most competitive flight prices with zero hidden charges.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-lg">24/7 Support</h3>
            <p className="text-gray-600 mt-2">
              Our travel experts are always available to assist you anytime.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold text-lg">Easy Cancellation</h3>
            <p className="text-gray-600 mt-2">
              Flexible booking and easy cancellation options available.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-14 text-center">

        <h2 className="text-3xl font-bold">
          Need Help Booking Your Flight?
        </h2>

        <p className="mt-3 opacity-90">
          Contact our travel experts for the best deals
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold">
            Call Now
          </button>

          <a
            href="https://wa.me/919999999999"
            className="border border-white px-6 py-3 rounded-xl"
          >
            WhatsApp
          </a>
        </div>

      </section>

    </div>
  );
}
