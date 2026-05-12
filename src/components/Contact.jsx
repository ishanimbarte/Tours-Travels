import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const phoneNumber = "919999999999"; // change to your number

  const openWhatsApp = () => {
    const message = "Hello, I want to enquire about tour packages.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  const agency = {
    contactPerson: "Ms. Isha Nimbarte",
    corporateOffice:
      "123, Travel Plaza, 2nd Floor, MG Road, Nashik, Maharashtra, India",
    mobile: "+91 98765 43210",
    email: "info@youragency.com",
    altEmail: "support@youragency.com",
    callUs: "+91 90000 11111",
    branchOffice: "Mumbai | Pune | Delhi",
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-orange-50 overflow-hidden">

  {/* ================= HERO ================= */}
  <section className="relative h-[520px] overflow-hidden">

  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    alt="Travel Contact"
    className="w-full h-full object-cover scale-110"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />

  {/* Decorative Blur Circle */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>

  {/* Hero Content */}
  <div className="absolute inset-0 pt-36 flex flex-col items-center justify-center text-center px-6 z-10">

    {/* Small Tag */}
    <div className="mb-6">
      <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-orange-300 text-sm tracking-[4px] uppercase">
        Travel With Confidence
      </span>
    </div>

    {/* Main Heading */}
    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
      Contact <span className="text-orange-400">Us</span>
    </h1>

    {/* Subtitle */}
    <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
      Let’s create unforgettable journeys together.
      Our travel experts are here to guide you with the best
      tours, hotels, visas, and travel experiences ✈️
    </p>


    {/* Stats */}
    <div className="grid grid-cols-3 gap-6 mt-14 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-5 mb-10">

      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-orange-400">
          10K+
        </h3>
        <p className="text-sm text-white/70 mt-1">
          Happy Travelers
        </p>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-orange-400">
          500+
        </h3>
        <p className="text-sm text-white/70 mt-1">
          Tour Packages
        </p>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-orange-400">
          24/7
        </h3>
        <p className="text-sm text-white/70 mt-1">
          Support
        </p>
      </div>

    </div>

  </div>
</section>

  {/* ================= CONTACT INFO ================= */}
  <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">

    <div className="text-center mb-14">

      <p className="text-orange-500 uppercase tracking-[4px] font-semibold text-sm">
        Get In Touch
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mt-3">
        We’re Always Here To Help
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          icon: <Phone size={34} />,
          title: "Call Us",
          info: "+91 99999 99999",
          color: "from-orange-500 to-pink-500",
        },
        {
          icon: <Mail size={34} />,
          title: "Email Address",
          info: "info@travelgo.com",
          color: "from-blue-500 to-indigo-500",
        },
        {
          icon: <MapPin size={34} />,
          title: "Office Address",
          info: "Nashik, Maharashtra, India",
          color: "from-green-500 to-emerald-500",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          whileHover={{ y: -8 }}
          className="group bg-white/70 backdrop-blur-xl border border-white/40 rounded-[30px] shadow-xl p-8 text-center hover:shadow-2xl transition duration-300 relative overflow-hidden"
        >

          {/* Background Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition duration-500`}></div>

          <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg mb-6`}>
            {item.icon}
          </div>

          <h3 className="font-bold text-2xl text-gray-900 mb-3">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {item.info}
          </p>

        </motion.div>
      ))}

    </div>
  </section>

  {/* ================= FORM + MAP ================= */}
  <section className="py-24 relative">

    {/* Blur */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/40 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/40 blur-3xl rounded-full"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">

      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/75 backdrop-blur-2xl rounded-[35px] shadow-2xl p-10 border border-white/50 relative overflow-hidden"
        >

          {/* Decorative */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-300/30 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            <p className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold mb-3">
              Contact Form
            </p>

            <h2 className="text-4xl font-bold text-gray-900 font-serif">
              Get In Touch ✨
            </h2>

            <p className="text-gray-600 mt-3 mb-8 leading-relaxed">
              Tell us your dream destination and we’ll help you plan
              the perfect vacation experience.
            </p>

            <form className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
                />

                <input
                  type="text"
                  placeholder="Destination"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
                />

              </div>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm resize-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 hover:scale-[1.02] transition-all duration-300 text-white py-4 rounded-2xl font-semibold shadow-xl text-lg"
              >
                Send Enquiry 🚀
              </button>

            </form>

          </div>
        </motion.div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-[35px] overflow-hidden shadow-2xl min-h-[650px] border border-white/30"
        >

          <iframe
            title="map"
            src="https://www.google.com/maps?q=Nashik%20Maharashtra&output=embed"
            className="w-full h-full absolute inset-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          {/* Overlay Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/85 backdrop-blur-xl rounded-3xl p-6 shadow-xl">

            <h3 className="text-2xl font-bold text-gray-900 font-serif">
              Visit Our Office
            </h3>

            <p className="text-gray-600 mt-2">
              Nashik, Maharashtra, India
            </p>

            <div className="flex gap-3 mt-5">

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-medium transition">
                Get Directions
              </button>

              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-3 rounded-xl font-medium transition">
                Contact Now
              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </div>

  </section>

  {/* ================= AGENCY DETAILS ================= */}
  <section className="py-20 px-4">

    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-14">

        <p className="uppercase tracking-[4px] text-orange-500 font-semibold text-sm">
          Company Information
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mt-3">
          Agency Details
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Reach out to us anytime for bookings, customised packages,
          and travel consultation.
        </p>

      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[35px] overflow-hidden">

        <table className="w-full">

          <tbody>

            <TableRow label="Contact Person" value={agency.contactPerson} />
            <TableRow label="Corporate Office" value={agency.corporateOffice} />
            <TableRow label="Mobile Number" value={agency.mobile} />
            <TableRow label="Email Address" value={agency.email} />
            <TableRow label="Alternate Email" value={agency.altEmail} />
            <TableRow label="Call Us" value={agency.callUs} />
            <TableRow label="Branch Office" value={agency.branchOffice} />

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-5">

        {Object.entries({
          "Contact Person": agency.contactPerson,
          "Corporate Office": agency.corporateOffice,
          "Mobile Number": agency.mobile,
          "Email Address": agency.email,
          "Alternate Email": agency.altEmail,
          "Call Us": agency.callUs,
          "Branch Office": agency.branchOffice,
        }).map(([key, value], index) => (

          <div
            key={index}
            className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg rounded-3xl p-5"
          >

            <p className="text-sm text-orange-500 font-semibold">
              {key}
            </p>

            <p className="font-semibold text-gray-800 mt-2 leading-relaxed">
              {value}
            </p>

          </div>

        ))}

      </div>

    </div>

  </section>

</div>
  )
};

/* TABLE ROW */
function TableRow({ label, value }) {
  return (
    <tr className="border-b border-gray-100 last:border-none hover:bg-orange-50/40 transition">

      <td className="p-6 font-semibold text-gray-700 w-1/3 bg-gradient-to-r from-orange-50 to-orange-100">
        {label}
      </td>

      <td className="p-6 text-gray-800 font-medium">
        {value}
      </td>

    </tr>
  );
}