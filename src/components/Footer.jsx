import React from "react";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071120] text-white">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

  {/* Top Border */}
  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

  <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">

    {/* Main Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Logo + About */}
      <div>
        <h2 className="font-serif text-4xl font-light tracking-wide">
          Alshifa Travels
        </h2>

        <div className="w-16 h-[2px] bg-orange-400 mt-4 mb-6"></div>

        <p className="text-white/70 leading-relaxed text-sm">
          We create unforgettable luxury travel experiences with personalized
          itineraries, premium destinations, and seamless journeys designed
          for modern explorers.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-8">

          <a
            href="#"
            className="w-11 h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-500 hover:-translate-y-1"
          >
            <Facebook size={18} />
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-500 hover:-translate-y-1"
          >
            <Instagram size={18} />
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-500 hover:-translate-y-1"
          >
            <Twitter size={18} />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-6">
          Quick Links
        </h3>

        <ul className="space-y-4 text-white/70">

          <li>
            <Link
              to="/"
              className="hover:text-white transition flex items-center gap-2 group"
            >
              <span className="w-0 group-hover:w-4 h-[1px] bg-orange-400 transition-all duration-300"></span>
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/packages"
              className="hover:text-white transition flex items-center gap-2 group"
            >
              <span className="w-0 group-hover:w-4 h-[1px] bg-orange-400 transition-all duration-300"></span>
              Packages
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-white transition flex items-center gap-2 group"
            >
              <span className="w-0 group-hover:w-4 h-[1px] bg-orange-400 transition-all duration-300"></span>
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-white transition flex items-center gap-2 group"
            >
              <span className="w-0 group-hover:w-4 h-[1px] bg-orange-400 transition-all duration-300"></span>
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/login"
              className="hover:text-white transition flex items-center gap-2 group"
            >
              <span className="w-0 group-hover:w-4 h-[1px] bg-orange-400 transition-all duration-300"></span>
              Login
            </Link>
          </li>

        </ul>
      </div>

      {/* Popular Packages */}
      <div>
        <h3 className="text-xl font-semibold mb-6">
          Popular Packages
        </h3>

        <ul className="space-y-4 text-white/70">

          {[
            "Goa Tour",
            "Kashmir Trip",
            "Dubai Tour",
            "Bali Package",
            "Manali Trip",
          ].map((item, i) => (
            <li key={i}>
              <Link
                to="/packages"
                className="hover:text-white transition flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-4 h-[1px] bg-orange-400 transition-all duration-300"></span>
                {item}
              </Link>
            </li>
          ))}

        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-xl font-semibold mb-6">
          Contact Us
        </h3>

        <div className="space-y-5 text-white/70 text-sm">

          <p className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <Phone size={16} />
            </span>

            +91 99999 99999
          </p>

          <p className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <Mail size={16} />
            </span>

            info@alshifatravel.com
          </p>

          <p className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <MapPin size={16} />
            </span>

            Nagpur, Maharashtra, India
          </p>
        </div>

        {/* Newsletter */}
        <div className="mt-8">

          <p className="text-sm uppercase tracking-[0.2em] text-white/50 mb-4">
            Subscribe Newsletter
          </p>

          <div className="flex overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md">

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none"
            />

            <button className="px-6 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition">
              Send
            </button>

          </div>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">

      <p>
        © {new Date().getFullYear()} TravelWorld. All Rights Reserved.
      </p>

      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-white transition">
          Privacy Policy
        </a>

        <a href="#" className="hover:text-white transition">
          Terms & Conditions
        </a>
      </div>
    </div>
  </div>
</footer>
  );
}