import React, { useState } from "react";

const hotelsData = [
  {
    id: 1,
    name: "Grand Palace Hotel",
    city: "Manali",
    price: 3500,
    stars: 4,
    image: "https://source.unsplash.com/400x250/?hotel",
  },
  {
    id: 2,
    name: "Royal Heritage",
    city: "Jaipur",
    price: 5000,
    stars: 5,
    image: "https://source.unsplash.com/400x250/?resort",
  },
  {
    id: 3,
    name: "Ocean View Resort",
    city: "Goa",
    price: 6500,
    stars: 4,
    image: "https://source.unsplash.com/400x250/?beach,resort",
  },
  {
    id: 4,
    name: "Budget Inn",
    city: "Manali",
    price: 2200,
    stars: 3,
    image: "https://source.unsplash.com/400x250/?hotel,room",
  },
];

export default function HotelBooking() {
  const [searchCity, setSearchCity] = useState("");
  const [priceRange, setPriceRange] = useState(10000);
  const [selectedStars, setSelectedStars] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const [roomsSelected, setRoomsSelected] = useState({});

  // Calculate nights
  const getNights = () => {
    if (!checkIn || !checkOut) return 1;
    const diff =
      (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 1;
  };

  const nights = getNights();

  const handleRoomChange = (id, value) => {
    setRoomsSelected({ ...roomsSelected, [id]: Number(value) });
  };

  // Filter hotels
  const filteredHotels = hotelsData.filter((hotel) => {
    return (
      hotel.city.toLowerCase().includes(searchCity.toLowerCase()) &&
      hotel.price <= priceRange &&
      (selectedStars ? hotel.stars === Number(selectedStars) : true)
    );
  });

  // Unique city list for autocomplete
  const cities = [...new Set(hotelsData.map((h) => h.city))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50 pt-28 pb-16 relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 blur-3xl rounded-full"></div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">

    {/* Heading */}
    <div className="text-center mb-12">
      <p className="uppercase tracking-[6px] text-blue-600 font-semibold text-sm">
        Luxury Stay Experience
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900 font-serif">
        Find Your Perfect Hotel 🏨
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Explore premium hotels, luxury suites, and comfortable stays
        tailored to your journey.
      </p>
    </div>

    {/* Search Filters */}
    <div className="bg-white/70 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-[32px] p-6 md:p-8 mb-10">

      <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-5">

        {/* City */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Destination
          </label>

          <div className="bg-white rounded-2xl border border-gray-200 px-4 py-3 shadow-sm hover:border-blue-400 transition">
            <input
              type="text"
              list="cities"
              placeholder="Search city..."
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-800"
            />

            <datalist id="cities">
              {cities.map((city, index) => (
                <option key={index} value={city} />
              ))}
            </datalist>
          </div>
        </div>

        {/* Check In */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Check In
          </label>

          <div className="bg-white rounded-2xl border border-gray-200 px-4 py-3 shadow-sm hover:border-blue-400 transition">
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-800"
            />
          </div>
        </div>

        {/* Check Out */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Check Out
          </label>

          <div className="bg-white rounded-2xl border border-gray-200 px-4 py-3 shadow-sm hover:border-blue-400 transition">
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-800"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Guests & Rooms
          </label>

          <div className="bg-white rounded-2xl border border-gray-200 p-3 shadow-sm">

            <div className="flex gap-2">
              <input
                type="number"
                min="1"
                value={guests.adults}
                onChange={(e) =>
                  setGuests({ ...guests, adults: e.target.value })
                }
                className="w-full border rounded-xl p-2 text-center"
              />

              <input
                type="number"
                min="0"
                value={guests.children}
                onChange={(e) =>
                  setGuests({ ...guests, children: e.target.value })
                }
                className="w-full border rounded-xl p-2 text-center"
              />

              <input
                type="number"
                min="1"
                value={guests.rooms}
                onChange={(e) =>
                  setGuests({ ...guests, rooms: e.target.value })
                }
                className="w-full border rounded-xl p-2 text-center"
              />
            </div>

            <p className="text-[11px] text-gray-500 mt-2 text-center">
              Adults / Children / Rooms
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Max Budget
          </label>

          <div className="bg-white rounded-2xl border border-gray-200 px-4 py-4 shadow-sm">
            <div className="flex justify-between text-sm mb-2">
              <span>₹2000</span>
              <span className="font-semibold text-blue-600">
                ₹{priceRange}
              </span>
            </div>

            <input
              type="range"
              min="2000"
              max="10000"
              step="500"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full accent-blue-600"
            />
          </div>
        </div>

        {/* Star Rating */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">
            Star Rating
          </label>

          <div className="bg-white rounded-2xl border border-gray-200 px-4 py-3 shadow-sm hover:border-blue-400 transition">
            <select
              className="w-full bg-transparent outline-none text-gray-700"
              value={selectedStars}
              onChange={(e) => setSelectedStars(e.target.value)}
            >
              <option value="">All Ratings</option>
              <option value="3">3 ⭐</option>
              <option value="4">4 ⭐</option>
              <option value="5">5 ⭐</option>
            </select>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-5 text-white flex flex-wrap gap-4 justify-between items-center">

        <div>
          <p className="text-sm opacity-80">
            Stay Summary
          </p>

          <h3 className="text-lg font-semibold">
            {nights} Night(s) • {guests.adults} Adults •{" "}
            {guests.children} Children • {guests.rooms} Room(s)
          </h3>
        </div>

        <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Search Hotels
        </button>
      </div>
    </div>

    {/* Hotel Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {filteredHotels.map((hotel) => {
        const roomCount = roomsSelected[hotel.id] || guests.rooms;
        const totalPrice = hotel.price * nights * roomCount;

        return (
          <div
            key={hotel.id}
            className="group bg-white/80 backdrop-blur-xl border border-white/50 rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500"
          >

            {/* Image */}
            <div className="relative overflow-hidden">

              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full shadow text-sm font-semibold text-blue-700">
                {hotel.stars} ⭐ Luxury
              </div>

              <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg">
                ₹{hotel.price}/night
              </div>
            </div>

            {/* Content */}
            <div className="p-6">

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-serif">
                    {hotel.name}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    📍 {hotel.city}
                  </p>
                </div>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap gap-2 mt-5">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  Free WiFi
                </span>

                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                  Pool
                </span>

                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  Breakfast
                </span>
              </div>

              {/* Rooms */}
              <div className="mt-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Rooms
                </label>

                <input
                  type="number"
                  min="1"
                  value={roomCount}
                  onChange={(e) =>
                    handleRoomChange(hotel.id, e.target.value)
                  }
                  className="border border-gray-300 rounded-xl p-3 w-24 outline-none focus:border-blue-500"
                />
              </div>

              {/* Price */}
              <div className="mt-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4">

                <p className="text-sm text-gray-500">
                  Total Price
                </p>

                <h4 className="text-3xl font-bold text-blue-700 mt-1">
                  ₹{totalPrice}
                </h4>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">

                <button className="flex-1 border border-blue-600 text-blue-700 py-3 rounded-2xl font-semibold hover:bg-blue-50 transition">
                  View Details
                </button>

                <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* Empty State */}
    {filteredHotels.length === 0 && (
      <div className="text-center mt-16 bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl py-14 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800">
          No Hotels Found 😔
        </h3>

        <p className="text-gray-500 mt-3">
          Try changing filters or selecting another destination.
        </p>
      </div>
    )}
  </div>
</div>
  );
}
