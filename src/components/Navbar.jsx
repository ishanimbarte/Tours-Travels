import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false); // ✅ profile state

  const timeoutRef = useRef(null);
  const profileRef = useRef(null); // ✅ ref for outside click

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEnter = (menu) => {
    clearTimeout(timeoutRef.current);
    setDropdown(menu);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdown(null);
    }, 150);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setMobileDropdown(false);
    setMobileServices(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md py-3"
            : "bg-white backdrop-blur-md py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`text-2xl font-bold ${
              scrolled ? "text-black" : "text-blue-600"
            }`}
          >
            Travel<span className="text-orange-500">Go</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 font-medium">

            <Link to="/virtual-tour" className="hover:text-blue-600">
              Virtual Tour
            </Link>

            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>

            {/* Packages */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter("packages")}
              onMouseLeave={handleLeave}
            >
              <button className="flex items-center gap-1 hover:text-blue-600">
                Packages <ChevronDown size={18} />
              </button>

              <div className="absolute top-full left-0 w-full h-4"></div>

              {dropdown === "packages" && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-2xl p-6 w-[520px] grid grid-cols-2 gap-4 z-50">
                  <Link to="/domestic-tours">Domestic Tours</Link>
                  <Link to="/international-tours">International Tours</Link>
                  <Link to="/honeymoon">Honeymoon Packages</Link>
                  <Link to="/family-tours">Family Tours</Link>
                  <Link to="/adventure-tours">Adventure Trips</Link>
                  <Link to="/religious-tours">Religious Tours</Link>
                </div>
              )}
            </div>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter("services")}
              onMouseLeave={handleLeave}
            >
              <button className="flex items-center gap-1 hover:text-blue-600">
                Services <ChevronDown size={18} />
              </button>

              {dropdown === "services" && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-2xl p-6 w-[200px] flex flex-col space-y-3 z-50">
                  <Link to="/flight-booking">Flight Booking</Link>
                  <Link to="/hotel-booking">Hotel Booking</Link>
                  <Link to="/visa-services">Visa Services</Link>
                </div>
              )}
            </div>

            <Link to="/contact">Contact</Link>
          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">

            <Link
              to="/login"
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Sign Up
            </Link>

            {/* ✅ Profile Dropdown */}
<div className="relative" ref={profileRef}>
  <button
    onClick={() => setProfileOpen(!profileOpen)}
    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
  >
    <User size={20} />
  </button>

  {profileOpen && (
    <div className="absolute right-0 mt-3 w-44 bg-white shadow-xl rounded-xl overflow-hidden border z-50">

      {/* Edit Profile */}
      <Link
        to="/edit-profile"
        className="block px-4 py-3 hover:bg-gray-100 text-sm"
        onClick={() => setProfileOpen(false)}
      >
        Edit Profile
      </Link>

      {/* Logout */}
      <button
        className="w-full text-left px-4 py-3 hover:bg-gray-100 text-sm"
        onClick={() => {
          setProfileOpen(false);
          alert("Logged out");
        }}
      >
        Logout
      </button>

    </div>
  )}
</div>

          </div>

          {/* Hamburger */}
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center z-50"
            >
              <div className="flex flex-col justify-between w-6 h-5">
                <span className={`block h-0.5 w-full rounded ${scrolled ? "bg-white" : "bg-black"}`} />
                <span className={`block h-0.5 w-full rounded ${scrolled ? "bg-white" : "bg-black"}`} />
                <span className={`block h-0.5 w-full rounded ${scrolled ? "bg-white" : "bg-black"}`} />
              </div>
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-5 border-b">
            <h2 className="text-xl font-bold">
              Travel<span className="text-orange-500">Go</span>
            </h2>
            <button onClick={closeMenu}>✕</button>
          </div>

          <div className="flex flex-col p-6 space-y-5 font-medium">
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </div>
        </div>
      </nav>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[999] bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        💬
      </a>
    </>
  );
}