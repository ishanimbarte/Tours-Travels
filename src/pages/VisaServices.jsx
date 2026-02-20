import React from "react";
import { Link } from "react-router-dom";

export default function VisaServices() {
  const countries = [
    "USA",
    "Canada",
    "UK",
    "Australia",
    "Dubai",
    "Singapore",
    "Thailand",
    "Schengen Countries",
  ];

  const services = [
    {
      title: "Tourist Visa",
      desc: "We assist you with complete tourist visa documentation and processing for international travel.",
    },
    {
      title: "Business Visa",
      desc: "Get professional assistance for business meetings, conferences, and corporate travel visas.",
    },
    {
      title: "Student Visa",
      desc: "End-to-end support for student visa application, documentation, and interview preparation.",
    },
    {
      title: "Work Visa",
      desc: "Guidance and documentation support for employment and work permit visas worldwide.",
    },
  ];

  const steps = [
    "Choose your destination country",
    "Submit required documents",
    "Application processing & appointment",
    "Visa approval & delivery",
  ];

  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Visa Services</h1>
          <p className="max-w-2xl mx-auto">
            We provide hassle-free visa assistance for tourist, business, student,
            and work visas with expert guidance and fast processing.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Visa Assistance Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Countries */}
      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Countries We Serve</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((country, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full font-medium"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-center mb-10">
          Simple Visa Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold">
                {index + 1}
              </div>
              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Documents */}
      <div className="bg-gray-100 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Documents Required
          </h2>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li>✔ Valid Passport</li>
            <li>✔ Passport Size Photographs</li>
            <li>✔ Bank Statements</li>
            <li>✔ Travel Itinerary</li>
            <li>✔ Hotel Booking</li>
            <li>✔ Income Proof</li>
            <li>✔ Cover Letter</li>
            <li>✔ Additional Documents (as per country)</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Help With Visa Application?
        </h2>
        <p className="mb-6">
          Contact our experts today for quick and reliable visa assistance.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          <Link to="/visa-application" className="text-blue-600 hover:text-blue-800">
            Apply Now
          </Link>
        </button>
      </div>

    </div>
  );
}
