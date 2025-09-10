"use client";
import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = {
  Rooms: [
    "/Rooms/room1.JPG",
    "/Rooms/room2.jpg",
    "/Rooms/room3.jpg",
    "/Rooms/room4.jpg",
    "/Rooms/room5.jpg",
    "/Rooms/room6.jpg",
    "/Rooms/room7.jpg",
    "/Rooms/room8.jpg",
    // "/rooms/room9.jpg",
    // "/rooms/room10.jpg",
    // "/rooms/room11.jpg",
    // "/rooms/room12.jpg",
    // "/rooms/room13.jpg",
    // "/rooms/room14.jpg",
    // "/rooms/room15.jpg",
    // "/rooms/room16.jpg",
    // "/rooms/room17.jpg",
    // "/rooms/room18.jpg",
    // "/rooms/room19.jpg",
    // "/rooms/room20.jpg",
    // "/rooms/room21.jpg",
    // "/rooms/room22.jpg",
  ],
  Commonarea: [
    "/Commonarea/room1.jpg",
    "/Commonarea/room2.jpg",
    "/Commonarea/room3.jpg",
    "/Commonarea/room4.jpg",
    "/Commonarea/room5.jpg",
    "/Commonarea/room6.jpg",
    "/Commonarea/room7.jpg",
    "/Commonarea/room8.jpg",
  ],
  Restrooms: [
    "/restrooms/room1.jpg",
    "/restrooms/room2.jpg",
    "/restrooms/room3.jpg",
    "/restrooms/room4.jpg",
    "/restrooms/room5.jpg",
    "/restrooms/room6.jpg",
    "/restrooms/room7.jpg",
  ],
  Lift: [
    "/lift/room1.jpg",
    "/lift/room2.jpg",
    "/lift/room3.jpg",
    "/lift/room4.jpg",
    "/lift/room5.jpg",
    "/lift/room6.jpg",
  ],
};

export default function GallerySection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Rooms");
  const [activeIndex, setActiveIndex] = useState(0);

  const images = categories[activeCategory];
  const currentImage = images[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-800 tracking-widest">
            GALLERY
          </h2>
        </div>

        {/* Grid Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {[
            "/assets/Gallery 01.png",
            "/assets/Gallery 02.png",
            "/assets/Gallery 03.png",
            "/assets/Gallery 04.png",
            "/assets/Gallery 05.png",
            "/assets/Gallery 06.png",
            "/assets/Gallery 07.png",
            "/assets/Gallery 08.png",
            "/assets/Gallery 09.png",
            "/assets/Gallery 10.png",
          ].map((src, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden shadow-md group ${
                idx % 5 === 0 ? "row-span-2" : "row-span-1"
              }`}
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setIsOpen(true)}
            className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold tracking-wide hover:bg-red-700 transition shadow-md hover:shadow-lg"
          >
            VIEW ALL
          </button>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-[#1a1a1a] w-11/12 lg:w-5/6 h-5/6 rounded-xl shadow-2xl flex flex-col relative text-white">
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Category Tabs */}
              <div className="flex justify-center space-x-4 p-4 border-b border-gray-700">
                {Object.keys(categories).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setActiveIndex(0);
                    }}
                    className={`px-5 py-2 rounded-md text-sm tracking-wider uppercase font-serif ${
                      activeCategory === cat
                        ? "bg-blue-600 text-white font-bold"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Main Content */}
              <div className="flex flex-1 overflow-hidden">
                {/* Left Thumbnails Grid */}
                <div className="w-1/4 bg-black/30 p-3 grid grid-cols-2 gap-3 place-content-start overflow-y-auto max-h-full custom-scrollbar">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative rounded-md overflow-hidden cursor-pointer group border-2 ${
                        activeIndex === idx
                          ? "border-blue-500"
                          : "border-transparent hover:border-gray-500"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`thumb-${idx}`}
                        className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
                    </div>
                  ))}
                </div>

                {/* Main Preview */}
                <div className="relative flex-1 flex flex-col items-center justify-center bg-black">
                  {/* Prev Button */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 bg-black/60 p-2 rounded-full text-white hover:bg-black/80"
                  >
                    <ChevronLeft size={28} />
                  </button>

                  <img
                    src={currentImage}
                    alt="Preview"
                    className="max-h-full max-w-full rounded-lg shadow-lg"
                  />

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="absolute right-4 bg-black/60 p-2 rounded-full text-white hover:bg-black/80"
                  >
                    <ChevronRight size={28} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #4b5563; /* gray-600 */
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </section>
  );
}
