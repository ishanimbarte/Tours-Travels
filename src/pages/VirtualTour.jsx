import React from "react";

const videos = [
  {
    title: "Kashmir Paradise",
    video: "https://www.youtube.com/embed/9o3QGk5F5gA",
  },
  {
    title: "Goa Beach Drone View",
    video: "https://www.youtube.com/embed/WFzG6s5hX0A",
  },
  {
    title: "Manali Snow Mountains",
    video: "https://www.youtube.com/embed/2OEL4P1Rz04",
  },
];

export default function VirtualTour() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Virtual Tours & Travel Videos 🎥
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore destinations through immersive videos, drone shots, and 360°
          virtual experiences before booking your dream trip.
        </p>
      </div>

      {/* Video Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {videos.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <iframe
              className="w-full h-56"
              src={item.video}
              title={item.title}
              allowFullScreen
            ></iframe>

            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* 360 Virtual Tour Section */}
      <div className="mt-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          360° Virtual Experience 🌍
        </h2>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <iframe
            className="w-full h-[500px]"
            src="https://www.google.com/maps/embed?pb=!4v1690000000000"
            allowFullScreen=""
            loading="lazy"
            title="360 Tour"
          ></iframe>
        </div>
      </div>
    </div>
  );
}