import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="relative bg-[#111013] text-white   z-10 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/Background blur.png')" }} // 🔹 Replace with your footer image path
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Background gradient-like corners */}
 
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10 items-start poppins-sm p-6">
        {/* Logo */}
        <div>
          <Image
            src="/assets/logo.png" // replace with your logo path
            alt="PVR Logo"
            width={200}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Location */}
        <div>
          <h4 className="text-lg font-semibold uppercase mb-2 tracking-wider">Location</h4>
          <p className="flex items-start gap-2 text-sm text-gray-300">
            <FaMapMarkerAlt className="mt-1" />
            270–271 Third Street, Gandhipuram,<br />
            Coimbatore-641 012
          </p>
        </div>

        {/* Mobile */}
        <div>
          <h4 className="text-lg font-semibold uppercase mb-2 tracking-wider">Mobile</h4>
          <p className="flex items-center gap-2 text-sm text-gray-300">
            <FaPhoneAlt />
            90929 39407
          </p>
        </div>

        {/* Email */}
        <div>
          <h4 className="text-lg font-semibold uppercase mb-2 tracking-wider">E-mail</h4>
          <p className="flex items-center gap-2 text-sm text-gray-300 break-all">
            <FaEnvelope />
            info@pvrinternational.co.in
          </p>
        </div>
      </div>

      {/* Red Border Line */}
      <div className="border-t border-red-700 my-6 relative z-10" />

      {/* Bottom Bar */}
      <div className=" poppins-sm  font-light relative z-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">
        <p>
          Copyright ©{new Date().getFullYear()} All rights reserved | Powered by{' '}
          <span className="font-semibold text-white poppins-sm font-bold">Microgenn</span>
        </p>
        <div className="flex gap-4 text-white text-sm">
          <a href="#" className="hover:underline">Privacy policy</a>
          <a href="#" className="hover:underline">Refund</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}
