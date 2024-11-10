import React, { useState } from 'react';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import OrderInfo from './components/OrderInfo';
import Cocktail from './components/Cocktail';
import './App.css';

function App() {
  const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);

  const handleProductSelect = (productIndex, qty) => {
    setSelectedProduct(products[productIndex]);
    setQuantity(qty);
  };

  return (
    <div className="App">
      <Header image="/logo192.png" title="Cocktail of the day" />
      <ProductForm products={products} onProductSelect={handleProductSelect} />
      <OrderInfo product={selectedProduct} quantity={quantity} />
      <Cocktail /> {/* Uusi Cocktail-komponentti */}
    </div>
  );
}

export default App;
