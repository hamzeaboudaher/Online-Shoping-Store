import React, { useContext } from 'react';
import ShopData from '../Context-Api-Reducer/Context';
import { getCartTotalPrice } from '../Context-Api-Reducer/Usereducer';

function Carts() {
  const { products, dispatch } = useContext(ShopData);

  const removeFromCart = (productId) => {
    dispatch({ type: 'RemoveFromBasket', payload: productId });
  };

  // Berechne den Gesamtpreis neu, indem die Funktion getCartTotalPrice aktualisiert wird
  const cartTotalPrice = getCartTotalPrice(products);

  return (
    <>
      {products.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-32 object-cover mb-4 rounded-md"
          />
          <p>Preis: ${item.price.toFixed(2)}</p>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded-md"
            onClick={() => removeFromCart(item.id)}
          >
            Remove from Cart (-)
          </button>
        </div>
      ))}

      <div>
        {/* Überprüfe, ob cartTotalPrice eine gültige Zahl ist, bevor sie angezeigt wird */}
        {isNaN(cartTotalPrice) ? (
          <p>Gesamtpreis im Warenkorb: $0.00</p>
        ) : (
          <p>Gesamtpreis im Warenkorb: ${cartTotalPrice.toFixed(2)}</p>
        )}
      </div>
    </>
  );
}

export default Carts;