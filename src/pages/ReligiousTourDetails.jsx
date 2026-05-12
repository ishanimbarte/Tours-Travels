import React, { useState } from "react";
import { useParams } from "react-router-dom";

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

export default function ReligiousTourDetails() {
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
    <div className="pt-0 bg-gradient-to-b from-orange-50 via-white to-amber-50 min-h-screen overflow-hidden">

  {/* Hero Banner */}
  <div className="relative h-[500px] rounded-b-[50px] overflow-hidden shadow-2xl">

    <img
      src={pkg.image}
      alt={pkg.title}
      className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

    {/* Floating Glow */}
    <div className="absolute top-10 left-10 w-40 h-40 bg-orange-400/30 rounded-full blur-3xl"></div>
    <div className="absolute bottom-10 right-10 w-52 h-52 bg-yellow-300/20 rounded-full blur-3xl"></div>

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">

      <p className="uppercase tracking-[6px] text-orange-200 text-sm mb-4">
        Divine Journey ✨
      </p>

      <h1 className="text-5xl md:text-7xl font-bold font-serif text-white drop-shadow-2xl">
        {pkg.title}
      </h1>

      <p className="mt-5 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
        Experience peace, spirituality, and sacred destinations with our
        carefully curated religious tour package.
      </p>

      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <div className="bg-white/15 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white">
          🕉️ Spiritual Experience
        </div>

        <div className="bg-white/15 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white">
          📍 {pkg.duration}
        </div>
      </div>

    </div>
  </div>

  {/* Main Layout */}
  <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10">

    {/* LEFT CONTENT */}
    <div className="lg:col-span-2 space-y-12">

      {/* Overview */}
      <section className="bg-white rounded-3xl p-8 shadow-lg border border-orange-100">
        <h2 className="text-3xl font-bold font-serif text-gray-800 mb-5 flex items-center gap-3">
          🛕 Overview
        </h2>

        <p className="text-gray-600 leading-8 text-lg">
          {pkg.overview}
        </p>
      </section>

      {/* Itinerary */}
      <section className="bg-white rounded-3xl p-8 shadow-lg border border-orange-100">

        <h2 className="text-3xl font-bold font-serif text-gray-800 mb-6 flex items-center gap-3">
          📜 Tour Itinerary
        </h2>

        <div className="space-y-5">

          {itinerary.map((day, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-orange-100 shadow-sm hover:shadow-lg transition"
            >

              {/* Header */}
              <button
                onClick={() =>
                  setOpenDay(openDay === i ? null : i)
                }
                className="w-full bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-5 flex justify-between items-center"
              >

                <div className="text-left">
                  <p className="text-sm text-orange-500 font-medium">
                    Day {i + 1}
                  </p>

                  <h3 className="font-bold text-lg text-gray-800">
                    {day.title}
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl">
                  {openDay === i ? "−" : "+"}
                </div>

              </button>

              {/* Content */}
              {openDay === i && (
                <div className="px-6 pb-6 pt-2 text-gray-600 leading-7 bg-white">
                  {day.details}
                </div>
              )}

            </div>
          ))}

        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Inclusions */}
        <section className="bg-white rounded-3xl p-8 shadow-lg border border-green-100">

          <h2 className="text-2xl font-bold text-green-600 mb-5">
            ✅ Inclusions
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>🏨 Hotel accommodation with meals</li>
            <li>🚘 Comfortable transportation</li>
            <li>🛕 Temple & sightseeing visits</li>
            <li>🧾 Toll taxes & parking charges</li>
          </ul>

        </section>

        {/* Exclusions */}
        <section className="bg-white rounded-3xl p-8 shadow-lg border border-red-100">

          <h2 className="text-2xl font-bold text-red-500 mb-5">
            ❌ Exclusions
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✈️ Airfare / Train tickets</li>
            <li>💸 Personal expenses</li>
            <li>🎟️ Monument entry tickets</li>
            <li>🛡️ Travel insurance</li>
          </ul>

        </section>

      </div>

      {/* Rate Card */}
      <section className="bg-white rounded-3xl p-8 shadow-lg border border-orange-100">

        <h2 className="text-3xl font-bold font-serif mb-8 text-gray-800">
          💰 Rate Card
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            { type: "Standard", price: "₹14,999" },
            { type: "Deluxe", price: "₹19,999" },
            { type: "Luxury", price: "₹29,999" },
          ].map((plan, i) => (
            <div
              key={i}
              className="rounded-3xl p-8 text-center bg-gradient-to-b from-orange-50 to-white border border-orange-100 hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >

              <h3 className="text-2xl font-bold text-gray-800">
                {plan.type}
              </h3>

              <p className="text-4xl font-bold text-orange-500 mt-4">
                {plan.price}
              </p>

              <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition">
                Choose Plan
              </button>

            </div>
          ))}

        </div>

      </section>

      {/* Policies */}
      <section className="bg-white rounded-3xl p-8 shadow-lg border border-orange-100 space-y-8">

        <div>
          <h2 className="text-2xl font-bold font-serif mb-3 text-gray-800">
            💳 Payment Terms
          </h2>

          <p className="text-gray-600 leading-7">
            30% advance payment is required at the time of booking.
            Remaining balance must be cleared before departure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold font-serif mb-3 text-gray-800">
            🔄 Cancellation Policy
          </h2>

          <p className="text-gray-600 leading-7">
            Cancellation charges vary depending on the departure date.
            Refunds are processed within 7–10 working days.
          </p>
        </div>

      </section>

    </div>

    {/* RIGHT SIDEBAR */}
    <div className="lg:sticky lg:top-28 h-fit">

      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-100">

        <h3 className="text-3xl font-bold font-serif text-gray-800 mb-2">
          Book This Tour ✨
        </h3>

        <p className="text-gray-500 mb-6">
          Begin your spiritual journey with us.
        </p>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
          />

          {/* Dates */}
          <div className="grid grid-cols-2 gap-3">

            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="border border-gray-200 rounded-2xl px-3 py-3"
            />

            <input
              type="date"
              min={fromDate}
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="border border-gray-200 rounded-2xl px-3 py-3"
            />

          </div>

          {/* Guests */}
          <div className="grid grid-cols-2 gap-3">

            <input
              type="number"
              min="1"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="border border-gray-200 rounded-2xl px-3 py-3"
            />

            <input
              type="number"
              min="0"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="border border-gray-200 rounded-2xl px-3 py-3"
            />

          </div>

          {/* Package Type */}
          <select
            value={packageType}
            onChange={(e) => setPackageType(e.target.value)}
            className="w-full border border-gray-200 rounded-2xl px-4 py-3"
          >
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Luxury</option>
          </select>

          {/* Total Price */}
          <div className="bg-gradient-to-r from-orange-100 to-amber-50 p-6 rounded-3xl text-center border border-orange-200">

            <p className="text-gray-600">
              Total Price
            </p>

            <h4 className="text-4xl font-bold text-orange-500 mt-2">
              ₹ {totalPrice.toLocaleString()}
            </h4>

          </div>

          {/* Buttons */}
          <button
            onClick={sendWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-green-300 transition"
          >
            WhatsApp Enquiry
          </button>

          <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-orange-300 transition">
            Book Now
          </button>

        </div>

      </div>

    </div>

  </div>
</div>
  );
}