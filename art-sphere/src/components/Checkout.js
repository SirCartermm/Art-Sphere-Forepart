import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, totalAmount } = useContext(CartContext) || {};
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  if (!cartItems) {
    return <p>Loading...</p>; 
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handleCheckout = () => {
    
    console.log('Checking out with details:', paymentDetails, cartItems, totalAmount);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="cart-summary">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          ))
        )}
        <h3>Total: ${totalAmount}</h3>
      </div>
      <div className="payment-details">
        <h3>Payment Details</h3>
        <input
          type="text"
          name="name"
          placeholder="Name on Card"
          value={paymentDetails.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentDetails.cardNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="expiry"
          placeholder="Expiry Date (MM/YY)"
          value={paymentDetails.expiry}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={paymentDetails.cvv}
          onChange={handleChange}
        />
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
