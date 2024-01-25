
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import ShopData from '../Context-Api-Reducer/Context';
import { getCartTotalPrice } from '../Context-Api-Reducer/Usereducer';

function Products() {
  const { category } = useParams();
  const { data, addToBasket , dispatch , products} = useContext(ShopData);

  // Filter products based on the category
  const filteredData = category
    ? data.filter((item) => item.category === category)
    : data;

    const handleAddToBasket = (product) => {
      addToBasket(product);
    };

    const handleRemoveFromBasket = (productId) => {
      dispatch({ type: 'RemoveFromBasket', payload: productId });
    };

    const cartTotalPrice = getCartTotalPrice(products);


  return (
    <>
      <aside className="border-black border-solid border-2 h-full absolute left-0 top-0 w-80">
      <nav >
   
    <Link className='text-red mr-5' to="/products/computer">ca</Link>
    <Link className='text-red mr-5' to="/products/desk">Desk</Link>
    <Link className='text-red mr-5' to="/products/tshirt">Tshirt</Link>
   </nav>
      </aside>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 shadow-md rounded-md transition-transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 max-h-20 overflow-hidden">
              {item.description}
            </p>
            <div className="mt-4">
              <span className="text-green-500 font-bold">${item.price}</span>
              <button
                className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-md"
                onClick={() => handleAddToBasket(item)}
              >
                Add to Cart (+)
              </button>

              <button
                className="ml-2 bg-red-500 text-white px-3 py-1 rounded-md"
                onClick={() => handleRemoveFromBasket(item.id)}
              >
                Remove from Cart (-)
              </button>

              
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2>Gesamtpreis im Warenkorb: ${cartTotalPrice.toFixed(2)}</h2>
      </div>
    </>
  );
}

export default Products;
