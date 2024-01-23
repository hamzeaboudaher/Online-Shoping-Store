import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Products({ products, setShoppingCart }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductClick = (product) => {
    const isProductSelected = selectedProducts.some((p) => p.id === product.id);

    if (isProductSelected) {
      setSelectedProducts((prevSelectedProducts) =>
        prevSelectedProducts.filter((p) => p.id !== product.id)
      );
    } else {
      setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, product]);
    }
  };

  const handleAddToCart = () => {
    console.log('Products added to cart:', selectedProducts);
    setShoppingCart((prevCart) => [...prevCart, ...selectedProducts]);
    setSelectedProducts([]);
  };

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">{product.price}$</p>
              <div className="product-actions">
                <button onClick={() => handleProductClick(product)}>
                  {selectedProducts.some((p) => p.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}
                </button>
                <Link to={`/products/${product.id}`} className="link-details">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No items found</p>
      )}
      <div>
        <button onClick={handleAddToCart}>Add Selected to Cart</button>
      </div>
    </div>
  );
}

export default Products;
