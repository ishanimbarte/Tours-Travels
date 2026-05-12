import React, { useState } from "react";

export default function VisaApplication() {
  const [activeTab, setActiveTab] = useState("form");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    visaType: "",
    travelDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
  };

  // Countries Data
  const countries = [
    {
      name: "USA",
      processing: "15 - 30 Days",
      validity: "6 Months - 10 Years",
      price: "₹12,000",
    },
    {
      name: "Canada",
      processing: "20 - 35 Days",
      validity: "6 Months - 5 Years",
      price: "₹10,500",
    },
    {
      name: "UK",
      processing: "15 - 25 Days",
      validity: "6 Months",
      price: "₹9,500",
    },
    {
      name: "Australia",
      processing: "20 - 30 Days",
      validity: "3 Months",
      price: "₹11,000",
    },
    {
      name: "Dubai",
      processing: "3 - 5 Days",
      validity: "30 Days",
      price: "₹7,500",
    },
  ];

  // Pricing Plans
  const plans = [
    {
      title: "Tourist Visa",
      price: "₹7,999",
      features: [
        "Documentation Support",
        "Application Filing",
        "Appointment Booking",
        "Email Support",
      ],
    },
    {
      title: "Business Visa",
      price: "₹9,999",
      popular: true,
      features: [
        "Priority Processing",
        "Documentation Assistance",
        "Interview Preparation",
        "Dedicated Manager",
      ],
    },
    {
      title: "Student Visa",
      price: "₹14,999",
      features: [
        "University Guidance",
        "Financial Documentation",
        "Interview Training",
        "Complete Assistance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50 pt-24 py-14 px-4 relative overflow-hidden">

  {/* Background Blur Effects */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

  {/* Heading */}
  <div className="text-center mb-12 relative z-10">
    <p className="uppercase tracking-[5px] text-blue-600 font-semibold text-sm mb-3">
      Visa Assistance
    </p>

    <h2 className="text-5xl font-bold text-gray-900 font-serif">
      Travel Without Stress ✈️
    </h2>

    <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
      Fast & reliable visa support for tourist, business, student,
      and work visas with expert consultation and smooth processing.
    </p>
  </div>

  {/* Tabs */}
  <div className="flex justify-center gap-4 mb-12 flex-wrap relative z-10">

    {[
      { key: "form", label: "Apply Visa" },
      { key: "countries", label: "Country Details" },
      { key: "pricing", label: "Pricing" },
    ].map((tab) => (
      <button
        key={tab.key}
        onClick={() => setActiveTab(tab.key)}
        className={`px-7 py-3 rounded-full font-semibold transition-all duration-300 shadow-md ${
          activeTab === tab.key
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white scale-105"
            : "bg-white/80 backdrop-blur border border-gray-200 text-gray-700 hover:bg-blue-50"
        }`}
      >
        {tab.label}
      </button>
    ))}

  </div>

  {/* ================= FORM ================= */}
  {activeTab === "form" && (
    <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[30px] p-8 md:p-10 relative z-10">

      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 font-serif">
          Visa Application Form
        </h3>

        <p className="text-gray-500 mt-2">
          Fill in your details and our experts will contact you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              onChange={handleChange}
              className="mt-2 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-4 rounded-2xl w-full outline-none transition"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
              className="mt-2 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-4 rounded-2xl w-full outline-none transition"
            />
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Mobile Number
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter mobile number"
              required
              onChange={handleChange}
              className="mt-2 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-4 rounded-2xl w-full outline-none transition"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Select Country
            </label>

            <select
              name="country"
              required
              onChange={handleChange}
              className="mt-2 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-4 rounded-2xl w-full outline-none transition bg-white"
            >
              <option value="">Choose destination</option>
              <option>USA</option>
              <option>Canada</option>
              <option>UK</option>
              <option>Australia</option>
              <option>Dubai</option>
              <option>Singapore</option>
            </select>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Visa Type
            </label>

            <select
              name="visaType"
              required
              onChange={handleChange}
              className="mt-2 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-4 rounded-2xl w-full outline-none transition bg-white"
            >
              <option value="">Select visa type</option>
              <option>Tourist Visa</option>
              <option>Business Visa</option>
              <option>Student Visa</option>
              <option>Work Visa</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Travel Date
            </label>

            <input
              type="date"
              name="travelDate"
              required
              onChange={handleChange}
              className="mt-2 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-4 rounded-2xl w-full outline-none transition"
            />
          </div>

        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700">
            Additional Information
          </label>

          <textarea
            name="message"
            placeholder="Write your travel plans or any additional details..."
            rows="5"
            onChange={handleChange}
            className="mt-2 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 p-4 rounded-2xl w-full outline-none transition resize-none"
          ></textarea>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:scale-[1.02] hover:shadow-blue-300 transition-all duration-300">
          Submit Application ✨
        </button>

      </form>
    </div>
  )}

  {/* ================= COUNTRY DETAILS ================= */}
  {activeTab === "countries" && (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

      {countries.map((country, index) => (
        <div
          key={index}
          className="group bg-white/80 backdrop-blur-xl border border-white/40 rounded-[28px] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
        >

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <h3 className="text-2xl font-bold font-serif">
              {country.name}
            </h3>

            <p className="text-blue-100 mt-1">
              Fast & secure visa processing
            </p>
          </div>

          <div className="p-6 space-y-4">

            <div className="flex justify-between items-center">
              <span className="text-gray-500">Processing Time</span>

              <span className="font-semibold text-gray-800">
                {country.processing}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-500">Validity</span>

              <span className="font-semibold text-gray-800">
                {country.validity}
              </span>
            </div>

            <div className="pt-2">
              <p className="text-3xl font-bold text-green-600">
                {country.price}
              </p>
            </div>

            <button
              onClick={() => setActiveTab("form")}
              className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-2xl font-semibold hover:scale-[1.02] transition"
            >
              Apply Now
            </button>

          </div>
        </div>
      ))}

    </div>
  )}

  {/* ================= PRICING ================= */}
  {activeTab === "pricing" && (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

      {plans.map((plan, index) => (
        <div
          key={index}
          className={`relative bg-white/80 backdrop-blur-xl border rounded-[30px] shadow-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
            plan.popular
              ? "border-blue-600 scale-105"
              : "border-white/40"
          }`}
        >

          {plan.popular && (
            <span className="absolute top-5 right-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-4 py-1 rounded-full shadow">
              Most Popular
            </span>
          )}

          <h3 className="text-2xl font-bold text-gray-900 font-serif mb-4">
            {plan.title}
          </h3>

          <p className="text-5xl font-bold text-blue-600 mb-6">
            {plan.price}
          </p>

          <ul className="space-y-3 mb-8 text-gray-600">
            {plan.features.map((f, i) => (
              <li
                key={i}
                className="bg-gray-50 rounded-xl py-2 px-3"
              >
                ✔ {f}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setActiveTab("form")}
            className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 ${
              plan.popular
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg"
                : "bg-gray-100 hover:bg-blue-50 text-gray-800"
            }`}
          >
            Choose Plan
          </button>

        </div>
      ))}

    </div>
  )}

</div>
  );
}
