import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderConfirmation = () => {
  const { state } = useLocation();
  const { order } = state || {};

  if (!order) return <div>No order details available.</div>;

  return (
    <div className="order-confirmation">
      <h1>Order Confirmation</h1>
      <p><strong>Order ID:</strong> {order.id}</p>
      <p><strong>Artwork Title:</strong> {order.artworkTitle}</p>
      <p><strong>Price:</strong> ${order.price}</p>
      <p><strong>Purchase Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
      <p>Your payment was successful. Thank you for your purchase!</p>
    </div>
  );
};

export default OrderConfirmation;