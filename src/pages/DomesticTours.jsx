import React from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/package/manali.jpg";
import img2 from "../assets/package/kashmir.jpg";
import img3 from "../assets/package/rajasthan.jpg";
import img4 from "../assets/package/odisha.jpg";
import img5 from "../assets/package/uk.jpg";
import img6 from "../assets/package/shimla.jpg";

export default function DomesticTours() {
  const tours = [
    {
      id: 1,
      title: "Manali Adventure Tour",
      duration: "5 Nights / 6 Days",
      price: "₹12,999",
      image: img1,
    },
    {
      id: 2,
      title: "Kashmir Paradise Tour",
      duration: "6 Nights / 7 Days",
      price: "₹18,499",
      image: img2,
    },
    {
      id: 3,
      title: "Royal Rajasthan Tour",
      duration: "7 Nights / 8 Days",
      price: "₹15,999",
      image: img3,
    },
    {
      id: 4,
      title: "Odisha Temple Tour",
      duration: "4 Nights / 5 Days",
      price: "₹9,999",
      image: img4,
    },
    {
      id: 5,
      title: "Uttarakhand Hill Tour",
      duration: "5 Nights / 6 Days",
      price: "₹11,499",
      image: img5,
    },
    {
      id: 6,
      title: "Shimla Honeymoon Special",
      duration: "4 Nights / 5 Days",
      price: "₹10,999",
      image: img6,
    },
  ];

  return (
    <div className="pt-24 bg-gray-50">

      {/* Hero */}
      <section className="bg-white text-black  text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Explore Domestic Tours
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Discover the beauty of India with our best travel packages
        </p>
      </section>

      {/* Tours */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">

          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  {tour.title}
                </h3>

                <p className="text-gray-500 mt-1">
                  {tour.duration}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-blue-600 font-bold text-lg">
                    {tour.price}
                  </span>

                  <Link to={`/domestic/${tour.id}`}>
  <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg">
    View Details
  </button>
</Link>

                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
