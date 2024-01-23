import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import HandleSearch from './components/HandleSearch';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <ul>
        <li>
          <NavLink to="/" style={({ isActive }) => (isActive ? { color: 'red' } : {})}>
            {({ isActive }) => (isActive ? 'Home' : 'Home')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/products">Cart</NavLink>
        </li>
      </ul>
      <HandleSearch products={products} setFilteredProducts={setFilteredProducts} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          index
          element={<Products products={filteredProducts} setShoppingCart={setShoppingCart} />}
        />
      </Routes>
    </>
  );
}

export default App;
