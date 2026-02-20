import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Data:", { email, password });
    // Add your login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-orange-50 px-4">
  <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden">
    {/* Decorative Background */}
    <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-200 rounded-full opacity-30 pointer-events-none"></div>
    <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-pink-200 rounded-full opacity-30 pointer-events-none"></div>

    <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8 tracking-wide">
      Login to TravelGo
    </h2>

    <form className="space-y-6" onSubmit={handleLogin}>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm transition duration-300 hover:shadow-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm transition duration-300 hover:shadow-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-orange-400 to-pink-500 hover:scale-105 transition transform text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl"
      >
        Login
      </button>
    </form>

    <p className="text-sm text-gray-600 mt-6 text-center">
      Don’t have an account?{" "}
      <Link to="/signup" className="text-orange-500 font-semibold hover:underline">
        Sign Up
      </Link>
    </p>
  </div>
</div>

  );
}
