import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Artwork.css';

// Sample artworks data
const artworksData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: `Artwork ${index + 1}`,
  artist: `Artist ${index + 1}`,
  imageUrl: `https://via.placeholder.com/300?text=Artwork+${index + 1}`,
  description: `This is a detailed description of Artwork ${index + 1}. It might describe the medium used, the inspiration behind the piece, or any other relevant information.`,
  price: (index + 1) * 100,
  date: new Date(2024, index % 12, index % 28 + 1).toLocaleDateString(),
  category: index % 3 === 0 ? 'Painting' : index % 3 === 1 ? 'Sculpture' : 'Photography',
  dimensions: `${index + 1} x ${index + 2} inches`,
  medium: 'Oil on canvas',
  galleryLocation: 'Gallery A'
}));

const Artwork = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    // Simulating an API call with placeholder data
    const fetchArtwork = async () => {
      // In a real application, this would be an API call
      // const response = await axios.get(`/api/artworks/${id}`);
      // setArtwork(response.data);
      const foundArtwork = artworksData.find(art => art.id === parseInt(id));
      setArtwork(foundArtwork);
    };

    fetchArtwork();
  }, [id]);

  if (!artwork) {
    return <div>Loading...</div>;
  }

  return (
    <div className="artwork-detail">
      <h1>{artwork.title}</h1>
      <img src={artwork.imageUrl} alt={artwork.title} className="artwork-image" />
      <div className="artwork-info">
        <p><strong>Artist:</strong> {artwork.artist}</p>
        <p><strong>Date:</strong> {artwork.date}</p>
        <p><strong>Category:</strong> {artwork.category}</p>
        <p><strong>Price:</strong> ${artwork.price}</p>
        <p><strong>Dimensions:</strong> {artwork.dimensions}</p>
        <p><strong>Medium:</strong> {artwork.medium}</p>
        <p><strong>Gallery Location:</strong> {artwork.galleryLocation}</p>
        <p><strong>Description:</strong> {artwork.description}</p>
        <button className="purchase-button">Purchase</button>
      </div>
    </div>
  );
};

export default Artwork;
