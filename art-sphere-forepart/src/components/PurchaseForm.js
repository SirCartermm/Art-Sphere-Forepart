import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key-from-stripe');

const PurchaseForm = ({ artwork }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      'client-secret-from-your-backend',
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent.status === 'succeeded') {
      setMessage('Payment successful! Your order has been placed.');
      // Optionally redirect to an order confirmation page or clear the form
    } else {
      setMessage('Payment failed. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="purchase-form">
      <h2>Complete Your Purchase</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

const PurchaseFormWrapper = ({ artwork }) => (
  <Elements stripe={stripePromise}>
    <PurchaseForm artwork={artwork} />
  </Elements>
);

export default PurchaseFormWrapper;