import React, { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';
import FollowButton from './FollowButton';

const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    // Fetch artists from API
    const fetchArtists = async () => {
      try {
        const response = await fetch('/api/artists');
        const data = await response.json();
        setArtists(data.artists);
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };

    fetchArtists();
  }, []);

  const handleFollowToggle = (artistId) => {
    // Optionally handle follow toggle at this level
    // For example, you might update local state or make an API call
  };

  return (
    <div className="artist-list">
      {artists.map((artist) => (
        <ArtistCard
          key={artist.id}
          artist={artist}
          isFollowing={false} // This should come from state or context
          onFollowToggle={handleFollowToggle}
        />
      ))}
    </div>
  );
};

export default ArtistList;