import { useState, useEffect } from "react";

function SpecialsOffers() {
  const [offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [loading, setLoading] = useState(true); //Loading state

  useEffect(() => {
    setLoading(true);
    
        fetch("https://api.jsonbin.io/v3/b/68d46b41d0ea881f4089b3ab/latest", {
  headers: {
    "X-Master-Key": "$2a$10$hg990DNl3TwGhbMCFo962urVcG2Hpxy4QeZUMYBZuM3zKi1jD9tS2"
  }
})
      .then((res) => res.json())
      .then((data) => setOffers(data.record.specialOffers))
      .catch((err) => console.error("Failed to fetch offers:", err))
      .finally(() => setLoading(false));
  }, []);


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen space-x-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-4 h-4 bg-red-700 rounded-full animate-ping"
            style={{ animationDelay: `${i * 0.15}s` }}
          ></div>
        ))}
      </div>
    );
  }

  return (
    <section id="special-offers" className="container mx-auto px-6 py-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-6xl font-bold text-black">
          Special Offers
        </h1>
        <p className="text-[#ffcd00] mt-2">
          Enjoy our best deals and exclusive discounts!
        </p>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-3 gap-10 max-xl:grid-cols-2 max-sm:grid-cols-1 ">
        {offers.length > 0 ? (
          offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white  rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-[350px] h-[350px] max-xl:w-[250px] max-xl:h-[250px] max-sm:w-[300px] max-sm:h-[300px] object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {offer.title}
              </h3>
              <p className="text-red-700 font-bold text-lg mt-2">
                {offer.price} EGP
              </p>
              <button
                className="mt-4 bg-red-700 hover:bg-[#e3072e] text-white px-5 py-2 rounded-xl transition cursor-pointer"
                onClick={() => setSelectedOffer(offer)} // 👈 open modal with offer data
              >
                Offer Details
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No special offers available right now.
          </p>
        )}
      </div>

      {/*Popup card */}
      {selectedOffer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fadeIn">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 px-1.5 py-0 bg-red-800 rounded-lg text-white hover:text-red-700 text-2xl cursor-pointer"
              onClick={() => setSelectedOffer(null)}
            >
              &times;
            </button>

            {/* Offer Content */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedOffer.title}
            </h2>
            <p className="text-gray-600 mb-4">{selectedOffer.description}</p>
            <p className="text-red-700 font-bold text-xl mb-4">
              {selectedOffer.price} EGP
            </p>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
                onClick={() => setSelectedOffer(null)}
              >
                Close
              </button>
              <button className="px-4 py-2 rounded-xl bg-red-700 text-white hover:bg-[#e3072e] transition cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SpecialsOffers;
