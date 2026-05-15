// src/pages/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Store user data locally
    const userData = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    console.log("Signup successful:", userData);

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-orange-50 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden">
        
        {/* Decorative Background */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-200 rounded-full opacity-30 pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-pink-200 rounded-full opacity-30 pointer-events-none"></div>

        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8 tracking-wide">
          Sign Up
        </h2>

        <form className="space-y-6" onSubmit={handleSignup}>
          
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm transition duration-300 hover:shadow-md"
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm transition duration-300 hover:shadow-md"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm transition duration-300 hover:shadow-md"
              required
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
          <Link
            to="/login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}