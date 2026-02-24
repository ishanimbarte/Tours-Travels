import React, { useState, useRef, useEffect } from "react";
import { Plane, Train, Bus } from "lucide-react";

import img1 from "../assets/airlines/indigo.jpg";
import img2 from "../assets/airlines/Air-India.jpg";
import img3 from "../assets/airlines/Spicejet.jpg";
import img4 from "../assets/airlines/Vistara.jpg";
import img5 from "../assets/airlines/Akasa-Air.jpg";

const locations = [
  {
    code: "BOM",
    city: "Mumbai, Maharashtra, India",
    airport: "Chhatrapati Shivaji International Airport",
  },
  {
    code: "HYD",
    city: "Hyderabad, Telangana, India",
    airport: "Rajiv Gandhi International Airport",
  },
  {
    code: "BLR",
    city: "Bengaluru, Karnataka, India",
    airport: "Kempegowda International Airport",
  },
  {
    code: "MAA",
    city: "Chennai, Tamil Nadu, India",
    airport: "Chennai International Airport",
  },
  {
    code: "GOI",
    city: "Goa, India",
    airport: "Dabolim Airport",
  },
];

const busCities = [
  "Mumbai",
  "Pune",
  "Hyderabad",
  "Bangalore",
  "Chennai",
  "Goa",
  "Nagpur",
  "Delhi",
];

const busClasses = [
  "AC Sleeper",
  "Non AC Sleeper",
  "AC Seater",
  "Non AC Seater",
  "Volvo Multi Axle",
];

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("oneway");

  return (
    <div className="min-h-screen flex justify-center pt-24 pb-10 px-4 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl shadow-2xl w-full max-w-7xl p-6 relative">

        {/* Tabs */}
        <div className="flex items-center gap-8 mb-6">
          <Tab icon={<Plane size={22} />} label="Flights" active={activeTab === "flights"} onClick={() => setActiveTab("flights")} />
          <Tab icon={<Train size={22} />} label="Trains" active={activeTab === "trains"} onClick={() => setActiveTab("trains")} />
          <Tab icon={<Bus size={22} />} label="Buses" active={activeTab === "buses"} onClick={() => setActiveTab("buses")} />
        </div>

        {/* Trip Type */}
        {activeTab === "flights" && (
          <div className="flex gap-3 mb-4">
            {["oneway", "round"].map((type) => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                className={`px-4 py-2 rounded-full border ${
                  tripType === type
                    ? "border-blue-500 text-blue-600 bg-blue-50"
                    : "text-gray-500"
                }`}
              >
                {type === "oneway" ? "One Way" : "Round Trip"}
              </button>
            ))}
          </div>
        )}

        {activeTab === "flights" && (
  <>
    <FlightForm tripType={tripType} />
    <PopularAirlines />
    <FAQSection />
  </>
)}
        {activeTab === "trains" && (
  <>
    <TrainForm />
    <TrainFAQSection />
  </>
)}
        {activeTab === "buses" && (
  <>
    <BusForm />
    <BusFAQSection />
  </>
)}
      </div>
    </div>
  );
}

/* Tabs */
function Tab({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 pb-2 border-b-2 transition ${
        active ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

/* Flight Form */
function FlightForm({ tripType }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [activeField, setActiveField] = useState(null);
  const [fareType, setFareType] = useState("Regular");

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setActiveField(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  const filterLocations = (value) =>
    locations.filter(
      (item) =>
        item.city.toLowerCase().includes(value.toLowerCase()) ||
        item.code.toLowerCase().includes(value.toLowerCase())
    );

  return (
    <>
      <div
        ref={wrapperRef}
        className="grid grid-cols-1 md:grid-cols-12 backdrop-blur-lg bg-white/40 border border-white/30 rounded-2xl shadow-lg overflow-visible relative items-stretch z-10"
      >
        {/* FROM */}
        <LocationInput label="From" value={from} setValue={setFrom} field="from" activeField={activeField} setActiveField={setActiveField} filterLocations={filterLocations} />

        {/* SWAP */}
        <div className="flex items-center justify-center md:col-span-1">
          <button
            type="button"
            onClick={swapLocations}
            className="bg-white shadow p-2 rounded-full hover:scale-110 transition"
          >
            ⇄
          </button>
        </div>

        {/* TO */}
        <LocationInput label="To" value={to} setValue={setTo} field="to" activeField={activeField} setActiveField={setActiveField} filterLocations={filterLocations} />

        <InputBox label="Departure" type="date" />
        <InputBox label="Return" type="date" disabled={tripType === "oneway"} />

        <TravellerSelector />

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg flex items-center justify-center h-full px-6 md:col-span-1 rounded-xl md:rounded-r-2xl">
          Search →
        </button>

        {/* Fare Type */}
        {/* Fare Type */}
<div className="p-3 md:p-4 md:col-span-2 border-r">
  <p className="text-xs text-gray-600 mb-1">Fare Type</p>

  <div className="flex gap-2">
    {[
      { name: "Regular", badge: "Regular" },
      { name: "Student", badge: "Discount" },
      { name: "Senior", badge: "₹600 off" },
      { name: "Armed", badge: "Special" },
    ].map((item) => (
      <button
        key={item.name}
        type="button"
        onClick={() => setFareType(item.name)}
        className={`flex-1 px-2 py-2 rounded-lg border text-left transition ${
          fareType === item.name
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
        }`}
      >
        <p className="text-xs font-semibold">{item.name}</p>
        <p
          className={`text-[10px] ${
            fareType === item.name ? "text-blue-100" : "text-green-600"
          }`}
        >
          {item.badge}
        </p>
      </button>
    ))}
  </div>
</div>

       
      </div>

      <BottomInfo />
    </>
  );
}

/* Location Input */
function LocationInput({ label, value, setValue, field, activeField, setActiveField, filterLocations }) {
  return (
    <div className="p-3 md:p-4 relative md:col-span-2 border-r">
      <p className="text-xs text-gray-600 mb-1">{label}</p>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setActiveField(field)}
        placeholder={label}
        className="w-full outline-none font-medium bg-transparent text-gray-900"
      />

      {activeField === field && (
        <Dropdown
          data={filterLocations(value)}
          onSelect={(item) => {
            setValue(item.city);
            setActiveField(null);
          }}
        />
      )}
    </div>
  );
}

/* Traveller Selector */
function TravellerSelector() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelClass, setTravelClass] = useState("Economy");

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const total = adults + children + infants;
  const summary = `${total} Traveller${total > 1 ? "s" : ""}, ${travelClass}`;

  const Counter = ({ label, desc, value, setValue, min = 0 }) => (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => value > min && setValue(value - 1)} className="w-8 h-8 border rounded-full">−</button>
        <span>{value}</span>
        <button onClick={() => setValue(value + 1)} className="w-8 h-8 border rounded-full">+</button>
      </div>
    </div>
  );

  return (
    <div ref={wrapperRef} className="relative md:col-span-2 border-r">
      <div onClick={() => setOpen(!open)} className="p-3 md:p-4 cursor-pointer">
        <p className="text-xs text-gray-600 mb-1">Travellers & Class</p>
        <p className="font-medium text-gray-900">{summary}</p>
      </div>

      {open && (
        <div className="absolute z-[999] mt-2 w-[340px] bg-white rounded-2xl shadow-xl border p-4">
          <p className="font-semibold mb-2">Travellers</p>

          <Counter label="Adults" desc="12+ years" value={adults} setValue={setAdults} min={1} />
          <Counter label="Children" desc="2-11 years" value={children} setValue={setChildren} />
          <Counter label="Infants" desc="0-2 years" value={infants} setValue={setInfants} />

          <div className="mt-4">
            <p className="font-semibold mb-2">Class</p>
            {["Economy", "Premium Economy", "Business", "First Class"].map((cls) => (
              <label key={cls} className="flex items-center gap-2 py-1">
                <input
                  type="radio"
                  checked={travelClass === cls}
                  onChange={() => setTravelClass(cls)}
                />
                {cls}
              </label>
            ))}
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* Dropdown */
function Dropdown({ data, onSelect }) {
  return (
    <div className="absolute z-[999] bg-white shadow-xl rounded-xl mt-2 w-[420px] max-h-72 overflow-y-auto border">
      {data.map((item, i) => (
        <div
          key={i}
          onClick={() => onSelect(item)}
          className="flex gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b"
        >
          <div className="border rounded-lg px-2 py-1 text-sm">{item.code}</div>
          <div>
            <p className="text-sm font-medium">{item.city}</p>
            <p className="text-xs text-gray-500">{item.airport}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* Input */
function InputBox({ label, type = "text", placeholder, disabled }) {
  return (
    <div className="p-3 md:p-4 border-r md:col-span-2">
      <p className="text-xs text-gray-600 mb-1">{label}</p>
      <input
        type={type}
        placeholder={placeholder || label}
        disabled={disabled}
        className="w-full outline-none font-medium text-gray-900 bg-transparent"
      />
    </div>
  );
}

/* Bottom Info */
function BottomInfo() {
  return (
    <div className="bg-white/50 backdrop-blur rounded-xl mt-4 p-4 flex flex-wrap items-center gap-4 text-gray-700 text-sm">
      <input type="checkbox" />
      <span className="font-medium">Free Cancellation Available</span>
      <span>• ₹0 cancellation fee</span>
      <span>• Instant refunds</span>
      <span>• Priority support</span>
    </div>
  );
}

/* Popular Airlines */
/* Popular Airlines */
function PopularAirlines() {
  const airlines = [
    {
      name: "IndiGo",
      logo: img1,
    },
    {
      name: "Air India",
      logo: img2,
    },
    {
      name: "SpiceJet",
      logo: img3,
    },
    {
      name: "Vistara",
      logo: img4,
    },
    {
      name: "Akasa Air",
      logo: img5,
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Popular Domestic Airlines
      </h2>

      <div className="flex flex-wrap gap-4">
        {airlines.map((airline, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-4 py-3 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={airline.logo}
              alt={airline.name}
              className="w-12 h-12 object-contain"
            />
            <span className="font-medium text-gray-700">{airline.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
/* FAQ Section */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Why is flight ticket booking the cheapest on ixigo?",
      a: "We partner with multiple airlines and travel providers to bring you the best available fares with exclusive discounts and deals.",
    },
    {
      q: "How do I book cheap flight tickets?",
      a: "Book early, be flexible with travel dates, compare fares, and look for special offers or promo codes to get cheaper tickets.",
    },
    {
      q: "What are the benefits of flight booking?",
      a: "You can compare multiple airlines, choose preferred timings, avail discounts, and enjoy easy cancellation and refund options.",
    },
    {
      q: "Can I modify or cancel my booking?",
      a: "Yes, most airlines allow modifications or cancellations depending on fare rules. Charges may apply.",
    },
    {
      q: "Can I upgrade my seat after booking?",
      a: "Seat upgrades depend on airline availability and fare conditions. You can request upgrades through the airline portal.",
    },
    {
      q: "Are there any special fares for children, infants, or senior citizens?",
      a: "Yes, special concessions may be available depending on airline policies and fare type.",
    },
    {
      q: "Can I book additional baggage?",
      a: "Yes, additional baggage can usually be purchased during booking or later via the airline website.",
    },
    {
      q: "How to check flight status?",
      a: "You can check flight status using your booking ID or flight number in the flight status section.",
    },
    {
      q: "How can I get domestic flight offers?",
      a: "Keep checking deals, subscribe to alerts, and use promo codes to get the best domestic flight offers.",
    },
  ];

  return (
    <div className="mt-10 bg-transparent backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>

      <div className="divide-y">
        {faqs.map((item, index) => (
          <div key={index}>
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <span className="font-medium text-gray-800">{item.q}</span>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <p className="pb-4 text-gray-600 text-sm">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Train + Bus Forms */
function TrainForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [activeField, setActiveField] = useState(null);

  const wrapperRef = useRef(null);

  const stations = [
    { code: "MMCT", city: "Mumbai Central", airport: "Mumbai, India" },
    { code: "PUNE", city: "Pune Junction", airport: "Pune, India" },
    { code: "HYB", city: "Hyderabad Deccan", airport: "Hyderabad, India" },
    { code: "SBC", city: "Bangalore City", airport: "Bangalore, India" },
    { code: "MAS", city: "Chennai Central", airport: "Chennai, India" },
  ];

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setActiveField(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filterLocations = (value) =>
    stations.filter(
      (item) =>
        item.city.toLowerCase().includes(value.toLowerCase()) ||
        item.code.toLowerCase().includes(value.toLowerCase())
    );

  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className="grid grid-cols-1 md:grid-cols-12 backdrop-blur-lg bg-white/40 border border-white/30 rounded-2xl shadow-lg overflow-visible relative items-stretch z-10"
      >
        <LocationInput
          label="From"
          value={from}
          setValue={setFrom}
          field="from"
          activeField={activeField}
          setActiveField={setActiveField}
          filterLocations={filterLocations}
        />

        <div className="flex items-center justify-center md:col-span-1">
          <button
            type="button"
            onClick={swapLocations}
            className="bg-white shadow p-2 rounded-full hover:scale-110 transition"
          >
            ⇄
          </button>
        </div>

        <LocationInput
          label="To"
          value={to}
          setValue={setTo}
          field="to"
          activeField={activeField}
          setActiveField={setActiveField}
          filterLocations={filterLocations}
        />

        <InputBox label="Journey Date" type="date" />
        <InputBox label="Class" placeholder="Sleeper / AC" />

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg flex items-center justify-center h-full px-6 md:col-span-1 rounded-xl md:rounded-r-2xl">
          Search →
        </button>
      </div>

      <BottomInfo />
    </>
  );
}

/* Train FAQ Section */
function TrainFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Can I change my IRCTC login ID?",
      a: "No, IRCTC does not allow users to change their login ID once it has been created.",
    },
    {
      q: "How can I log into my IRCTC account?",
      a: "You can log into your IRCTC account using your registered username and password on the official IRCTC website or mobile app.",
    },
    {
      q: "What is the maximum number of IRCTC train tickets one can book at a time?",
      a: "You can book up to 6 tickets in a month per user ID. This limit may increase if your account is Aadhaar verified.",
    },
    {
      q: "How can I book IRCTC train tickets by mobile?",
      a: "You can book tickets using the IRCTC mobile app or through authorized travel booking platforms.",
    },
    {
      q: "How do I cancel the IRCTC train ticket after the train has departed?",
      a: "You can file a TDR (Ticket Deposit Receipt) request online through your IRCTC account for eligible refunds.",
    },
    {
      q: "Are children charged for IRCTC trains ticket booking?",
      a: "Children below 5 years usually travel free without a berth. Charges apply if a berth is required.",
    },
    {
      q: "What is TDR in your IRCTC train ticket?",
      a: "TDR stands for Ticket Deposit Receipt. It is filed to claim refunds in special cases like missed trains or cancellations.",
    },
    {
      q: "How can I pay for my booking?",
      a: "You can complete your train ticket booking using credit/debit cards, net banking, or UPI payment methods.",
    },
    {
      q: "Do you need to book train tickets in advance?",
      a: "Yes, it is recommended to book tickets early to secure confirmed seats, especially during peak seasons.",
    },
    {
      q: "How can I print my train ticket without login?",
      a: "You can print your ticket using your PNR number on the IRCTC website or download it via SMS/email confirmation.",
    },
  ];

  return (
    <div className="mt-10 bg-transparent backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="divide-y">
        {faqs.map((item, index) => (
          <div key={index}>
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <span className="font-medium text-gray-800">
                Q. {item.q}
              </span>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <p className="pb-4 text-gray-600 text-sm">
                A: {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 
function SimpleDropdown({ data, onSelect }) {
  return (
    <div className="absolute left-0 top-full z-[999] bg-white shadow-lg rounded-lg mt-2 w-full border">
      {data.map((item, i) => (
        <div
          key={i}
          onClick={() => onSelect(item)}
          className="p-2 hover:bg-gray-100 cursor-pointer text-sm text-black"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function BusForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [activeField, setActiveField] = useState(null);

  const wrapperRef = useRef(null);

  const busLocations = busCities.map((city) => ({
    code: city.slice(0, 3).toUpperCase(),
    city: `${city}, India`,
    airport: "Bus Terminal",
  }));

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setActiveField(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filterLocations = (value) =>
    busLocations.filter((item) =>
      item.city.toLowerCase().includes(value.toLowerCase())
    );

  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className="grid grid-cols-1 md:grid-cols-12 backdrop-blur-lg bg-white/40 border border-white/30 rounded-2xl shadow-lg overflow-visible relative items-stretch z-10"
      >
        <LocationInput
          label="From"
          value={from}
          setValue={setFrom}
          field="from"
          activeField={activeField}
          setActiveField={setActiveField}
          filterLocations={filterLocations}
        />

        <div className="flex items-center justify-center md:col-span-1">
          <button
            type="button"
            onClick={swapLocations}
            className="bg-white shadow p-2 rounded-full hover:scale-110 transition"
          >
            ⇄
          </button>
        </div>

        <LocationInput
          label="To"
          value={to}
          setValue={setTo}
          field="to"
          activeField={activeField}
          setActiveField={setActiveField}
          filterLocations={filterLocations}
        />

        <InputBox label="Travel Date" type="date" />
        <InputBox label="Passengers" placeholder="1 Passenger" />

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg flex items-center justify-center h-full px-6 md:col-span-1 rounded-xl md:rounded-r-2xl">
          Search →
        </button>
      </div>

      <BottomInfo />
    </>
  );
}

/* Bus FAQ Section */
function BusFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Can I cancel the tickets once booked?",
      a: "Yes, bus ticket cancellations are allowed depending on the operator’s cancellation policy. Cancellation charges may apply based on timing.",
    },
    {
      q: "What are the different payment methods for booking a bus ticket?",
      a: "You can pay using credit cards, debit cards, net banking, UPI, or digital wallets for bus ticket bookings.",
    },
    {
      q: "Do I need a printout of the bus ticket?",
      a: "No, a printout is usually not required. You can show the e-ticket or booking confirmation SMS on your mobile while boarding.",
    },
  ];

  return (
    <div className="mt-10 bg-transparent backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">
        Online Bus Booking FAQ’s
      </h2>

      <div className="divide-y">
        {faqs.map((item, index) => (
          <div key={index}>
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <span className="font-medium text-gray-800">
                Q. {item.q}
              </span>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <p className="pb-4 text-gray-600 text-sm">
                A: {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}