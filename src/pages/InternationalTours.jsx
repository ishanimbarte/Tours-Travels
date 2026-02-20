import React from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/package/dubai.jpg";
import img2 from "../assets/package/thailand1.jpg";
import img3 from "../assets/package/singapore.jpg";
import img4 from "../assets/package/switzerland.jpg";
import img5 from "../assets/package/bali.jpg";
import img6 from "../assets/package/maldive.jpg";

const tours = [
  {
    id: 1,
    title: "Dubai Luxury Tour",
    duration: "4 Nights / 5 Days",
    price: "₹49,999",
    image:
      img1,
  },
  {
    id: 2,
    title: "Thailand Phuket & Krabi",
    duration: "5 Nights / 6 Days",
    price: "₹39,999",
    image:
      img2,
  },
  {
    id: 3,
    title: "Singapore Malaysia Tour",
    duration: "6 Nights / 7 Days",
    price: "₹59,999",
    image:
      img3,
  },
  {
    id: 4,
    title: "Europe Highlights",
    duration: "9 Nights / 10 Days",
    price: "₹1,29,999",
    image:
      img4,
  },
  {
    id: 5,
    title: "Bali Honeymoon Special",
    duration: "5 Nights / 6 Days",
    price: "₹54,999",
    image:
      img5,
  },
  {
    id: 6,
    title: "Maldives Luxury Escape",
    duration: "3 Nights / 4 Days",
    price: "₹69,999",
    image:
      img6,
  },
];

export default function InternationalTours() {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">

      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          International Tours 🌍
        </h1>
        <p className="text-gray-600 mt-4">
          Explore the world with our carefully designed international travel
          packages at the best prices.
        </p>
      </div>

      {/* Tour Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">

              <h3 className="text-lg font-bold text-gray-800">
                {tour.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {tour.duration}
              </p>

              <div className="flex justify-between items-center mt-4">

                <span className="text-orange-500 font-bold text-lg">
                  {tour.price}
                </span>

                <Link to={`/international-tours/${tour.id}`}>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                    View Details
                  </button>
                </Link>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
