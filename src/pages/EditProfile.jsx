import React, { useState } from "react";
import { Camera } from "lucide-react";

export default function EditProfile() {
  const [form, setForm] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    password: "",
    photo: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    if (e.target.files[0]) {
      setForm({ ...form, photo: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully ✅");
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 bg-gradient-to-br from-blue-100 via-white to-orange-100 flex items-center justify-center">
      
      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-10 border border-white/40">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Profile Photo */}
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                {form.photo ? (
                  <img
                    src={form.photo}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    Photo
                  </div>
                )}
              </div>

              {/* Overlay */}
              <label className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-blue-700 transition">
                <Camera size={18} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhoto}
                  className="hidden"
                />
              </label>
            </div>

            <p className="text-sm text-gray-500 mt-3">
              Click camera icon to change photo
            </p>
          </div>

          {/* Inputs Grid */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-gray-600">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600">New Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter new password"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>

          </div>

          {/* Buttons */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}