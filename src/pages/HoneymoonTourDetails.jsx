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

export default function HoneymoonTourDetails() {
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
    <div className="pt-0 bg-[#fff8fb] overflow-hidden">

  {/* ================= HERO SECTION ================= */}
  <section className="relative h-[90vh] flex items-end">

    {/* Background Image */}
    <img
      src={pkg.image}
      alt={pkg.title}
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>

    {/* Pink Glow */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/20 blur-[160px] rounded-full"></div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 w-full text-white">

      <p className="uppercase tracking-[0.35em] text-pink-200 text-sm mb-5">
        Romantic Escape
      </p>

      <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight max-w-4xl">
        {pkg.title}
      </h1>

      <p className="mt-6 text-white/80 text-lg max-w-2xl">
        Celebrate your love story with unforgettable luxury experiences,
        dreamy sunsets, romantic dinners, and beautiful destinations.
      </p>

      <div className="flex flex-wrap gap-5 mt-10">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-full">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">
            Duration
          </p>

          <p className="mt-1">
            {pkg.duration}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-full">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">
            Starting Price
          </p>

          <p className="mt-1">
            ₹14,999
          </p>
        </div>

      </div>

    </div>
  </section>

  {/* ================= CONTENT ================= */}
  <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-3 gap-14">

    {/* ================= LEFT CONTENT ================= */}
    <div className="lg:col-span-2 space-y-16">

      {/* Overview */}
      <section className="bg-white rounded-[36px] p-8 md:p-10 shadow-[0_15px_50px_rgba(236,72,153,0.08)] border border-pink-100">

        <p className="uppercase tracking-[0.3em] text-pink-400 text-sm mb-4">
          About This Package
        </p>

        <h2 className="font-serif text-4xl font-light text-gray-900 mb-6">
          Overview 💕
        </h2>

        <p className="text-gray-600 leading-relaxed text-lg">
          {pkg.overview}
        </p>
      </section>

      {/* Itinerary */}
      <section>

        <p className="uppercase tracking-[0.3em] text-pink-400 text-sm mb-4">
          Romantic Journey
        </p>

        <h2 className="font-serif text-4xl font-light text-gray-900 mb-8">
          Tour Itinerary
        </h2>

        <div className="space-y-5">

          {itinerary.map((day, i) => (
            <div
              key={i}
              className="bg-white rounded-[30px] shadow-lg overflow-hidden border border-pink-100"
            >

              {/* Header */}
              <button
                onClick={() =>
                  setOpenDay(openDay === i ? null : i)
                }
                className="w-full px-7 py-6 flex justify-between items-center text-left hover:bg-pink-50 transition"
              >

                <div>

                  <p className="uppercase tracking-[0.2em] text-pink-300 text-xs mb-2">
                    Day {i + 1}
                  </p>

                  <h3 className="font-serif text-2xl font-light text-gray-900">
                    {day.title}
                  </h3>

                </div>

                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 text-2xl">
                  {openDay === i ? "−" : "+"}
                </div>

              </button>

              {/* Content */}
              {openDay === i && (
                <div className="px-7 pb-7 text-gray-600 leading-relaxed">
                  {day.details}
                </div>
              )}

            </div>
          ))}
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="grid md:grid-cols-2 gap-8">

        {/* Inclusions */}
        <div className="bg-white rounded-[32px] p-8 shadow-lg border border-pink-100">

          <h2 className="font-serif text-3xl font-light mb-6">
            Inclusions
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>💖 Romantic hotel stay with breakfast & dinner</li>
            <li>🚘 Private transportation</li>
            <li>🌅 Couple sightseeing experiences</li>
            <li>🎁 Complimentary honeymoon surprises</li>
          </ul>
        </div>

        {/* Exclusions */}
        <div className="bg-white rounded-[32px] p-8 shadow-lg border border-pink-100">

          <h2 className="font-serif text-3xl font-light mb-6">
            Exclusions
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✈ Airfare / Train tickets</li>
            <li>🛍 Personal expenses</li>
            <li>🎟 Monument entry tickets</li>
            <li>🩺 Travel insurance</li>
          </ul>
        </div>

      </section>

      {/* Rate Card */}
      <section>

        <p className="uppercase tracking-[0.3em] text-pink-400 text-sm mb-4">
          Pricing Plans
        </p>

        <h2 className="font-serif text-4xl font-light text-gray-900 mb-8">
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
              className="bg-white rounded-[32px] p-8 text-center shadow-lg border border-pink-100 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(236,72,153,0.18)] transition duration-500"
            >

              <p className="uppercase tracking-[0.25em] text-pink-300 text-xs mb-4">
                {plan.type}
              </p>

              <h3 className="font-serif text-5xl font-light text-gray-900">
                {plan.price}
              </h3>

              <button className="mt-8 w-full py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white transition">
                Select Plan
              </button>

            </div>
          ))}
        </div>
      </section>

      {/* Policies */}
      <section className="grid md:grid-cols-2 gap-8">

        <div className="bg-white rounded-[32px] p-8 shadow-lg border border-pink-100">

          <h2 className="font-serif text-3xl font-light mb-5">
            Payment Terms
          </h2>

          <p className="text-gray-600 leading-relaxed">
            30% advance required at booking confirmation. Remaining balance
            payable before departure.
          </p>
        </div>

        <div className="bg-white rounded-[32px] p-8 shadow-lg border border-pink-100">

          <h2 className="font-serif text-3xl font-light mb-5">
            Cancellation Policy
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Cancellation charges depend on the time before departure.
            Refund processed within 7–10 working days.
          </p>
        </div>

      </section>

      {/* Themes */}
      <section className="bg-white rounded-[32px] p-8 shadow-lg border border-pink-100">

        <h2 className="font-serif text-4xl font-light text-gray-900 mb-8">
          Packages by Theme
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <ul className="space-y-4 text-gray-600">
            <li>💍 Honeymoon Special</li>
            <li>👨‍👩‍👧 Family Friendly</li>
            <li>🏔 Adventure Tour</li>
          </ul>

          <ul className="space-y-4 text-gray-600">
            <li>🏨 Luxury Experience</li>
            <li>💰 Budget Package</li>
            <li>👥 Group Tour</li>
          </ul>

        </div>
      </section>

    </div>

    {/* ================= SIDEBAR ================= */}
    <div className="lg:col-span-1">

      <div className="sticky top-28 bg-white rounded-[36px] p-8 shadow-[0_20px_60px_rgba(236,72,153,0.12)] border border-pink-100">

        <p className="uppercase tracking-[0.3em] text-pink-400 text-sm mb-4">
          Reserve Your Trip
        </p>

        <h3 className="font-serif text-4xl font-light text-gray-900 mb-8">
          Book This Tour
        </h3>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-2xl border border-pink-200 px-5 py-4 outline-none focus:border-pink-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-2xl border border-pink-200 px-5 py-4 outline-none focus:border-pink-400"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-2xl border border-pink-200 px-5 py-4 outline-none focus:border-pink-400"
          />

          <div className="grid grid-cols-2 gap-4">

            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="rounded-2xl border border-pink-200 px-4 py-4"
            />

            <input
              type="date"
              min={fromDate}
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="rounded-2xl border border-pink-200 px-4 py-4"
            />

          </div>

          <div className="grid grid-cols-2 gap-4">

            <input
              type="number"
              min="1"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="rounded-2xl border border-pink-200 px-4 py-4"
            />

            <input
              type="number"
              min="0"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="rounded-2xl border border-pink-200 px-4 py-4"
            />

          </div>

          <select
            value={packageType}
            onChange={(e) => setPackageType(e.target.value)}
            className="w-full rounded-2xl border border-pink-200 px-5 py-4"
          >
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Luxury</option>
          </select>

          {/* Total */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-[28px] p-6 text-center text-white">

            <p className="uppercase tracking-[0.2em] text-xs text-white/70">
              Total Price
            </p>

            <h4 className="font-serif text-5xl font-light mt-3">
              ₹ {totalPrice.toLocaleString()}
            </h4>

          </div>

          {/* Buttons */}
          <button
            onClick={sendWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full uppercase tracking-[0.15em] transition"
          >
            WhatsApp Enquiry
          </button>

          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-full uppercase tracking-[0.15em] transition">
            Book Romantic Tour
          </button>

        </div>
      </div>

    </div>

  </div>
</div>
  );
}