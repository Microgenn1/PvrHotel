"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useState } from "react";

const reviews = [
  {
    name: "Ananya S.",
    rating: 4.8,
    text: "I stayed here for 6 months and it truly felt like home...",
    image: "/assets/Ananya S..png",
  },
  {
    name: "Meera J",
    rating: 5.0,
    text: "Flawless from start to finish — comfort, convenience...",
    image: "/assets/Meera J.png",
  },
  {
    name: "Arjun",
    rating: 4.5,
    text: "Rooms are spacious, and the security guard is always alert...",
    image: "/assets/Arjun.png",
  },
];

export default function GuestReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="relative py-20 px-4 bg-[#0e0e10] text-white overflow-hidden bg-cover bg-center "
      style={{ backgroundImage: "url('/assets/Background blur.png')" }} //  
    >
      <Image
        src="/assets/review-bg.png"
        alt="Background"
        fill
        className="absolute inset-0 object-cover opacity-30 -z-10"
      />

      <div className="max-w-6xl mx-auto">
        <h2 className="flex items-center justify-center text-3xl md:text-4xl font-bold mb-12 tracking-wide">
          <Image
            src="/assets/HdL.png"
            alt="decorative left"
            width={48}
            height={48}
            className="mx-2"
          />
          <span className="text-white font-cormorant text-4xl font-serif tracking-wider">
            Guest Reviews
          </span>
          <Image
            src="/assets/HdR.png"
            alt="decorative right"
            width={48}
            height={48}
            className="mx-2"
          />
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
          centeredSlides={true}
          slidesPerView="auto" // allows both side slides
          spaceBetween={30}
          className="pb-10"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {reviews.map((review, idx) => {
            const isActive = idx === activeIndex;

            return (
              <SwiperSlide
                key={idx}
                className="!w-[280px] md:!w-[340px]" // fixed width for each card
              >
                <div
                  className={`transition-all duration-500 ease-in-out transform ${
                    isActive
                      ? "scale-105 opacity-100 shadow-xl z-20"
                      : "scale-90 opacity-60 z-10"
                  } bg-white text-gray-800 rounded-xl p-6 h-full`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-[#1d1b3a] text-md">
                        {review.name}
                      </h4>
                      <p className="text-yellow-500 text-sm font-semibold">
                        {review.rating} ★
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {review.text}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
