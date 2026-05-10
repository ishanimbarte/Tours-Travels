import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      const response = await login({ email, password });
      console.log("Login successful:", response);

      if (response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("userRole", response.role);
      }
      
      // Redirect to home page
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      console.error("Error response:", err.response);
      console.error("Error data:", err.response?.data);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
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
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}
      
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
