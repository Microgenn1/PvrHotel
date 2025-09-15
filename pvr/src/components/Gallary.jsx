"use client";
import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = {
  Rooms: [
    "/Rooms/room1.JPG",
    "/Rooms/room2.JPG",
    "/Rooms/room3.JPG",
    "/Rooms/room4.JPG",
    "/Rooms/room5.JPG",
    "/Rooms/room6.JPG",
    "/Rooms/room7.JPG",
    "/Rooms/room8.JPG",
    "/Rooms/room9.JPG",
    "/Rooms/room10.JPG",
    "/Rooms/room11.JPG",
  ],
  Commonarea: [
    "/Commonarea/room1.JPG",
    "/Commonarea/room2.JPG",
    "/Commonarea/room3.JPG",
    "/Commonarea/room4.JPG",
    "/Commonarea/room5.JPG",
    "/Commonarea/room6.JPG",
    "/Commonarea/room7.JPG",
    "/Commonarea/room8.JPG",
  ],
  Restrooms: [
    "/Restrooms/room1.JPG",
    "/Restrooms/room2.JPG",
    "/Restrooms/room3.JPG",
    "/Restrooms/room4.JPG",
    "/Restrooms/room5.JPG",
    "/Restrooms/room6.JPG",
    "/Restrooms/room7.JPG",
  ],
  Lift: [
    "/Lift/room1.JPG",
    "/Lift/room2.JPG",
    "/Lift/room3.JPG",
    "/Lift/room4.JPG",
    "/Lift/room5.JPG",
    "/Lift/room6.JPG",
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

  // Preload first image of active category when modal opens
  useEffect(() => {
    if (isOpen) {
      const preloadImg = new Image();
      preloadImg.src = categories[activeCategory][0];
    }
  }, [isOpen, activeCategory]);

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
                loading="lazy"
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
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold tracking-wide hover:bg-indigo-800 transition shadow-md hover:shadow-lg"
          >
            VIEW ALL
          </button>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-[#1a1a1a] w-full h-full lg:w-5/6 lg:h-5/6 rounded-none lg:rounded-xl shadow-2xl flex flex-col relative text-white">
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Category Tabs */}
              <div className="flex justify-center space-x-2 sm:space-x-4 p-3 border-b border-gray-700 flex-wrap">
                {Object.keys(categories).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setActiveIndex(0);
                    }}
                    className={`px-4 py-2 rounded-md text-xs sm:text-sm tracking-wider uppercase font-serif ${
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
              <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
                {/* Thumbnails */}
                <div className="lg:w-1/4 lg:h-full bg-black/30 p-3 grid grid-cols-3 lg:grid-cols-2 gap-3 overflow-y-auto scrollbar-none">
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
                        loading="lazy"
                        className="w-full h-20 sm:h-24 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
                    </div>
                  ))}
                </div>

                {/* Main Preview */}
                <div className="relative flex-1 flex items-center justify-center bg-black">
                  {/* Prev Button */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 sm:left-4 bg-black/60 p-2 rounded-full text-white hover:bg-black/80"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <img
                    src={currentImage}
                    alt="Preview"
                    loading="lazy"
                    className="max-h-full max-w-full rounded-lg shadow-lg"
                    style={{ filter: "blur(10px)", transition: "filter 0.4s ease-out" }}
                    onLoad={(e) => (e.currentTarget.style.filter = "none")}
                  />

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="absolute right-3 sm:right-4 bg-black/60 p-2 rounded-full text-white hover:bg-black/80"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
