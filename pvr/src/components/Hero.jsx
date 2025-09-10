"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full m-0 p-0 overflow-hidden">
      {/* Background Banner Image */}
      <Image
        src="/assets/banner.png"
        alt="Hotel Banner"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
        {/* Heading */}
        <h1 className="font-serif text-[40px] sm:text-[60px] md:text-cormorant-2xl font-bold">
          Welcome to Hotel
        </h1>

        {/* Logo */}
        <div className="relative w-[320px] h-[100px] sm:w-[400px] sm:h-[130px] md:w-[500px] md:h-[160px] lg:w-[600px] lg:h-[180px] mx-auto my-6">
          <Image
            src="/assets/Logo.png"
            alt="Hotel Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
