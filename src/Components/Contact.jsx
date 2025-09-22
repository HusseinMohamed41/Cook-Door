import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-col items-center w-full p-6">
      {/* Hero Section */}
      <section className="w-full h-56 bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}>
        <div className="text-black p-6 rounded-2xl text-center">
          <h1 className="text-6xl font-bold">Get in Touch</h1>
          <p className="text-sm text-[#e3072e]">We’re here to serve you better – contact us anytime.</p>
        </div>
      </section>


      {/* Contact Form */}
      <section className="max-w-2xl w-full mt-8 bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border-none caret-red-700 bg-[#e7e7e79c] p-3 rounded-xl focus:outline-none" />
          <input type="email" placeholder="Your Email" className="border-none caret-red-700 bg-[#e7e7e79c] p-3 rounded-xl focus:outline-none" />
          <textarea placeholder="Your Message" rows="5" className="border-none caret-red-700 bg-[#e7e7e79c] p-3 rounded-xl focus:outline-none resize-none"></textarea>
          <button type="submit" className="bg-red-700 text-white py-3 rounded-xl hover:bg-[#e3072e] transition">Send Message</button>
        </form>
      </section>

{/* Contact Details */}
<section className="max-w-3xl w-full mt-10 text-center">
  <h2 className="text-2xl font-semibold mb-4">Our Information</h2>

  <p className="text-gray-700 mb-3 flex items-center justify-center gap-2">
    <FaMapMarkerAlt className="text-red-600" /> 
    123 Cook Door Street, Cairo, Egypt
  </p>

  <p className="text-gray-700 mb-3 flex items-center justify-center gap-2">
    <FaPhoneAlt className="text-red-600" />
    +20 123 456 789
  </p>

  <p className="text-gray-700 mb-3 flex items-center justify-center gap-2">
    <FaEnvelope className="text-red-600" />
    support@cookdoor.com
  </p>

  <p className="text-gray-700 flex items-center justify-center gap-2">
    <FaClock className="text-red-600" />
    Open Daily: 10 AM – 12 Midnight
  </p>
</section>

      {/* Map Section */}
      <section className="w-full max-w-3xl mt-8 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Cook Door Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110548.81593735604!2d31.1809!3d30.0595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzM0LjIiTiAzMcKwMTAnNTIuNCJF!5e0!3m2!1sen!2seg!4v1610000000000!5m2!1sen!2seg"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </section>
    </div>
  )
}

export default Contact
