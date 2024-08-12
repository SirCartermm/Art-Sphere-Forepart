import React from 'react';
import './ArtistList.css';

function ArtistList({ artists }) {
  return (
    <section className="artist-list">
      <h2>Your Favorite Artists</h2>
      {artists.length > 0 ? (
        <ul>
          {artists.map((artist, index) => (
            <li key={index}>{artist}</li>
          ))}
        </ul>
      ) : (
        <p>No artists added yet.</p>
      )}
    </section>
  );
}

export default ArtistList;