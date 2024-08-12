import React, { useState } from 'react';

function OrderTracking() {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState('');

  const handleTrackOrder = async (event) => {
    event.preventDefault();
    // Simulate API call
    const status = await fakeApiCall(`TrackOrder/${orderId}`);
    setOrderStatus(status);
  };

  return (
    <section className="order-tracking">
      <h2>Track Your Order</h2>
      <form onSubmit={handleTrackOrder}>
        <label htmlFor="orderId">Enter Order ID:</label>
        <input
          type="text"
          id="orderId"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          required
        />
        <button type="submit">Track Order</button>
      </form>
      {orderStatus && <div className="status-output">Order Status: {orderStatus}</div>}
    </section>
  );
}

// Simulated API call
const fakeApiCall = (endpoint) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (endpoint.includes('TrackOrder')) {
        resolve('Order shipped and in transit');
      } else {
        resolve('Unknown request');
      }
    }, 1000);
  });
};

export default OrderTracking;