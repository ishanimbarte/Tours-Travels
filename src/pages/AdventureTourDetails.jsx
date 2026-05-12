import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../assets/kashmir-bg.jpg";

const packagesData = {
  1: {
    title: "Kashmir Paradise Tour",
    image:
      img1,
    duration: "5 Nights / 6 Days",
    overview:
      "Explore the beautiful valleys of Kashmir including Srinagar, Gulmarg, and Pahalgam with comfortable stays and scenic experiences.",
  },

  2: {
    title: "Goa Beach Holiday",
    image:
      img1,
    duration: "3 Nights / 4 Days",
    overview:
      "Enjoy Goa’s beaches, nightlife, water sports, and Portuguese heritage culture with relaxing stays.",
  },

  3: {
    title: "Goa Beach Holiday",
    image:
      img1,
    duration: "3 Nights / 4 Days",
    overview:
      "Enjoy Goa’s beaches, nightlife, water sports, and Portuguese heritage culture with relaxing stays.",
  },
};

export default function AdventureTourDetails() {
  const { id } = useParams();
  const pkg = packagesData[id];

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [packageType, setPackageType] = useState("Standard");

  // ✅ NEW STATE FOR ITINERARY DROPDOWN
  const [openDay, setOpenDay] = useState(null);

  const itinerary = [
    {
      title: "Arrival & Hotel Check-in",
      details:
        "Arrival at destination. Transfer to hotel and check-in. Evening free for leisure. Overnight stay at hotel.",
    },
    {
      title: "Local Sightseeing",
      details:
        "After breakfast visit famous tourist places, gardens, temples and markets. Dinner and overnight stay at hotel.",
    },
    {
      title: "Adventure Activities",
      details:
        "Enjoy activities like trekking, gondola ride, water sports or snow activities depending on location.",
    },
    {
      title: "Leisure Day",
      details:
        "Free day for shopping or personal exploration. Relax and enjoy hotel facilities.",
    },
    {
      title: "Departure",
      details:
        "Breakfast at hotel. Check-out and transfer to airport/railway station.",
    },
  ];

  const priceTable = {
    Standard: 14999,
    Deluxe: 19999,
    Luxury: 29999,
  };

  const totalPrice =
    priceTable[packageType] * adults +
    priceTable[packageType] * 0.5 * children;

  const sendWhatsApp = () => {
    const message = `Hello, I want to enquire about the tour.

Package Type: ${packageType}
Adults: ${adults}
Children: ${children}
Travel Date: ${fromDate} to ${toDate}
Total Price: ₹${totalPrice}`;

    const phoneNumber = "919999999999";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  if (!pkg) return <div className="pt-32 text-center">Package Not Found</div>;

  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-green-50 min-h-screen pt-0 overflow-hidden relative">

  {/* Background Blurs */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-green-300/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/20 blur-3xl rounded-full"></div>

  {/* Hero Banner */}
  <div className="relative h-[500px] overflow-hidden">

    <img
      src={pkg.image}
      alt={pkg.title}
      className="w-full h-full object-cover scale-105"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <span className="bg-white/20 backdrop-blur-md border border-white/30 px-5 py-2 rounded-full text-sm tracking-widest uppercase font-semibold">
          Adventure Escape
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight font-serif">
          {pkg.title}
        </h1>

        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">
          {pkg.duration} • Mountains • Trekking • Nature Trails
        </p>

      </motion.div>

    </div>
  </div>

  {/* Main Layout */}
  <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10 relative z-10">

    {/* LEFT CONTENT */}
    <div className="lg:col-span-2 space-y-10">

      {/* Overview */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-xl rounded-[32px] shadow-xl border border-white/50 p-8"
      >

        <h2 className="text-4xl font-bold mb-6 text-gray-800 font-serif">
          Overview ˚˖𓍢ִ໋🍃˚
        </h2>

        <p className="text-gray-600 leading-8 text-lg">
          {pkg.overview}
        </p>

      </motion.section>

      {/* Itinerary */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-xl rounded-[32px] shadow-xl border border-white/50 p-8"
      >

        <h2 className="text-4xl font-bold mb-8 text-gray-800 font-serif">
          Tour Itinerary
        </h2>

        <div className="space-y-5">

          {itinerary.map((day, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-3xl overflow-hidden hover:shadow-lg transition"
            >

              {/* Header */}
              <button
                onClick={() =>
                  setOpenDay(openDay === i ? null : i)
                }
                className="w-full p-6 flex justify-between items-center text-left"
              >

                <div>
                  <p className="text-sm text-green-600 font-semibold uppercase tracking-widest">
                    Day {i + 1}
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mt-1">
                    {day.title}
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl shadow-md">
                  {openDay === i ? "-" : "+"}
                </div>

              </button>

              {/* Content */}
              {openDay === i && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {day.details}
                </div>
              )}

            </div>
          ))}

        </div>

      </motion.section>

      {/* Inclusion + Exclusion */}
      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white rounded-[28px] shadow-lg p-8 border border-green-100">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 font-serif">
            Inclusions
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✅ Hotel accommodation with meals</li>
            <li>✅ Private transportation</li>
            <li>✅ Sightseeing as per itinerary</li>
            <li>✅ All toll taxes & parking</li>
          </ul>
        </div>

        <div className="bg-white rounded-[28px] shadow-lg p-8 border border-red-100">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 font-serif">
            Exclusions
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>❌ Airfare / Train tickets</li>
            <li>❌ Personal expenses</li>
            <li>❌ Monument entry tickets</li>
            <li>❌ Travel insurance</li>
          </ul>
        </div>

      </div>

      {/* Rate Cards */}
      <section className="bg-white/80 backdrop-blur-xl rounded-[32px] shadow-xl border border-white/50 p-8">

        <h2 className="text-4xl font-bold mb-8 text-gray-800 font-serif">
          Rate Card
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            { type: "Standard", price: "₹14,999" },
            { type: "Deluxe", price: "₹19,999" },
            { type: "Luxury", price: "₹29,999" },
          ].map((plan, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-white to-green-50 border border-green-100 rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-500"
            >

              <h3 className="text-2xl font-bold text-gray-800">
                {plan.type}
              </h3>

              <p className="text-4xl font-black text-green-600 mt-4">
                {plan.price}
              </p>

              <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition">
                Choose Plan
              </button>

            </div>
          ))}

        </div>

      </section>

    </div>

    {/* RIGHT SIDEBAR */}
    <div className="lg:sticky lg:top-28 h-fit">

      <div className="bg-white/90 backdrop-blur-2xl rounded-[36px] shadow-2xl border border-white/50 overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-8 text-white text-center">

          <h3 className="text-3xl font-bold font-serif">
            Book This Tour
          </h3>

          <p className="mt-2 text-white/90">
            Reserve your adventure now
          </p>

        </div>

        {/* Form */}
        <div className="p-7 space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
          />

          <div className="grid grid-cols-2 gap-4">

            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 outline-none"
            />

            <input
              type="date"
              min={fromDate}
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 outline-none"
            />

          </div>

          <div className="grid grid-cols-2 gap-4">

            <input
              type="number"
              min="1"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 outline-none"
            />

            <input
              type="number"
              min="0"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 outline-none"
            />

          </div>

          <select
            value={packageType}
            onChange={(e) => setPackageType(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 outline-none"
          >
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Luxury</option>
          </select>

          {/* Price */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-6 text-center border border-green-100">

            <p className="text-gray-600">
              Total Price
            </p>

            <h4 className="text-4xl font-black text-green-600 mt-2">
              ₹ {totalPrice.toLocaleString()}
            </h4>

          </div>

          {/* Buttons */}
          <button
            onClick={sendWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold shadow-lg transition"
          >
            WhatsApp Enquiry
          </button>

          <button className="w-full bg-gradient-to-r from-gray-900 to-black hover:opacity-90 text-white py-4 rounded-2xl font-bold shadow-lg transition">
            Book Now
          </button>

        </div>

      </div>

    </div>

  </div>
</div>
  );
}