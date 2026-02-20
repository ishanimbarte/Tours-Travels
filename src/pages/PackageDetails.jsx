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
};

export default function PackageDetails() {
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
    <div className="pt-24 bg-gray-50">
      {/* Banner */}
      <div className="relative h-[420px]">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">{pkg.title}</h1>
          <p className="mt-3">{pkg.duration}</p>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-12">

          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-600">{pkg.overview}</p>
          </section>

          {/* Tour Itinerary */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Tour Itinerary</h2>

            <div className="space-y-4">
              {itinerary.map((day, i) => (
                <div key={i} className="bg-white rounded-xl shadow">

                  {/* HEADER */}
                  <button
                    onClick={() =>
                      setOpenDay(openDay === i ? null : i)
                    }
                    className="w-full text-left p-5 flex justify-between items-center"
                  >
                    <h3 className="font-semibold">
                      Day {i + 1}
                    </h3>

                    <span className="text-xl font-bold text-orange-500">
                      {openDay === i ? "-" : "+"}
                    </span>
                  </button>

                  {/* CONTENT */}
                  {openDay === i && (
                    <div className="px-5 pb-5 text-gray-600 text-sm">
                      <p className="font-medium mb-1">{day.title}</p>
                      <p>{day.details}</p>
                    </div>
                  )}

                </div>
              ))}
            </div>
          </section>

          {/* Inclusions */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Inclusions</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Hotel accommodation with breakfast & dinner</li>
              <li>Private transportation</li>
              <li>Sightseeing as per itinerary</li>
              <li>All toll taxes & parking</li>
            </ul>
          </section>

          {/* Exclusions */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Exclusions</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Airfare / Train tickets</li>
              <li>Personal expenses</li>
              <li>Entry tickets to monuments</li>
              <li>Travel insurance</li>
            </ul>
          </section>

          {/* Rate Card */}
<section>
  <h2 className="text-2xl font-bold mb-4">Rate Card</h2>

  <div className="grid md:grid-cols-3 gap-6">
    {[
      { type: "Standard", price: "₹14,999" },
      { type: "Deluxe", price: "₹19,999" },
      { type: "Luxury", price: "₹29,999" },
    ].map((plan, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow p-6 text-center"
      >
        <h3 className="font-bold text-lg">{plan.type}</h3>

        <p className="text-2xl text-orange-500 font-bold mt-2">
          {plan.price}
        </p>
      </div>
    ))}
  </div>
</section>

{/* Payment Terms */}
<section>
  <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>

  <p className="text-gray-600">
    30% advance required at booking confirmation. Remaining balance
    payable before departure.
  </p>
</section>

{/* Cancellation Policy */}
<section>
  <h2 className="text-2xl font-bold mb-4">
    Cancellation & Refund Policy
  </h2>

  <p className="text-gray-600">
    Cancellation charges depend on the time before departure.
    Refund processed within 7–10 working days.
  </p>
</section>

{/* Packages by Theme */}
<section>
  <h2 className="text-2xl font-bold mb-4">Packages by Theme</h2>

  <div className="grid md:grid-cols-2 gap-6">
    <ul className="list-disc pl-6 text-gray-600 space-y-2">
      <li>Honeymoon Special</li>
      <li>Family Friendly</li>
      <li>Adventure Tour</li>
    </ul>

    <ul className="list-disc pl-6 text-gray-600 space-y-2">
      <li>Luxury Experience</li>
      <li>Budget Package</li>
      <li>Group Tour</li>
    </ul>
  </div>
</section>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-1">

          <h3 className="text-xl font-bold mb-4">Book This Tour</h3>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-3 py-2"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-3 py-2"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-3 py-2"
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="border rounded-lg px-3 py-2"
              />

              <input
                type="date"
                min={fromDate}
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="border rounded-lg px-3 py-2"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                min="1"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="border rounded-lg px-3 py-2"
              />

              <input
                type="number"
                min="0"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="border rounded-lg px-3 py-2"
              />
            </div>

            <select
              value={packageType}
              onChange={(e) => setPackageType(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option>Standard</option>
              <option>Deluxe</option>
              <option>Luxury</option>
            </select>

            <div className="bg-orange-50 p-4 rounded-xl text-center">
              <p>Total Price</p>
              <h4 className="text-2xl font-bold text-orange-500">
                ₹ {totalPrice.toLocaleString()}
              </h4>
            </div>

            <button
              onClick={sendWhatsApp}
              className="w-full bg-green-500 text-white py-3 rounded-lg"
            >
              Enquire on WhatsApp
            </button>

            <button className="w-full bg-blue-500 text-white py-3 rounded-lg">
              Book Now
            </button>


          </div>
        </div>

      </div>
    </div>
  );
}