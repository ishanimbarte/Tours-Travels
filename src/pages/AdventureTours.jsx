import React from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/package/manali.jpg";
import img2 from "../assets/package/rishikesh.jpg";
import img3 from "../assets/package/Leh-Ladakh.jpg";

const tours = [
  {
    id: 1,
    title: "Manali Adventure Trip",
    location: "Manali, Solang Valley",
    duration: "5 Nights / 6 Days",
    price: "₹19,999",
    image:
      img1,
  },

  {
    id: 2,
    title: "Rishikesh River Rafting",
    location: "Rishikesh, Uttarakhand",
    duration: "3 Nights / 4 Days",
    price: "₹12,999",
    image:
      img2,
  },

  {
    id: 3,
    title: "Leh Ladakh Bike Tour",
    location: "Leh, Nubra Valley, Pangong",
    duration: "7 Nights / 8 Days",
    price: "₹29,999",
    image:
      img3,
  },
];

export default function AdventureTours() {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-center mb-10">
          Adventure Tours ˚˖𓍢ִ໋🍃˚.⛰️⋆☁️
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

                <Link to={`/adventure-tours/${tour.id}`}>
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
