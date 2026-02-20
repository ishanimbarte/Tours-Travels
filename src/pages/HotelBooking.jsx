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
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Search Hotels</h2>

      {/* Filters */}
      <div className="bg-gray-100 p-5 rounded-xl grid md:grid-cols-4 gap-4 mb-8">

        {/* Autocomplete City */}
        <div>
          <label className="font-semibold">City</label>
          <input
            type="text"
            list="cities"
            placeholder="Search city..."
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <datalist id="cities">
            {cities.map((city, index) => (
              <option key={index} value={city} />
            ))}
          </datalist>
        </div>

        {/* Check In */}
        <div>
          <label className="font-semibold">Check In</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Check Out */}
        <div>
          <label className="font-semibold">Check Out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Guests */}
        <div>
          <label className="font-semibold">Guests</label>
          <div className="flex gap-2">
            <input
              type="number"
              min="1"
              value={guests.adults}
              onChange={(e) =>
                setGuests({ ...guests, adults: e.target.value })
              }
              className="w-16 p-2 border rounded"
            />
            <input
              type="number"
              min="0"
              value={guests.children}
              onChange={(e) =>
                setGuests({ ...guests, children: e.target.value })
              }
              className="w-16 p-2 border rounded"
            />
            <input
              type="number"
              min="1"
              value={guests.rooms}
              onChange={(e) =>
                setGuests({ ...guests, rooms: e.target.value })
              }
              className="w-16 p-2 border rounded"
            />
          </div>
          <p className="text-xs text-gray-500">
            Adults / Children / Rooms
          </p>
        </div>

        {/* Price Filter */}
        <div>
          <label className="font-semibold">
            Max Price: ₹{priceRange}
          </label>
          <input
            type="range"
            min="2000"
            max="10000"
            step="500"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Star Filter */}
        <div>
          <label className="font-semibold">Star Rating</label>
          <select
            className="w-full p-2 border rounded"
            value={selectedStars}
            onChange={(e) => setSelectedStars(e.target.value)}
          >
            <option value="">All</option>
            <option value="3">3 ⭐</option>
            <option value="4">4 ⭐</option>
            <option value="5">5 ⭐</option>
          </select>
        </div>
      </div>

      {/* Nights Info */}
      <p className="mb-6 text-gray-600">
        {nights} Night(s) | {guests.adults} Adults | {guests.children} Children |{" "}
        {guests.rooms} Room(s)
      </p>

      {/* Hotel Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredHotels.map((hotel) => {
          const roomCount = roomsSelected[hotel.id] || guests.rooms;
          const totalPrice = hotel.price * nights * roomCount;

          return (
            <div
              key={hotel.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">{hotel.name}</h3>
                <p className="text-gray-500">{hotel.city}</p>

                <p className="text-yellow-500">
                  {"⭐".repeat(hotel.stars)}
                </p>

                <p className="font-bold mt-2">₹{hotel.price} / night</p>

                {/* Room Selection */}
                <div className="mt-3">
                  <label className="block text-sm">Rooms</label>
                  <input
                    type="number"
                    min="1"
                    value={roomCount}
                    onChange={(e) =>
                      handleRoomChange(hotel.id, e.target.value)
                    }
                    className="border p-2 w-20 rounded"
                  />
                </div>

                {/* Total Price */}
                <p className="mt-2 font-semibold text-blue-600">
                  Total: ₹{totalPrice}
                </p>

                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredHotels.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No hotels found for selected filters.
        </p>
      )}
    </div>
  );
}
