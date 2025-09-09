'use client';
import { useState } from 'react';
import Image from 'next/image';

const rooms = [
  {
    title: 'Twin-Bed Room (AC)',
    price: '₹ 1,800',
    image: '/assets/gallery 02.png',
  },
  {
    title: 'Triple-Bed Room (AC)',
    price: '₹ 2,200',
    image: '/assets/Triple-Bed.png',
  },
  {
    title: 'Double-Bed Room (AC)',
    price: '₹ 1,800',
    image: '/assets/gallery 03.png',
  },
];

const moreRooms = [
  {
    title: 'Twin-Bed Room (Non-AC)',
    price: '₹ 1,300',
    image: '/assets/gallery 02.png',
  },
  {
    title: 'Triple-Bed Room (Non-AC)',
    price: '₹ 1,700',
    image: '/assets/Triple-Bed.png',
  },
  {
    title: 'Double-Bed Room (Non-AC)',
    price: '₹ 1,300',
    image: '/assets/about1.png',
  },
];

export default function HotelSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="rooms"
      className="relative h-full py-16 px-4 text-white"
      style={{
        backgroundImage: `url('/assets/welcome background')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-70 absolute inset-0 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading with decorative images */}
        <h2 className="flex items-center justify-center text-4xl font-bold mb-8 tracking-wide font-serif uppercase">
          <Image
            src="/assets/hdl.png"
            alt="decorative left"
            width={48}
            height={48}
            className="mx-2"
          />
          <span className="text-white font-cormorant">Welcome To Our Hotel</span>
          <Image
            src="/assets/hdr.png"
            alt="decorative right"
            width={48}
            height={48}
            className="mx-2"
          />
        </h2>

        <p className="mb-12 text-gray-200 max-w-2xl mx-auto">
          Step into paradise where every sunrise is a promise of relaxation and every sunset a memory to cherish. Whether it’s a weekend getaway or a long holiday, our hotel offers the comfort, charm, and experiences you’ll remember forever.
        </p>

        {/* Main Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg relative group"
            >
              <Image
                src={room.image}
                alt={room.title}
                width={400}
                height={250}
                className="w-full object-cover h-56"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 flex justify-between items-center">
                <h3 className="font-medium text-sm">{room.title}</h3>
                <span className="font-bold text-sm">{room.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button
          onClick={() => setShowModal(true)}
          className="mt-10 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition"
        >
          View All →
        </button>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Dark Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-70"
            onClick={() => setShowModal(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full p-8 z-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center font-serif uppercase">
              Non-AC Rooms
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {moreRooms.map((room, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg relative group"
                >
                  <Image
                    src={room.image}
                    alt={room.title}
                    width={400}
                    height={250}
                    className="w-full object-cover h-48"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 flex justify-between items-center">
                    <h3 className="font-medium text-sm">{room.title}</h3>
                    <span className="font-bold text-sm">{room.price}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="mt-8 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-full text-white transition block mx-auto"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
