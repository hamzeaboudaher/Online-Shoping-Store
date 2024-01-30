import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import ShopData from "../Context-Api-Reducer/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Products() {
  const { data, addToBasket } = useContext(ShopData);

  const [priceRange, setPriceRange] = useState("");

  const { categoryid } = useParams();

  const containerRef = useRef(null);

  useEffect(() => {
    let conRef=containerRef.current
    if (conRef) {
      containerRef.current.style.position = "absolute";
      containerRef.current.style.top = "0";
      containerRef.current.addEventListener("click", scrollToTop);
    }

    return () => {
      if (conRef) {
        conRef.removeEventListener("click", scrollToTop);
      }
    };
  }, [containerRef]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  
 

  {/* Price und Category filter */}

  const filteredData = data
    .filter((item) => !categoryid || item.category === categoryid)
    .filter((item) => {
      if (!priceRange) return true; // No price range specified

      const [min, max] = priceRange.split("-").map(parseFloat);
      return (!min || item.price >= min) && (!max || item.price <= max);
    });




  const uniqueCategories = [
    ...new Set(filteredData.map((item) => item.category)),
  ];



  return (
    <>
      <div className="border-black border-hidden border-2 text-red-500 text-l   ">
       
          {uniqueCategories.map((uniqueCategory) => (
            <Link
              key={uniqueCategory}
              className={`mr-5 text-black font-bold hover:text-blue-700  
              }`}
              to={`/products/${uniqueCategory}`}
            >
              {uniqueCategory}
            </Link>
          ))}
     
      </div>


              {/* Price filter */}
      <div className="mt-5 text-red-500 text-xl">
        <label htmlFor="priceRange">Price Range:</label>
        <input
          type="text"
          id="priceRange"
          placeholder="min-max"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
      </div>




      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 shadow-md rounded-md transition-transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 max-h-20 overflow-hidden">
              {item.description}
            </p>
            <div className="mt-4">
              <span className="text-green-500 font-bold">${item.price}</span>
              <button
                className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-md"
                onClick={() => addToBasket(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={scrollToTop} className="text-red-700 fixed bottom-32 left-14 z-50">
      <FontAwesomeIcon icon={faArrowUp} />
      </button>    </>
  );
}

export default Products;
