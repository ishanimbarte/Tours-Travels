import React from "react";

const galleryImages = [
  {
    id: 1,
    title: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    height: "h-[500px]",
  },
  {
    id: 2,
    title: "Maldives",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    height: "h-[300px]",
  },
  {
    id: 3,
    title: "Paris",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop",
    height: "h-[400px]",
  },
  {
    id: 4,
    title: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    height: "h-[550px]",
  },
  {
    id: 5,
    title: "Thailand",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    height: "h-[350px]",
  },
  {
    id: 6,
    title: "Kashmir",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
    height: "h-[450px]",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 uppercase tracking-[5px] font-semibold">
            Travel Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Explore The World
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover unforgettable destinations and premium travel experiences.
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">

          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-3xl group cursor-pointer break-inside-avoid"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className={`w-full ${item.height} object-cover group-hover:scale-110 transition duration-700`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm mt-1">
                  Beautiful destination for your next journey
                </p>

                {/* <button className="mt-4 bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition">
                  Explore
                </button> */}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}