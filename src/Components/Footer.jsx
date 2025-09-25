import { FaFacebookF, FaInstagram, FaTwitter, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import logo from "../assets/images/logo.png"

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand */}
        <div className="max-md:text-center max-md:flex max-md:flex-col max-md:items-center">
          <h2 className="text-3xl font-bold text-[#e3072e]  mb-4">Cook Door</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Your favorite meals, made with fresh ingredients and love.
            Experience the taste of tradition since 1988.
          </p>
          <img className='w-24 cursor-pointer' src={logo} alt="logo" />
        </div>

        {/* Contact Info */}
        <div className="max-md:text-center max-md:flex max-md:flex-col max-md:items-center ">
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 max-md:flex max-md:flex-col max-md:items-center">
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-[#e3072e] " /> 
              123 Main Street, Cairo, Egypt
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-[#e3072e] " /> +20 123 456 789
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#e3072e] " /> support@cookdoor.com
            </li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div className="max-md:text-center max-md:flex max-md:flex-col max-md:items-center">
          <h3 className="text-xl font-semibold text-white mb-4">Stay Connected</h3>
          <p className="text-sm mb-3 text-gray-400">Join our newsletter for offers & updates</p>
          <form className="flex  bg-gray-800 rounded-lg overflow-hidden w-fit">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 p-2 bg-transparent text-white outline-none w-full"
            />
            <button className="bg-red-700  font-semibold px-4 hover:bg-[#e3072e] transition cursor-pointer">
              Subscribe
            </button>
          </form>
          <div className="flex justify-center md:justify-start gap-4 mt-5 text-xl">
            <a href="#" className="hover:text-[#e3072e] "><FaFacebookF /></a>
            <a href="#" className="hover:text-[#e3072e] "><FaInstagram /></a>
            <a href="#" className="hover:text-[#e3072e] "><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-5 text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-[#e3072e]  font-semibold">Cook Door</span>. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
