// import { useEffect, useState } from "react";

// function Data() {
//   const [productData, setProductData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products/");
//         const json = await response.json();
//         setProductData(json);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setProductData([]);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!productData.length) return <p>Loading...</p>;

//   return (
//     <div className="flex flex-wrap justify-center space-x-4 mt-20">
//       {" "}
//       {/* Flex Container mit Wrap und zentrierter Ausrichtung */}
//       {productData.map((product) => (
//         <div
//           key={product.id}
//           className="max-w-sm rounded overflow-hidden shadow-lg m-4"
//         >
//           {" "}
//           <img
//             className="w-full h-64 object-cover"
//             style={{ width: "200px", alignItems: "center" }}
//             src={product.image}
//             alt={product.title}
//           />
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">{product.title}</div>
//             <p className="text-gray-700 text-base">{product.description}</p>
//           </div>
//           <div className="px-6 pt-4 pb-2">
//             <p className="text-lg">Price: ${product.price}</p>
//             <p className="text-lg">Category: {product.category}</p>
//             <p className="text-lg">
//               Rating: {product.rating.rate} ({product.rating.count} reviews)
//             </p>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
//               add to shopping
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Data;
