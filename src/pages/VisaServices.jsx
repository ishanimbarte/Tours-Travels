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
    <div className="bg-gradient-to-br from-sky-50 via-white to-indigo-50 overflow-hidden">

  {/* HERO SECTION */}
  <section className="relative pt-32 pb-24">

    {/* Background Glow */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>

          <p className="uppercase tracking-[5px] text-blue-600 font-semibold mb-4">
            Trusted Visa Assistance
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 font-serif">
            Your Gateway To
            <span className="text-blue-600"> Global Travel ✈️</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            We make visa processing smooth, fast, and stress-free with
            professional guidance for tourist, student, work, and business visas.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <Link to="/visa-application">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition duration-300">
                Apply Now
              </button>
            </Link>

            <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition">
              Free Consultation
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10 flex-wrap">

            <div>
              <h3 className="text-3xl font-bold text-gray-900">15K+</h3>
              <p className="text-gray-500">Visa Approved</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-500">Countries Covered</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">98%</h3>
              <p className="text-gray-500">Success Rate</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[40px] shadow-2xl overflow-hidden p-5">

            <img
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200&auto=format&fit=crop"
              alt="Visa Travel"
              className="rounded-[30px] h-[500px] w-full object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-6 bg-white shadow-2xl rounded-3xl p-5 backdrop-blur-xl border border-gray-100">

            <p className="text-gray-500 text-sm">
              Fast Processing
            </p>

            <h3 className="text-2xl font-bold text-blue-600">
              7-15 Days
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* SERVICES */}
  <section className="py-20">

    <div className="max-w-7xl mx-auto px-4">

      <div className="text-center mb-14">
        <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
          What We Offer
        </p>

        <h2 className="text-4xl font-bold text-gray-900 mt-3 font-serif">
          Visa Assistance Services
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {services.map((item, index) => (
          <div
            key={index}
            className="group bg-white/80 backdrop-blur-xl border border-white/40 rounded-[30px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500"
          >

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center text-2xl shadow-lg mb-6 group-hover:scale-110 transition">
              ✈️
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* COUNTRIES */}
  <section className="py-20 bg-white/70 backdrop-blur-xl">

    <div className="max-w-7xl mx-auto px-4 text-center">

      <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
        Global Coverage
      </p>

      <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-12 font-serif">
        Countries We Serve 🌍
      </h2>

      <div className="flex flex-wrap justify-center gap-5">

        {countries.map((country, index) => (
          <div
            key={index}
            className="px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-gray-800 font-semibold shadow hover:shadow-xl hover:-translate-y-1 transition"
          >
            {country}
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* PROCESS */}
  <section className="py-20">

    <div className="max-w-7xl mx-auto px-4">

      <div className="text-center mb-14">

        <p className="uppercase tracking-[4px] text-blue-600 font-semibold">
          Easy Process
        </p>

        <h2 className="text-4xl font-bold text-gray-900 mt-3 font-serif">
          Get Your Visa In 4 Steps
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8">

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-white/80 backdrop-blur-xl rounded-[30px] p-8 shadow-lg text-center hover:shadow-2xl transition"
          >

            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6">
              {index + 1}
            </div>

            <h3 className="font-bold text-xl text-gray-900 mb-3">
              Step {index + 1}
            </h3>

            <p className="text-gray-600">
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* DOCUMENTS */}
  <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

    <div className="max-w-6xl mx-auto px-4">

      <div className="text-center mb-14">

        <p className="uppercase tracking-[4px] text-blue-200 font-semibold">
          Required Documents
        </p>

        <h2 className="text-4xl font-bold mt-3 font-serif">
          Documents Checklist 📑
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {[
          "Valid Passport",
          "Passport Size Photographs",
          "Bank Statements",
          "Travel Itinerary",
          "Hotel Booking",
          "Income Proof",
          "Cover Letter",
          "Additional Documents",
        ].map((doc, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition"
          >
            <p className="font-medium">
              ✔ {doc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="py-24 relative overflow-hidden">

    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700"></div>

    <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>

    <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">

      <p className="uppercase tracking-[5px] text-blue-200 font-semibold">
        Start Your Journey
      </p>

      <h2 className="text-5xl font-bold mt-4 leading-tight font-serif">
        Need Help With Your Visa Application?
      </h2>

      <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
        Our visa experts are ready to guide you through every step of the process.
      </p>

      <div className="flex justify-center gap-5 flex-wrap mt-10">

        <Link to="/visa-application">
          <button className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:scale-105 transition duration-300">
            Apply Now
          </button>
        </Link>

        <button className="border border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
          Contact Expert
        </button>
      </div>
    </div>
  </section>
</div>
  );
}
