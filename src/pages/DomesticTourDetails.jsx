import React, { useState } from "react";
import { useParams } from "react-router-dom";

import img1 from "../assets/kashmir-bg.jpg";

const packagesData = {
  1: {
    title: "Manali Adventure Tour",
    image:
      img1,
    duration: "5 Nights / 6 Days",
    overview:
      "Explore the beautiful valleys of Manali including Solang Valley, Rohtang Pass, and Beas River with comfortable stays and scenic experiences.",
  },

  2: {
    title: "Kashmir Paradise Tour",
    image:
      img1,
    duration: "6 Nights / 7 Days",
    overview:
      "Enjoy Kashmir’s scenic beauty, hill stations, and family-friendly activities with comfortable stays.",
  },

  3: {
    title: "Royal Rajasthan Tour",
    image:
      img1,
    duration: "7 Nights / 8 Days",
    overview:
      "Experience the royal heritage of Rajasthan with visits to palaces, forts, and traditional culture with comfortable stays.",
  },

  4: {
    title: "Odisha Temple Tour",
    image:
      img1,
    duration: "4 Nights / 5 Days",
    overview:
      "Explore the ancient temples and cultural heritage of Odisha with comfortable stays.",

  },

  5: {
    title: "Uttarakhand Hill Tour",
    image:
      img1,
    duration: "5 Nights / 6 Days",
    overview:
      "Enjoy the scenic beauty of Uttarakhand with visits to hill stations, temples, and nature trails with comfortable stays.",
  },

  6: {
    title: "Shimla Honeymoon Special",
    image:
      img1,
    duration: "4 Nights / 5 Days",
    overview:
      "Enjoy the romantic charm of Shimla with scenic views, cozy stays, and honeymoon-friendly activities.",

  },


};

export default function DomesticTourDetails() {
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
    <div className="pt-0 bg-[#f8f6f2] overflow-hidden">

  {/* ================= HERO SECTION ================= */}
  <section className="relative h-[85vh] flex items-end">

    {/* Background Image */}
    <img
      src={pkg.image}
      alt={pkg.title}
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full text-white">

      <p className="uppercase tracking-[0.35em] text-white/70 text-xs sm:text-sm mb-5">
        Luxury Tour Package
      </p>

      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-tight max-w-4xl">
        {pkg.title}
      </h1>

      <div className="flex flex-wrap gap-5 mt-8">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-full">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">
            Duration
          </p>

          <p className="mt-1">
            {pkg.duration}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-full">
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

  {/* ================= MAIN CONTENT ================= */}
  <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-3 gap-14">

    {/* ================= LEFT SIDE ================= */}
    <div className="lg:col-span-2 space-y-16">

      {/* Overview */}
      <section className="bg-white rounded-[32px] p-8 md:p-10 shadow-lg">

        <p className="uppercase tracking-[0.3em] text-gray-500 text-sm mb-4">
          About The Tour
        </p>

        <h2 className="font-serif text-4xl font-light text-gray-900 mb-6">
          Overview
        </h2>

        <p className="text-gray-600 leading-relaxed text-lg">
          {pkg.overview}
        </p>
      </section>

      {/* Itinerary */}
      <section>

        <p className="uppercase tracking-[0.3em] text-gray-500 text-sm mb-4">
          Travel Plan
        </p>

        <h2 className="font-serif text-4xl font-light text-gray-900 mb-8">
          Tour Itinerary
        </h2>

        <div className="space-y-5">

          {itinerary.map((day, i) => (
            <div
              key={i}
              className="bg-white rounded-[28px] shadow-lg overflow-hidden border border-gray-100"
            >

              {/* Header */}
              <button
                onClick={() =>
                  setOpenDay(openDay === i ? null : i)
                }
                className="w-full px-7 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition"
              >

                <div>
                  <p className="uppercase tracking-[0.2em] text-gray-400 text-xs mb-2">
                    Day {i + 1}
                  </p>

                  <h3 className="font-serif text-2xl font-light text-gray-900">
                    {day.title}
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 text-2xl">
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

      {/* Inclusion / Exclusion */}
      <section className="grid md:grid-cols-2 gap-8">

        {/* Inclusions */}
        <div className="bg-white rounded-[32px] p-8 shadow-lg">

          <h2 className="font-serif text-3xl font-light mb-6">
            Inclusions
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✔ Hotel accommodation with breakfast & dinner</li>
            <li>✔ Private transportation</li>
            <li>✔ Sightseeing as per itinerary</li>
            <li>✔ Toll taxes & parking</li>
          </ul>
        </div>

        {/* Exclusions */}
        <div className="bg-white rounded-[32px] p-8 shadow-lg">

          <h2 className="font-serif text-3xl font-light mb-6">
            Exclusions
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✘ Airfare / Train tickets</li>
            <li>✘ Personal expenses</li>
            <li>✘ Entry tickets to monuments</li>
            <li>✘ Travel insurance</li>
          </ul>
        </div>

      </section>

      {/* Rate Card */}
      <section>

        <p className="uppercase tracking-[0.3em] text-gray-500 text-sm mb-4">
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
              className="bg-white rounded-[32px] p-8 text-center shadow-lg hover:-translate-y-3 transition duration-500"
            >

              <p className="uppercase tracking-[0.25em] text-gray-400 text-xs mb-4">
                {plan.type}
              </p>

              <h3 className="font-serif text-5xl font-light text-gray-900">
                {plan.price}
              </h3>

              <button className="mt-8 w-full py-3 rounded-full border border-black text-black hover:bg-black hover:text-white transition">
                Choose Plan
              </button>

            </div>
          ))}
        </div>
      </section>

      {/* Policies */}
      <section className="grid md:grid-cols-2 gap-8">

        <div className="bg-white rounded-[32px] p-8 shadow-lg">
          <h2 className="font-serif text-3xl font-light mb-5">
            Payment Terms
          </h2>

          <p className="text-gray-600 leading-relaxed">
            30% advance required at booking confirmation. Remaining balance
            payable before departure.
          </p>
        </div>

        <div className="bg-white rounded-[32px] p-8 shadow-lg">
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
      <section className="bg-white rounded-[32px] p-8 shadow-lg">

        <h2 className="font-serif text-4xl font-light text-gray-900 mb-8">
          Packages by Theme
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <ul className="space-y-4 text-gray-600">
            <li>✨ Honeymoon Special</li>
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

      <div className="sticky top-28 bg-white rounded-[36px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">

        <p className="uppercase tracking-[0.3em] text-gray-500 text-sm mb-4">
          Reserve Your Seat
        </p>

        <h3 className="font-serif text-4xl font-light text-gray-900 mb-8">
          Book This Tour
        </h3>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-orange-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-orange-400"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-orange-400"
          />

          <div className="grid grid-cols-2 gap-4">

            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="rounded-2xl border border-gray-200 px-4 py-4"
            />

            <input
              type="date"
              min={fromDate}
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="rounded-2xl border border-gray-200 px-4 py-4"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">

            <input
              type="number"
              min="1"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className="rounded-2xl border border-gray-200 px-4 py-4"
            />

            <input
              type="number"
              min="0"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="rounded-2xl border border-gray-200 px-4 py-4"
            />
          </div>

          <select
            value={packageType}
            onChange={(e) => setPackageType(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 px-5 py-4"
          >
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Luxury</option>
          </select>

          {/* Total Price */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-[28px] p-6 text-center text-white">

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

          <button className="w-full bg-black hover:bg-orange-500 text-white py-4 rounded-full uppercase tracking-[0.15em] transition">
            Book Now
          </button>

        </div>
      </div>
    </div>

  </div>
</div>
  );
}