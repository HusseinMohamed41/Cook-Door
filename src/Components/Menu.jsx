
import { useState, useEffect } from "react";
import { RiDiscountPercentLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import ad from "../assets/images/ad.jpg"
import ad2 from "../assets/images/ad2.jpg"

function Menu() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to home page first
    navigate("/");

    // Wait a short time, then scroll to section
    setTimeout(() => {
      const section = document.getElementById("special-offers");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    setLoading(true);

    fetch("https://api.jsonbin.io/v3/b/68d46b41d0ea881f4089b3ab/latest", {
  headers: {
    "X-Master-Key": "$2a$10$hg990DNl3TwGhbMCFo962urVcG2Hpxy4QeZUMYBZuM3zKi1jD9tS2"
  }
})
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.record.products);
        setCategories(["All", ...new Set(data.record.products.map((item) => item.category))]);
      })
      .catch((error) => {
        console.error("❌ Error fetching products:", error);
      })
      .finally(() => setLoading(false));
  }, []);


  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });


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
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6">
      {/* Sidebar */}
      <aside className="md:w-1/4 w-full mb-6 md:mb-0 md:pr-6">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <ul className="flex md:flex-col gap-3 flex-wrap md:flex-nowrap">
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer px-4 py-2 rounded-xl border ${selectedCategory === category
                ? "bg-red-700 text-white border-red-700"
                : "bg-white hover:bg-red-100 border-gray-300"
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>

        {/* Offers Button  */}
        <div
          onClick={handleClick}
          className="font-bold text-2xl max-xl:text-lg max-md:w-fit max-md:mx-auto mt-3 cursor-pointer px-4 py-2 rounded-xl border bg-red-700 text-white border-red-700 flex justify-start items-center gap-2"
        >
          <RiDiscountPercentLine size={35} /> Special Offers
        </div>

        {/* Styled Ad Image */}
        <div className="max-md:hidden mt-8 flex flex-col gap-10 overflow-hidden ">
          <img
            src={ad}
            alt="adPhoto"
            className="w-full h-full object-cover rounded-2xl"
          />
          <img
            src={ad2}
            alt="adPhoto"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </aside>

      {/* Main Section */}
      <section className="md:w-3/4 flex flex-col gap-6">
        {/* Search Bar */}
        <div className="w-full">
          <input
            type="text"
            placeholder="Search for items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none caret-red-600"
          />
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col justify-between items-start">
                  <h3 className="text-lg font-semibold mb-1 h-[90px]">{product.title}</h3>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-red-700 font-semibold">{product.price} EGP</p>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="text-[12px] bg-red-600 text-white font-semibold px-1.5 py-0.5 rounded-lg cursor-pointer hover:bg-red-700 transition duration-300">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found. Try another search or category.
            </p>
          )}
        </div>
      </section>

      {/* Modal (Pop-up) */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-[#00000087] flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-3 px-2 py-1 bg-red-800 rounded-lg text-white hover:text-black text-3xl cursor-pointer "
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{selectedProduct.title}</h3>
              <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
              <p className="text-xl font-bold mb-4">{selectedProduct.price} EGP</p>

              <button className="bg-red-700 text-white w-full py-3 rounded-xl hover:bg-[#e3072e] transition">
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
