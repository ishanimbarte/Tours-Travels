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
    <div className="pt-20">

      {/* HERO */}
      <div className="relative h-[350px]">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-3 text-white/90">
            We would love to help you plan your perfect trip
          </p>
        </div>
      </div>

      {/* CONTACT INFO */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">

        {[
          {
            icon: <Phone size={30} />,
            title: "Call Us",
            info: "+91 99999 99999",
          },
          {
            icon: <Mail size={30} />,
            title: "Email",
            info: "info@travelgo.com",
          },
          {
            icon: <MapPin size={30} />,
            title: "Address",
            info: "Nashik, Maharashtra, India",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
          >
            <div className="text-orange-500 flex justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.info}</p>
          </motion.div>
        ))}
      </section>

      {/* FORM + MAP */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">

  <div className="max-w-6xl mx-auto px-6">

    {/* GRID ROW */}
    <div className="grid lg:grid-cols-2 gap-10 items-start">

      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/40"
      >
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Get In Touch ✈️
        </h2>

        <p className="text-gray-600 text-sm text-center mt-2 mb-6">
          Plan your perfect trip with our travel experts
        </p>

        {/* Form */}
        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="text"
            placeholder="Destination"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <textarea
            rows="3"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-105 transition transform text-white py-3 rounded-xl font-semibold shadow-lg"
          >
            Send Enquiry 🚀
          </button>

        </form>
      </motion.div>


      {/* MAP */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="rounded-3xl overflow-hidden shadow-xl h-full"
      >
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Nashik%20Maharashtra&output=embed"
          className="w-full h-full min-h-[500px] border-0 block"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>

    </div>

  </div>

</section>
<section className="bg-gray-50 py-14 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Agency Details
          </h2>
          <p className="text-gray-600 mt-2">
            Get in touch with us for bookings and enquiries
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white shadow-lg rounded-2xl overflow-hidden">
          <table className="w-full">
            <tbody>
              <TableRow label="Contact Person" value={agency.contactPerson} />
              <TableRow label="Corporate Office" value={agency.corporateOffice} />
              <TableRow label="Mobile" value={agency.mobile} />
              <TableRow label="Email Address" value={agency.email} />
              <TableRow label="Alternate Email ID" value={agency.altEmail} />
              <TableRow label="Call Us" value={agency.callUs} />
              <TableRow label="Branch Office" value={agency.branchOffice} />
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {Object.entries({
            "Contact Person": agency.contactPerson,
            "Corporate Office": agency.corporateOffice,
            Mobile: agency.mobile,
            "Email Address": agency.email,
            "Alternate Email ID": agency.altEmail,
            "Call Us": agency.callUs,
            "Branch Office": agency.branchOffice,
          }).map(([key, value], index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 border"
            >
              <p className="text-sm text-gray-500">{key}</p>
              <p className="font-semibold text-gray-800">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>



    </div>
    
    
  );
}

function TableRow({ label, value }) {
  return (
    <tr className="border-b last:border-none">
      <td className="p-4 font-semibold text-gray-700 w-1/3 bg-gray-100">
        {label}
      </td>
      <td className="p-4 text-gray-800">{value}</td>
    </tr>
  );
}
