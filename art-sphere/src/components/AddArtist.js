import React, { useState } from 'react';
import './AddArtist.css';

function AddArtist({ onAddArtist }) {
  const [artistName, setArtistName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (artistName) {
      onAddArtist(artistName);
      setArtistName('');
    }
  };

  return (
    <section className="add-artist">
      <h2>Add a Favorite Artist</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="artistName">Artist Name:</label>
        <input
          type="text"
          id="artistName"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          required
        />
        <button type="submit">Add Artist</button>
      </form>
    </section>
  );
}

export default AddArtist;