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
    <div className="bg-gray-50 min-h-screen py-10 px-4">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Visa Services
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <button
          onClick={() => setActiveTab("form")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === "form"
              ? "bg-blue-600 text-white"
              : "bg-white border"
          }`}
        >
          Apply Visa
        </button>

        <button
          onClick={() => setActiveTab("countries")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === "countries"
              ? "bg-blue-600 text-white"
              : "bg-white border"
          }`}
        >
          Country Details
        </button>

        <button
          onClick={() => setActiveTab("pricing")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === "pricing"
              ? "bg-blue-600 text-white"
              : "bg-white border"
          }`}
        >
          Pricing
        </button>
      </div>

      {/* ================= FORM ================= */}
      {activeTab === "form" && (
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">

          <h3 className="text-2xl font-bold mb-6 text-center">
            Visa Application Form
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                required
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />

              <select
                name="country"
                required
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              >
                <option value="">Select Country</option>
                <option>USA</option>
                <option>Canada</option>
                <option>UK</option>
                <option>Australia</option>
                <option>Dubai</option>
                <option>Singapore</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="visaType"
                required
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              >
                <option value="">Visa Type</option>
                <option>Tourist Visa</option>
                <option>Business Visa</option>
                <option>Student Visa</option>
                <option>Work Visa</option>
              </select>

              <input
                type="date"
                name="travelDate"
                required
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />
            </div>

            <textarea
              name="message"
              placeholder="Additional Information"
              rows="4"
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
            ></textarea>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
              Submit Application
            </button>

          </form>
        </div>
      )}

      {/* ================= COUNTRY DETAILS ================= */}
      {activeTab === "countries" && (
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {country.name}
              </h3>

              <p><strong>Processing Time:</strong> {country.processing}</p>
              <p><strong>Validity:</strong> {country.validity}</p>
              <p className="mt-2 text-lg font-semibold text-green-600">
                {country.price}
              </p>

              <button
                onClick={() => setActiveTab("form")}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
              >
                Apply Now
              </button>
            </div>
          ))}

        </div>
      )}

      {/* ================= PRICING ================= */}
      {activeTab === "pricing" && (
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 text-center relative ${
                plan.popular ? "border-2 border-blue-600" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  Popular
                </span>
              )}

              <h3 className="text-xl font-bold mb-3">{plan.title}</h3>

              <p className="text-3xl font-bold text-blue-600 mb-4">
                {plan.price}
              </p>

              <ul className="space-y-2 mb-6 text-gray-600">
                {plan.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              <button
                onClick={() => setActiveTab("form")}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
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
