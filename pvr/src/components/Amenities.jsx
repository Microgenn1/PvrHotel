"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const amenities = [
  { icon: "/assets/Ac.svg", label: "AC" },
  { icon: "/assets/Parking.svg", label: "Parking" },
  { icon: "/assets/Wi-fi.svg", label: "Wi-Fi" },
  { icon: "/assets/Toiletries.svg", label: "Basic Toiletries" },
  { icon: "/assets/Service.svg", label: "24/7 Service" },
  { icon: "/assets/Foods.svg", label: "Food & Beverages" },
  { icon: "/assets/Cctv.svg", label: "CCTV" },
  { icon: "/assets/water.svg", label: "Water" },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="relative py-20 px-4 overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/Amenities Background.png"
          alt="Amenities Background"
          fill
          className="object-cover blur-lg scale-105"
          priority
        />
        {/* Optional overlay to fade it */}
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <div className="relative inline-block mb-12">
          <span className="  font-serif text-cormorant  text-3xl md:text-4xl font-bold text-gray-800 relative z-10 px-6 py-2">
            Amenities
          </span>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          grabCursor={true}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {amenities.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white  border border-gray-300 rounded-lg   drop-shadow-lg flex flex-col items-center justify-center py-6 px-4 hover:shadow-md transition">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={36}
                  height={36}
                  className="mb-2"
                />
                <p className="text-sm font-medium text-gray-800">
                  {item.label}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
