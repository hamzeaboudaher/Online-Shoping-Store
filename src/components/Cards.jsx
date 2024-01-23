import React from "react";

function CardContainer() {
  return (
    <div className="flex justify-center space-x-4">
      {" "}
      {/* Flex-Container */}
      {[...Array(3)].map((_, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://via.placeholder.com/400x200"
            alt="Bild"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go somewhere
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardContainer;

// second EXAMPLE
// function Cards({ product }) {
//   return (
//     <div style={{ display: "block" }}>
//       <h1 style={{ position: "absolute", right: "35%" }}>{product.title}</h1>
//       <img
//         style={{
//           width: "300px",
//           marginLeft: "50px",
//           marginTop: "50px",
//           border: "5px solid black",
//           borderRadius: "50%",
//           padding: "30px",
//         }}
//         src={product.image}
//         alt={product.title}
//       />
//       <div style={{ display: "block", marginTop: "50px" }}>
//         <p>Price: ${product.price}</p>
//         <p>Description: {product.description}</p>
//         <p>Category: {product.category}</p>
//         <p>
//           Rating: {product.rating.rate} ({product.rating.count} reviews)
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Cards;
