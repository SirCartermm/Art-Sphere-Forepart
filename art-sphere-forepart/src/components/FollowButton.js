import React, { useState } from 'react';

const FollowButton = ({ artistId }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = async () => {
    try {
      const response = await fetch(`/api/follow/${artistId}`, {
        method: isFollowing ? 'DELETE' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include any necessary headers for authentication
        },
      });

      if (response.ok) {
        setIsFollowing(!isFollowing);
      } else {
        // Handle error response
        console.error('Failed to update follow status');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button onClick={handleFollowToggle}>
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowButton;