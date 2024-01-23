import React, { useState } from 'react';

function HandleSearch({ products, setFilteredProducts }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filteredProducts);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleResetSearch = () => {
    setSearchTerm('');
    setFilteredProducts(products);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleResetSearch}>Reset</button>
    </div>
  );
}

export default HandleSearch;
