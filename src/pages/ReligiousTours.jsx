import React from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/package/ajmer.jpg";
import img2 from "../assets/package/tirupati.jpg";
import img3 from "../assets/package/varanasi.jpg";


const tours = [
  {
    id: 1,
    title: "Ajmer",
    location: "Yamunotri, Gangotri, Kedarnath, Badrinath",
    duration: "10 Nights / 11 Days",
    price: "₹29,999",
    image:
      img1,
  },

  {
    id: 2,
    title: "Tirupati Balaji",
    location: "Katra, Jammu",
    duration: "3 Nights / 4 Days",
    price: "₹12,999",
    image:
      img2,
  },

  {
    id: 3,
    title: "Varanasi Spiritual Tour",
    location: "Shirdi, Trimbakeshwar, Nashik",
    duration: "2 Nights / 3 Days",
    price: "₹8,999",
    image:
      img3,
  },
];

export default function ReligiousTours() {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-center mb-10">
          Religious Tours
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="text-xl font-semibold">
                  {tour.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {tour.location}
                </p>

                <p className="text-gray-600 mt-2">
                  {tour.duration}
                </p>

                <p className="text-orange-500 font-bold mt-2">
                  {tour.price}
                </p>

                <Link to={`/religious-tours/${tour.id}`}>
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                    View Details
                  </button>
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
