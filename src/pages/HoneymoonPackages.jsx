import React from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/package/maldive.jpg";
import img2 from "../assets/package/bali.jpg";
import img3 from "../assets/package/manali.jpg";

const honeymoonPackages = [
  {
    id: 1,
    title: "Maldives Romantic Escape",
    location: "Maldives",
    duration: "4 Nights / 5 Days",
    price: "₹79,999",
    image:
      img1,
  },
  {
    id: 2,
    title: "Bali Honeymoon Special",
    location: "Bali, Indonesia",
    duration: "5 Nights / 6 Days",
    price: "₹59,999",
    image:
      img2,
  },
  {
    id: 3,
    title: "Manali Couple Retreat",
    location: "Manali, India",
    duration: "4 Nights / 5 Days",
    price: "₹24,999",
    image:
      img3,
  },
];

export default function HoneymoonPackages() {
  return (
    <div className="bg-[#fff7fb] min-h-screen pt-0 pb-24 overflow-hidden">

  {/* ================= HERO SECTION ================= */}
  <section className="relative max-w-7xl mx-auto px-6">

    <div className="relative rounded-[40px] overflow-hidden h-[420px] md:h-[520px]">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Honeymoon"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>

      {/* Decorative Blur */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-pink-400/30 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-8 md:px-16">

        <div className="max-w-3xl text-white">

          <p className="uppercase tracking-[0.35em] text-pink-200 text-xs sm:text-sm mb-5">
            Romantic Escapes
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight">
            Honeymoon
            <span className="block italic text-pink-300">
              Packages
            </span>
          </h1>

          <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-2xl">
            Celebrate your love with our specially curated romantic honeymoon
            experiences across dreamy beaches, mountains, islands, and luxury
            destinations.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <button className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-full text-white font-medium shadow-2xl transition duration-300">
              Explore Packages
            </button>

            <button className="border border-white/30 backdrop-blur-xl bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full text-white transition duration-300">
              View Destinations
            </button>

          </div>

        </div>
      </div>
    </div>
  </section>

  {/* ================= SECTION TITLE ================= */}
  <section className="max-w-7xl mx-auto px-6 mt-20 mb-14 text-center">

    <p className="uppercase tracking-[0.35em] text-pink-500 text-sm mb-4">
      Romantic Tours
    </p>

    <h2 className="font-serif text-4xl md:text-6xl font-light text-gray-900">
      Choose Your Dream
      <span className="italic text-pink-500"> Honeymoon</span>
    </h2>

  </section>

  {/* ================= PACKAGES GRID ================= */}
  <section className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {honeymoonPackages.map((pkg, index) => (
        <div
          key={pkg.id}
          className="group relative bg-white rounded-[34px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:-translate-y-4 hover:shadow-[0_25px_70px_rgba(236,72,153,0.18)] transition duration-500"
        >

          {/* Image */}
          <div className="relative overflow-hidden">

            <img
              src={pkg.image}
              alt={pkg.title}
              className="h-[320px] w-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            {/* Price Badge */}
            <div className="absolute top-5 left-5 bg-white/15 backdrop-blur-xl border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg">
              {pkg.price}
            </div>

            {/* Floating Heart */}
            <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white text-xl">
              ♡
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

              <p className="uppercase tracking-[0.25em] text-xs text-pink-200 mb-2">
                Romantic Destination
              </p>

              <h3 className="font-serif text-3xl font-light">
                {pkg.title}
              </h3>

              <div className="flex items-center justify-between mt-4 text-sm text-white/80">

                <p>{pkg.location}</p>

                <p>{pkg.duration}</p>

              </div>

            </div>

          </div>

          {/* Bottom */}
          <div className="p-6">

            {/* Rating */}
            <div className="flex items-center gap-1 mb-5 text-yellow-400">
              ★ ★ ★ ★ ★
            </div>

            {/* Button */}
            <Link to={`/honeymoon/${pkg.id}`}>
              <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-4 rounded-full font-medium tracking-wide shadow-lg transition duration-300">
                View Romantic Package
              </button>
            </Link>

          </div>

        </div>
      ))}

    </div>
  </section>

  {/* ================= BOTTOM CTA ================= */}
  <section className="max-w-6xl mx-auto px-6 mt-24">

    <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-10 py-16 text-center text-white">

      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 blur-[120px] rounded-full"></div>

      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        <p className="uppercase tracking-[0.35em] text-pink-100 text-sm mb-5">
          Begin Your Love Story
        </p>

        <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight">
          Your Perfect
          <span className="italic"> Honeymoon </span>
          Awaits
        </h2>

        <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">
          Let us create unforgettable memories with personalized romantic
          experiences designed just for you and your partner.
        </p>

        <button className="mt-10 bg-white text-pink-600 hover:bg-pink-50 px-10 py-4 rounded-full font-semibold shadow-2xl transition duration-300">
          Plan Your Honeymoon
        </button>

      </div>

    </div>

  </section>
</div>
  );
}
