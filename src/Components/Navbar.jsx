import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/Menu" },
    { name: "Contact Us", path: "/Contact" },
    { name: "About", path: "/About" },
  ];

  return (
    <nav className="bg-white top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img className="w-20 cursor-pointer" src={logo} alt="logo" />
            <span className="text-3xl md:text-4xl font-[fantasy] font-bold text-[#e3072e] tracking-wide">
              Cook Door
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex space-x-10  font-bold text-2xl text-gray-500">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`hover:text-[#e3072e] transition duration-300 ${
                    location.pathname === link.path
                      ? "text-[#e3072e] font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md rounded-lg p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-lg ${
                  location.pathname === link.path
                    ? "text-[#e3072e] font-semibold"
                    : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)} // Close menu after clicking
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
