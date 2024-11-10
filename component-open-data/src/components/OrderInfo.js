import React from 'react';

const OrderInfo = ({ product, quantity }) => {
  if (!product) return null;

  const totalPrice = product.price * quantity;

  return (
    <div>
      <h2>Order Info</h2>
      <p>Product: {product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default OrderInfo;
