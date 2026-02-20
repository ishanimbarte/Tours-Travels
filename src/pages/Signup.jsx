// src/pages/Signup.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-orange-50 px-4">
  <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden">
    {/* Decorative Background */}
    <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-200 rounded-full opacity-30 pointer-events-none"></div>
    <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-pink-200 rounded-full opacity-30 pointer-events-none"></div>

    <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8 tracking-wide">
      Sign Up
    </h2>

    <form className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm transition duration-300 hover:shadow-md"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm transition duration-300 hover:shadow-md"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm transition duration-300 hover:shadow-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-orange-400 to-pink-500 hover:scale-105 transition transform text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl"
      >
        Sign Up
      </button>
    </form>

    <p className="text-sm text-gray-600 mt-6 text-center">
      Already have an account?{" "}
      <Link to="/login" className="text-orange-500 font-semibold hover:underline">
        Login
      </Link>
    </p>
  </div>
</div>

  );
}
