// src/components/ArtworkDetail.js
import React, { useState, useEffect } from 'react';
import PurchaseForm from './PurchaseForm';

const ArtworkDetail = ({ artworkId }) => {
  const [artwork, setArtwork] = useState(null);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const response = await fetch(`/api/artworks/${artworkId}`);
        const data = await response.json();
        setArtwork(data.artwork);
      } catch (error) {
        console.error('Error fetching artwork:', error);
      }
    };

    fetchArtwork();
  }, [artworkId]);

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

export default ArtworkDetail;