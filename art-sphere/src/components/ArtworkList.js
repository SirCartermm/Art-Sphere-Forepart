import React from 'react';
import './ArtworkList.css';

const artworks = [
  { id: 1, title: 'Starry Night', artist: 'Vincent van Gogh', price: '$1000' },
  { id: 2, title: 'Mona Lisa', artist: 'Leonardo da Vinci', price: '$1500' },
  { id: 3, title: 'The Persistence of Memory', artist: 'Salvador Dalí', price: '$1200' },
];

function ArtworkList({ onSelectArtwork }) {
  return (
    <section className="artwork-list">
      <h2>Available Artworks</h2>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id} onClick={() => onSelectArtwork(artwork)}>
            <h3>{artwork.title}</h3>
            <p>Artist: {artwork.artist}</p>
            <p>Price: {artwork.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ArtworkList;