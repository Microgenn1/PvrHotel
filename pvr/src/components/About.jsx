"use client";

import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-20 px-6 overflow-hidden"
      style={{ backgroundImage: "url('/assets/Background blur.png')" }}
    >
      {/* Section Title */}
      <h2 className="flex items-center justify-center mb-12">
        <Image
          src="/assets/HdL.png"
          alt="decorative left"
          width={48}
          height={48}
          className="mx-3"
        />
        <span className="text-white font-serif text-cormorant text-3xl md:text-4xl font-bold tracking-wide">
          About Us
        </span>
        <Image
          src="/assets/HdR.png"
          alt="decorative right"
          width={48}
          height={48}
          className="mx-3"
        />
      </h2>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 relative z-10">
        {/* Left (Image stack) */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-center">
          <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
            {/* Main Image */}
            <Image
              src="/assets/About1.png"
              alt="About Main"
              fill
              className="object-cover rounded-md shadow-md"
            />

            {/* Small Overlapping Image */}
            <div className="absolute bottom-[-40px] right-[-40px] w-[150px] h-[150px] md:w-[180px] md:h-[180px] border-4 border-black rounded-md overflow-hidden shadow-lg bg-gray-300">
              <Image
                src="/assets/About2.png"
                alt="About Small"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right (Text content) */}
        <div className="w-full md:w-1/2 text-left space-y-4">
          <p className="text-gray-300 leading-relaxed text-justify ">
            Hotel <span className="font-semibold">"PVR INTERNATIONAL"</span>,
            located in Gandhipuram, Coimbatore, is where timeless charm meets
            hospitality. It blends modern luxury with classic Indian design,
            offering both business and leisure travelers an atmosphere of warmth
            and care. We also provide the finest meeting spaces and an in-house
            cafeteria lounge.
          </p>

          <p className="text-gray-300 leading-relaxed text-justify ">
            <span className="font-semibold">Comfortable Accommodations:</span>{" "}
            Family rooms with private bathrooms, air-conditioning, and city
            views ensure a relaxing stay. Each room includes a work desk,
            seating area, and free toiletries.
          </p>

          <p className="text-gray-300 leading-relaxed text-justify ">
            <span className="font-semibold">Essential Facilities:</span> Guests
            enjoy free WiFi, a lounge, lift, 24-hour front desk, and free
            private parking. Additional services include private check-in and
            check-out, room service, and luggage storage.
          </p>

          <p className="text-gray-300 leading-relaxed text-justify ">
            <span className="font-semibold">Dining Experience:</span> A
            vegetarian breakfast with local specialties is served in-room.
          </p>

          <p className="text-gray-300 leading-relaxed text-justify " >
            <span className="font-semibold">Prime Location:</span> Just 12 km
            from Coimbatore International Airport, the hotel is close to
            Codissia Trade Fair Complex (8 km), Coimbatore Junction (4 km), and
            Podanur Junction (9 km). Guests appreciate its convenience and
            excellent service.
          </p>
        </div>
      </div>

      {/* Bottom banner */}
      <div className="mt-16 text-center border-gray-700 pt-6">
        <p className="max-w-4xl mx-auto font-serif text-cormorant-lg text-gray-200 leading-relaxed">
          Choose <span className="font-semibold">PVR International</span> for a
          stay that blends comfort, convenience, and care — because your
          satisfaction is our priority.
        </p>
      </div>
    </section>
  );
}
