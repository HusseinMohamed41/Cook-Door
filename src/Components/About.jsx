import cover1 from '../assets/images/cover1.jpg'
import { FaLeaf, FaHamburger, FaSmileBeam } from "react-icons/fa";

function About() {
  return (
    <div>
      <div className="flex flex-col items-center w-full">

        {/* Hero Section */}
        <section className="relative w-full h-[500px] flex items-center">
          {/* Background Image */}
          <img
            src={cover1}
            alt="Cook Door Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Subtle Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Text Content */}
          <div className="relative z-10 font-[cursive] max-w-4xl px-6 md:px-12 max-sm:text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
              Serving Happiness <br /> Since 1988
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
              From our very first sandwich to the hundreds of meals we serve today, our
              passion for fresh ingredients and unforgettable taste has never changed.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="max-w-4xl p-6 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">Our Journey</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Cook Door started as a small sandwich shop with one mission: to serve fresh, flavorful, and affordable meals for everyone.
            Over the years, we have grown into one of Egypt’s most beloved fast-casual restaurants, with locations across the country — but we never lost our commitment to quality.
          </p>
        </section>

        {/* Our Values */}
        <section className="grid md:grid-cols-3 gap-6 max-w-5xl p-6">
          {[{
            title: "Fresh Ingredients",
            desc: "We source the best ingredients daily to ensure every meal is fresh.",
            icon: <FaLeaf className="text-green-500 text-4xl" />
          }, {
            title: "Great Taste",
            desc: "Classic recipes with a modern twist — flavors everyone loves.",
            icon: <FaHamburger className="text-red-700 text-4xl" />
          }, {
            title: "Customer Happiness",
            desc: "Our priority is to make every guest feel at home.",
            icon: <FaSmileBeam className="text-yellow-500 text-4xl" />
          }].map((value, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
            >
              <div className="mb-3">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </section>

{/* Timeline */}
<section className="max-w-5xl p-6">
  <h2 className="text-3xl font-semibold mb-12 text-center">Our Milestones</h2>

  <div className="grid md:grid-cols-3 gap-8">
    {[{
      year: "1988",
      text: "First Cook Door branch opens."
    }, {
      year: "2000s",
      text: "Expanded to multiple cities across Egypt."
    }, {
      year: "Today",
      text: "Serving thousands of happy customers daily."
    }].map((milestone, i) => (
      <div
        key={i}
        className="flex flex-col items-center bg-gradient-to-b from-white to-red-50 rounded-3xl  p-8 hover:shadow-xl transition duration-300"
      >
        {/* Big Year */}
        <h3 className="text-4xl font-extrabold text-red-700 mb-4">{milestone.year}</h3>

        {/* Divider */}
        <div className="w-12 h-1 bg-red-300 mb-4 rounded-full"></div>

        {/* Description */}
        <p className="text-gray-700 text-center text-lg leading-relaxed">{milestone.text}</p>
      </div>
    ))}
  </div>
</section>

        {/* Call To Action */}
        <section className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Experience Cook Door Today</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/Contact" className="px-6 py-3 bg-red-700 text-white rounded-2xl shadow-md hover:bg-[#e3072e] transition">Find a Location</a>
            <a href="/Menu" className="px-6 py-3 bg-black text-white rounded-2xl shadow-md hover:bg-gray-800 transition">Order Now</a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
