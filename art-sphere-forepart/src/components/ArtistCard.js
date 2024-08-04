import React from 'react';

const ArtistCard = ({ artist, isFollowing, onFollowToggle }) => {
  return (
    <div className="artist-card">
      <h3>{artist.name}</h3>
      <button onClick={() => onFollowToggle(artist.id)}>
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default ArtistCard;