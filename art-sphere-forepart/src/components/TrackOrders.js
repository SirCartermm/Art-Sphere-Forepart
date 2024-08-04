import React, { useState, useEffect } from 'react';

const TrackOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders for the current user
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders');
        const data = await response.json();
        setOrders(data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="track-orders">
      <h1>Track Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="order-item">
              <h2>Order ID: {order.id}</h2>
              <p>Status: {order.status}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              <p>Total: ${order.total}</p>
              <a href={`/certificates/${order.id}`} target="_blank" rel="noopener noreferrer">
                View Digital Certificate
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TrackOrders;