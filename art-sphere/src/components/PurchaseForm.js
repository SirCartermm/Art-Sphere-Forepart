import React, { useState } from 'react';
import './PurchaseForm.css';

function PurchaseForm({ artwork, onPurchase }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email) {
      onPurchase();
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <section className="purchase-form">
      <h2>Purchase {artwork.title}</h2>
      <form onSubmit={handleSubmit}>
        <p><strong>Artist:</strong> {artwork.artist}</p>
        <p><strong>Price:</strong> {artwork.price}</p>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Complete Purchase</button>
      </form>
    </section>
  );
}

export default PurchaseForm;