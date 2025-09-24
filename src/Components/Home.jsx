import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import heroPhoto from "../assets/images/heroPhoto.jpg"
import SpecialOffers from './SpecialOffers'



function Home() {
  return (
    <section className=" bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16 md:py-24">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0 max-sm:flex max-sm:flex-col max-sm:items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Welcome to <span className="text-[#e3072e]">Cook Door</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-lg">
            <span className="text-yellow-400 font-bold">Cook door</span> brings passion  to the dining experience,
            a passion that is reflected in  every aspect of the restaurant's operations.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/Menu"
              className="flex justify-between items-center gap-2 bg-[#e3072e] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-2xl shadow-md transition duration-300 hover:scale-105"
            >
              Menu <MdArrowRightAlt size={28} />
            </Link>

          </div>

          {/* Delivery Info */}
          <div className="mt-6 flex items-center justify-center md:justify-start gap-3 text-gray-700 text-sm flex-wrap">
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
              🚚 Free Delivery over 200 EGP
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
              ⭐ Rated #1 in Cairo
            </span>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={heroPhoto}
            alt="Cook Door Special"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
          />
        </div>
      </div>
      <SpecialOffers />
    </section>
  )
}

export default Home
