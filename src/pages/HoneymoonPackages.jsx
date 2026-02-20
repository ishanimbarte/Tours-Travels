import React from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/package/maldive.jpg";
import img2 from "../assets/package/bali.jpg";
import img3 from "../assets/package/manali.jpg";

const honeymoonPackages = [
  {
    id: 1,
    title: "Maldives Romantic Escape",
    location: "Maldives",
    duration: "4 Nights / 5 Days",
    price: "₹79,999",
    image:
      img1,
  },
  {
    id: 2,
    title: "Bali Honeymoon Special",
    location: "Bali, Indonesia",
    duration: "5 Nights / 6 Days",
    price: "₹59,999",
    image:
      img2,
  },
  {
    id: 3,
    title: "Manali Couple Retreat",
    location: "Manali, India",
    duration: "4 Nights / 5 Days",
    price: "₹24,999",
    image:
      img3,
  },
];

export default function HoneymoonPackages() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen pt-28 pb-16">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Honeymoon Packages 💕
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Celebrate your love with our specially curated romantic honeymoon
          packages across beautiful destinations.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {honeymoonPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute top-4 left-4 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                {pkg.price}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                {pkg.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {pkg.location}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                Duration: {pkg.duration}
              </p>

              <Link to={`/honeymoon/${pkg.id}`}>
                <button className="mt-5 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl font-medium transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
