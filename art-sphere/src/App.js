import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ArtGallery from './components/ArtGallery';
import Artwork from './components/Artwork';
import OrderTracking from './components/OrderTracking';
import CertificateRetrieval from './components/CertificateRetrieval';
import ArtworkList from './components/ArtworkList';
import PurchaseForm from './components/PurchaseForm';
import AddArtist from './components/AddArtist';
import ArtistList from './components/ArtistList';

function App() {
  // State for selected artwork
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  // State for artists
  const [artists, setArtists] = useState([]);

  // Function to handle artwork selection
  const handleSelectArtwork = (artwork) => {
    setSelectedArtwork(artwork);
  };

  // Function to handle the purchase of the artwork
  const handlePurchase = () => {
    alert('Purchase completed successfully!');
    setSelectedArtwork(null); // Clear selection after purchase
  };

  // Function to add a new artist
  const addArtist = (newArtist) => {
    setArtists([...artists, newArtist]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for Home page */}
          <Route path="/art-gallery" element={<ArtGallery />} /> {/* Route for ArtGallery page */}
          <Route path="/art-gallery/:id" element={<Artwork />} /> {/* Route for Artwork page with ID */}
        </Routes>
        <header className="App-header">
          <h1>Order Tracking & Digital Certificates</h1>
        </header>
        <main>
          <OrderTracking />
          <CertificateRetrieval />
        </main>
        <header className="App-header">
          <h1>Purchase Artwork</h1>
        </header>
        <main>
          <ArtworkList onSelectArtwork={handleSelectArtwork} />
          {selectedArtwork && (
            <PurchaseForm
              artwork={selectedArtwork}
              onPurchase={handlePurchase}
            />
          )}
        </main>
        <header className="App-header">
          <h1>Follow Your Favorite Artists</h1>
        </header>
        <main>
          <AddArtist onAddArtist={addArtist} />
          <ArtistList artists={artists} />
        </main>
      </div>
    </Router>
  );
}

export default App;