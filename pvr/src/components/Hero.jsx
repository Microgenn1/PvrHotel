"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-[40px] sm:text-[60px] md:text-cormorant-2xl font-bold mb-6"
        >
          Welcome to Hotel
        </motion.h1>

        {/* Elegant Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="relative w-[320px] h-[100px] sm:w-[400px] sm:h-[130px] md:w-[500px] md:h-[160px] lg:w-[600px] lg:h-[180px] mx-auto my-6 cursor-pointer"
        >
          <Image
            src="/assets/Logo.png"
            alt="Hotel Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

         
      </div>
    </section>
  );
}
