import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const ArtworkDetail = ({ artworkId }) => {
  const [artwork, setArtwork] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch artwork details
    const fetchArtwork = async () => {
      try {
        const response = await fetch(`/api/artworks/${artworkId}`);
        const data = await response.json();
        setArtwork(data.artwork);
        setComments(data.artwork.comments); // Assuming comments are part of artwork details
      } catch (error) {
        console.error('Error fetching artwork:', error);
      }
    };

    fetchArtwork();
  }, [artworkId]);

  const handleCommentSubmit = async (comment) => {
    try {
      const response = await fetch(`/api/artworks/${artworkId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include any necessary headers for authentication
        },
        body: JSON.stringify(comment),
      });

      if (response.ok) {
        const newComment = await response.json();
        setComments([...comments, newComment]);
      } else {
        console.error('Failed to submit comment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!artwork) return <div>Loading...</div>;

  return (
    <div className="artwork-detail">
      <h1>{artwork.title}</h1>
      <img src={artwork.imageUrl} alt={artwork.title} />
      <p>{artwork.description}</p>
      <h2>Comments and Reviews</h2>
      <CommentForm onSubmit={handleCommentSubmit} />
      <CommentList comments={comments} />
    </div>
  );
};

export default ArtworkDetail;