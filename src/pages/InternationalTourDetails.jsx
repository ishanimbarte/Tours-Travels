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

export default function InternationalTourDetails() {
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
    <div className="pt-0  bg-[#f8f6f2] overflow-hidden">

  {/* ================= HERO BANNER ================= */}
  <section className="relative h-[85vh] flex items-end">

    {/* Background */}
    <img
      src={pkg.image}
      alt={pkg.title}
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>

    {/* Glow */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 text-white w-full">

      <p className="uppercase tracking-[0.35em] text-white/70 text-xs sm:text-sm mb-5">
        Luxury Travel Experience
      </p>

      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-tight max-w-4xl">
        {pkg.title}
      </h1>

      <div className="flex flex-wrap gap-6 mt-8">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-full">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">
            Duration
          </p>

          <p className="mt-1 font-medium">
            {pkg.duration}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-full">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">
            Starting From
          </p>

          <p className="mt-1 font-medium">
            ₹14,999
          </p>
        </div>

      </div>
    </div>
  </section>

  {/* ================= CONTENT ================= */}
  <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-3 gap-14">

    {/* ================= LEFT ================= */}
    <div className="lg:col-span-2 space-y-16">

      {/* Overview */}
      <section>
        <p className="uppercase tracking-[0.3em] text-gray-500 text-sm mb-4">
          About The Journey
        </p>

        <h2 className="font-serif text-4xl font-light text-gray-900 mb-6">
          Tour Overview
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          {pkg.overview}
        </p>
      </section>

      {/* Itinerary */}
      <section>
        <p className="uppercase tracking-[0.3em] text-gray-500 text-sm mb-4">
          Day Wise Plan
        </p>

        <h2 className="font-serif text-4xl font-light text-gray-900 mb-8">
          Tour Itinerary
        </h2>

        <div className="space-y-5">

          {itinerary.map((day, i) => (
            <div
              key={i}
              className="group bg-white rounded-[28px] border border-gray-100 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)] transition duration-500"
            >

              <button
                onClick={() => setOpenDay(openDay === i ? null : i)}
                className="w-full px-7 py-6 flex items-center justify-between text-left"
              >

                <div>
                  <p className="uppercase tracking-[0.2em] text-gray-400 text-xs mb-2">
                    Day {i + 1}
                  </p>

                  <h3 className="font-serif text-2xl font-light text-gray-900">
                    {day.title}
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-2xl text-orange-500">
                  {openDay === i ? "−" : "+"}
                </div>

              </button>

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
            <li>✘ Monument entry fees</li>
            <li>✘ Travel insurance</li>
          </ul>
        </div>
      </section>

      {/* Rate Cards */}
      <section>

        <p className="uppercase tracking-[0.3em] text-gray-500 text-sm mb-4">
          Pricing Plans
        </p>

        <h2 className="font-serif text-4xl font-light text-gray-900 mb-8">
          Choose Your Stay
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            { type: "Standard", price: "₹14,999" },
            { type: "Deluxe", price: "₹19,999" },
            { type: "Luxury", price: "₹29,999" },
          ].map((plan, i) => (
            <div
              key={i}
              className="group bg-white rounded-[32px] p-8 text-center shadow-lg hover:-translate-y-3 transition duration-500"
            >

              <p className="uppercase tracking-[0.25em] text-gray-400 text-xs mb-5">
                {plan.type}
              </p>

              <h3 className="font-serif text-5xl font-light text-gray-900">
                {plan.price}
              </h3>

              <button className="mt-8 w-full py-3 rounded-full border border-black text-black hover:bg-black hover:text-white transition">
                Select Plan
              </button>

            </div>
          ))}
        </div>
      </section>

    </div>

    {/* ================= SIDEBAR ================= */}
    <div className="lg:col-span-1">

      <div className="sticky top-28 bg-white rounded-[36px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">

        <p className="uppercase tracking-[0.3em] text-gray-500 text-sm mb-4">
          Reserve Your Tour
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

          {/* Price */}
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
            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full uppercase tracking-[0.15em] transition duration-500"
          >
            WhatsApp Enquiry
          </button>

          <button className="w-full bg-black hover:bg-orange-500 text-white py-4 rounded-full uppercase tracking-[0.15em] transition duration-500">
            Book Now
          </button>

        </div>
      </div>
    </div>

  </div>
</div>
  );
}