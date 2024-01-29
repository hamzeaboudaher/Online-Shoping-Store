import { useContext } from "react";
import ShopData from "../Context-Api-Reducer/Context";

const Carts = () => {
  const {
    products,
    removefromBasket,
    updateQuantity,
    updatePriceF,
    totalPrice,
  } = useContext(ShopData);

  const handleAddToBasket = (product) => {
    updateQuantity(product, product.quantity + 1);
    updatePriceF(); // Update total price when quantity changes
  };

  const handleRemoveFromBasket = (product) => {
    removefromBasket(product);
    updatePriceF(); // Update total price when removing a product
  };

  return (
    <>
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <h1 className="text-3xl font-bold mb-6">${totalPrice}</h1>

        {products.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4">Product</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Quantity</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">{product.title}</td>
                  <td className="py-2 px-4">${product.price}</td>
                  <td className="py-2 px-4">{product.quantity}</td>
                  <td className="py-2 px-4">
                    <button
                      className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                      onClick={() =>
                        updateQuantity(product, product.quantity - 1)
                      }
                      disabled={product.quantity <= 0}
                    >
                      -
                    </button>
                    <button
                      className="bg-green-500 text-white py-1 px-2 rounded mr-2"
                      onClick={() => handleAddToBasket(product)}
                    >
                      +
                    </button>
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded"
                      onClick={() => handleRemoveFromBasket(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Carts;
