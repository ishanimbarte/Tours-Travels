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

  4: {
    title: "Goa Beach Holiday",
    image:
      img1,
    duration: "3 Nights / 4 Days",
    overview:
      "Enjoy Goa’s beaches, nightlife, water sports, and Portuguese heritage culture with relaxing stays.",
  },

  5: {
    title: "Goa Beach Holiday",
    image:
      img1,
    duration: "3 Nights / 4 Days",
    overview:
      "Enjoy Goa’s beaches, nightlife, water sports, and Portuguese heritage culture with relaxing stays.",
  },

  6: {
    title: "Goa Beach Holiday",
    image:
      img1,
    duration: "3 Nights / 4 Days",
    overview:
      "Enjoy Goa’s beaches, nightlife, water sports, and Portuguese heritage culture with relaxing stays.",
  },
};

export default function FamilyTourDetails() {
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
    <div className="bg-gradient-to-b from-yellow-50 via-white to-orange-50 min-h-screen pt-0 pb-20 overflow-hidden relative">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-300/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 blur-3xl rounded-full"></div>

  {/* Banner */}
  <div className="relative h-[500px] overflow-hidden">

    <img
      src={pkg.image}
      alt={pkg.title}
      className="w-full h-full object-cover scale-105"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

    {/* Floating Content */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 z-10">

      <span className="bg-yellow-400/20 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-sm tracking-widest uppercase mb-5">
        Family Vacation
      </span>

      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-2xl">
        {pkg.title}
      </h1>

      <p className="mt-5 text-lg md:text-xl text-white/90 max-w-2xl">
        {pkg.duration} • Create unforgettable memories with your loved ones
      </p>



    </div>
  </div>

  {/* Main Content */}
  <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10 relative z-10">

    {/* LEFT CONTENT */}
    <div className="lg:col-span-2 space-y-10">

      {/* Overview */}
      <section className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-[30px] shadow-xl p-8">

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center text-2xl">
            👨‍👩‍👧‍👦
          </div>

          <h2 className="text-3xl font-bold text-gray-800">
            Overview
          </h2>
        </div>

        <p className="text-gray-600 leading-8 text-lg">
          {pkg.overview}
        </p>

      </section>

      {/* Tour Itinerary */}
      <section className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-[30px] shadow-xl p-8">

        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Tour Itinerary
        </h2>

        <div className="space-y-5">

          {itinerary.map((day, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-100 rounded-2xl overflow-hidden shadow-sm"
            >

              {/* HEADER */}
              <button
                onClick={() =>
                  setOpenDay(openDay === i ? null : i)
                }
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-white/50 transition"
              >

                <div>
                  <p className="text-sm text-yellow-600 font-semibold">
                    Day {i + 1}
                  </p>

                  <h3 className="font-bold text-lg text-gray-800 mt-1">
                    {day.title}
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-full bg-yellow-400 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  {openDay === i ? "-" : "+"}
                </div>

              </button>

              {/* CONTENT */}
              {openDay === i && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
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
        <section className="bg-white rounded-[28px] shadow-xl p-7 border border-green-100">

          <h2 className="text-2xl font-bold text-green-600 mb-5">
            ✔ Inclusions
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              Hotel accommodation with breakfast & dinner
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              Private transportation
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              Sightseeing as per itinerary
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              All toll taxes & parking
            </li>
          </ul>

        </section>

        {/* Exclusions */}
        <section className="bg-white rounded-[28px] shadow-xl p-7 border border-red-100">

          <h2 className="text-2xl font-bold text-red-500 mb-5">
            ✖ Exclusions
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-red-400">✕</span>
              Airfare / Train tickets
            </li>

            <li className="flex items-start gap-3">
              <span className="text-red-400">✕</span>
              Personal expenses
            </li>

            <li className="flex items-start gap-3">
              <span className="text-red-400">✕</span>
              Entry tickets to monuments
            </li>

            <li className="flex items-start gap-3">
              <span className="text-red-400">✕</span>
              Travel insurance
            </li>
          </ul>

        </section>

      </div>

      {/* Rate Card */}
      <section className="bg-white rounded-[30px] shadow-xl p-8">

        <h2 className="text-3xl font-bold text-gray-800 mb-8">
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
              className="relative bg-gradient-to-b from-yellow-50 to-orange-50 rounded-3xl p-7 text-center border border-yellow-100 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="w-14 h-14 mx-auto rounded-full bg-yellow-400 text-white flex items-center justify-center text-2xl shadow-lg mb-4">
                ✨
              </div>

              <h3 className="font-bold text-2xl text-gray-800">
                {plan.type}
              </h3>

              <p className="text-4xl font-extrabold text-orange-500 mt-4">
                {plan.price}
              </p>

              <button className="mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition">
                Choose Plan
              </button>

            </div>
          ))}

        </div>

      </section>

    </div>

    {/* RIGHT SIDEBAR */}
    <div className="lg:col-span-1">

      <div className="sticky top-28 bg-white/90 backdrop-blur-2xl rounded-[32px] shadow-2xl border border-white/50 p-8">

        <h3 className="text-3xl font-bold text-gray-800 mb-2">
          Book This Tour
        </h3>

        <p className="text-gray-500 mb-7">
          Start planning your dream family vacation ✨
        </p>

        <div className="space-y-5">

          {/* Inputs */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Dates */}
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

          {/* Guests */}
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

          {/* Package Type */}
          <select
            value={packageType}
            onChange={(e) => setPackageType(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 outline-none"
          >
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Luxury</option>
          </select>

          {/* Price Box */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-3xl text-center text-white shadow-xl">

            <p className="text-white/80 text-sm uppercase tracking-widest">
              Total Price
            </p>

            <h4 className="text-4xl font-extrabold mt-2">
              ₹ {totalPrice.toLocaleString()}
            </h4>

          </div>

          {/* Buttons */}
          <button
            onClick={sendWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-semibold shadow-lg transition hover:scale-[1.02]"
          >
            Enquire on WhatsApp
          </button>

          <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 rounded-2xl font-semibold shadow-xl hover:scale-[1.02] transition">
            Book Now
          </button>

        </div>

      </div>

    </div>

  </div>
</div>
  );
}