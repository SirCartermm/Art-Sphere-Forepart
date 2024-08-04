import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './styles.css';  // Import your consolidated CSS

// Stripe setup
const stripePromise = loadStripe('your-publishable-key-from-stripe');

// Components
const ArtworkDetail = ({ match }) => {
  const [artwork, setArtwork] = React.useState(null);
  const [showPurchaseForm, setShowPurchaseForm] = React.useState(false);

  React.useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const response = await fetch(`/api/artworks/${match.params.artworkId}`);
        const data = await response.json();
        setArtwork(data.artwork);
      } catch (error) {
        console.error('Error fetching artwork:', error);
      }
    };

    fetchArtwork();
  }, [match.params.artworkId]);

  const handlePurchaseClick = () => {
    setShowPurchaseForm(true);
  };

  if (!artwork) return <div>Loading...</div>;

  return (
    <div className="artwork-detail">
      <h1>{artwork.title}</h1>
      <img src={artwork.imageUrl} alt={artwork.title} />
      <p>{artwork.description}</p>
      <p><strong>Price:</strong> ${artwork.price}</p>
      {showPurchaseForm ? (
        <PurchaseForm artwork={artwork} />
      ) : (
        <button onClick={handlePurchaseClick}>Purchase</button>
      )}
    </div>
  );
};

const PurchaseForm = ({ artwork }) => {
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
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

const TrackOrders = () => {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
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
              <p><strong>Artwork Title:</strong> {order.artworkTitle}</p>
              <p><strong>Price:</strong> ${order.price}</p>
              <a href={`/certificates/${order.id}`}>View Certificate</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const DigitalCertificate = ({ match }) => {
  const [certificate, setCertificate] = React.useState(null);

  React.useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const response = await fetch(`/api/orders/${match.params.orderId}`);
        const data = await response.json();
        setCertificate(data.order);
      } catch (error) {
        console.error('Error fetching certificate:', error);
      }
    };

    fetchCertificate();
  }, [match.params.orderId]);

  if (!certificate) return <div>Loading...</div>;

  return (
    <div className="digital-certificate">
      <h1>Digital Certificate</h1>
      <p><strong>Order ID:</strong> {certificate.id}</p>
      <p><strong>Artwork Title:</strong> {certificate.artworkTitle}</p>
      <p><strong>Price:</strong> ${certificate.price}</p>
      <p><strong>Purchase Date:</strong> {new Date(certificate.date).toLocaleDateString()}</p>
    </div>
  );
};

// Main App Component
const App = () => (
  <Router>
    <Switch>
      <Route path="/artworks/:artworkId" component={ArtworkDetail} />
      <Route path="/order-confirmation" component={OrderConfirmation} />
      <Route path="/track-orders" component={TrackOrders} />
      <Route path="/certificates/:orderId" component={DigitalCertificate} />
      {/* Add other routes here */}
    </Switch>
  </Router>
);

export default App;

// styles.css (Consolidated CSS styles for components)