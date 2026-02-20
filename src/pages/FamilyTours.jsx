import React from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/package/manali.jpg";
import img2 from "../assets/package/Goa.jpg";
import img3 from "../assets/package/dubai.jpg";
import img4 from "../assets/package/kerala.jpg";
import img5 from "../assets/package/singapore.jpg";
import img6 from "../assets/package/rajasthan.jpg";

const familyTours = [
  {
    id: 1,
    title: "Manali Family Vacation",
    location: "Manali, Himachal Pradesh",
    duration: "5 Nights / 6 Days",
    price: "₹18,999",
    image:
      img1,
  },
  {
    id: 2,
    title: "Goa Family Fun Trip",
    location: "Goa, India",
    duration: "4 Nights / 5 Days",
    price: "₹14,999",
    image:
      img2,
  },
  {
    id: 3,
    title: "Dubai Family Holiday",
    location: "Dubai, UAE",
    duration: "5 Nights / 6 Days",
    price: "₹49,999",
    image:
      img3,
  },
  {
    id: 4,
    title: "Kerala Backwaters Family Tour",
    location: "Kerala, India",
    duration: "6 Nights / 7 Days",
    price: "₹22,999",
    image:
      img4,
  },
  {
    id: 5,
    title: "Singapore Family Adventure",
    location: "Singapore",
    duration: "5 Nights / 6 Days",
    price: "₹55,999",
    image:
      img5,
  },
  {
    id: 6,
    title: "Rajasthan Heritage Family Tour",
    location: "Jaipur, Jodhpur, Udaipur",
    duration: "6 Nights / 7 Days",
    price: "₹19,999",
    image:
      img6,
  },
];

export default function FamilyTours() {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white min-h-screen pt-28 pb-16">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Family Tour Packages 👨‍👩‍👧‍👦
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Create unforgettable memories with your loved ones through our
          carefully designed family-friendly holiday packages.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {familyTours.map((pkg) => (
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

              <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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

              <Link to={`/family-tours/${pkg.id}`}>
                <button className="mt-5 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl font-medium transition">
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
