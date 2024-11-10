import React, { useState } from 'react';

const ProductForm = ({ products, onProductSelect }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(0, prev + amount));
  };

  const handleProductChange = (e) => {
    const productIndex = e.target.value;
    onProductSelect(productIndex, quantity);
  };

  return (
    <div>
      <select onChange={handleProductChange}>
        {products.map((product, index) => (
          <option key={index} value={index}>
            {product.name}
          </option>
        ))}
      </select>
      <div>
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span> {quantity} </span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
    </div>
  );
};

export default ProductForm;
