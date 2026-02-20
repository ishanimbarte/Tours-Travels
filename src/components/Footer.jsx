import React from "react";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">TravelWorld</h2>
          <p className="text-white/80 text-sm">
            We create unforgettable travel experiences with the best prices,
            customized packages, and 24/7 customer support.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-5">
            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-orange-500 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-orange-500 transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-orange-500 transition">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* ✅ Quick Links + Packages Wrapper (Same Row on Mobile) */}
        <div className="grid grid-cols-2 gap-6 sm:col-span-2 lg:col-span-2">

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
              <li><Link to="/packages" className="hover:text-orange-400">Packages</Link></li>
              <li><Link to="/about" className="hover:text-orange-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
              <li><Link to="/login" className="hover:text-orange-400">Login</Link></li>
            </ul>
          </div>

          {/* Popular Packages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Packages</h3>
            <ul className="space-y-2 text-white/80">
              <li><Link to="/packages" className="hover:text-orange-400">Goa Tour</Link></li>
              <li><Link to="/packages" className="hover:text-orange-400">Kashmir Trip</Link></li>
              <li><Link to="/packages" className="hover:text-orange-400">Dubai Tour</Link></li>
              <li><Link to="/packages" className="hover:text-orange-400">Bali Package</Link></li>
              <li><Link to="/packages" className="hover:text-orange-400">Manali Trip</Link></li>
            </ul>
          </div>

        </div>

        {/* Contact + Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

          <div className="space-y-3 text-white/80 text-sm">
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 99999 99999
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> info@travelworld.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Nashik, Maharashtra, India
            </p>
          </div>

          {/* Newsletter */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Subscribe Newsletter</h4>

            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="px-3 py-2 w-full rounded-l-lg text-black outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-4 rounded-r-lg font-semibold">
                Send
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 text-center py-5 text-sm text-white/70">
        © {new Date().getFullYear()} TravelWorld. All Rights Reserved.
      </div>

    </footer>
  );
}