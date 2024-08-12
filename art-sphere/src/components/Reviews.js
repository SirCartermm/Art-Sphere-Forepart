import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import './Review.css';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5555'
});

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [mechanics, setArtists] = useState([]);
  const [newReview, setNewReview] = useState({
    user_id: '',
    artist_id: '',
    rating: 0,
    feedback: ''
  });

  useEffect(() => {
    fetchReviews();
    fetchUsers();
    fetchArtists();
  }, []);

  const fetchReviews = () => {
    api.get('/reviews')
      .then(response => {
        console.log('Fetched reviews:', response.data);
        setReviews(response.data);
      })
      .catch(error => console.error('Error fetching reviews:', error));
  };

  const fetchUsers = () => {
    api.get('/users')
      .then(response => {
        console.log('Fetched users:', response.data);
        setUsers(response.data);
      })
      .catch(error => console.error('Error fetching users:', error));
  };

  const fetchArtists = () => {
    api.get('/artists')
      .then(response => {
        console.log('Fetched artists:', response.data);
        setArtists(response.data);
      })
      .catch(error => console.error('Error fetching artists:', error));
  };

  const getUserById = (id) => users.find(user => user.id === id);
  const getArtistById = (id) => mechanics.find(artist => artist.id === id); // Use `mechanics` here

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} color={index < rating ? '#ffc107' : '#e4e5e9'} />
    ));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting review:', newReview);
    api.post('/reviews', newReview)
      .then(response => {
        console.log('Added review:', response.data);
        setReviews([...reviews, response.data]);
        setNewReview({
          user_id: '',
          artist_id: '',
          rating: 0,
          feedback: ''
        });
      })
      .catch(error => console.error('Error adding review:', error));
  };

  return (
    <div className="review-container">
      <h2>Reviews</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <label>
          User:
          <select name="user_id" value={newReview.user_id} onChange={handleInputChange}>
            <option value="">Select User</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.first_name} {user.last_name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Artist:
          <select name="artist_id" value={newReview.artist_id} onChange={handleInputChange}>
            <option value="">Select Artist</option>
            {mechanics.map(artist => (
              <option key={artist.id} value={artist.id}>
                {artist.first_name} {artist.last_name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Rating:
          <div className="stars">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                color={index < newReview.rating ? '#ffc107' : '#e4e5e9'}
                onClick={() => handleRatingChange(index + 1)}
              />
            ))}
          </div>
        </label>
        <label>
          Feedback:
          <textarea
            name="feedback"
            value={newReview.feedback}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Review</button>
      </form>
      <div className="review-cards">
        {reviews.map(review => {
          const user = getUserById(review.user_id);
          const artist = getArtistById(review.artist_id);

          return (
            <div className="review-card" key={review.id}>
              <div className="rating">
                <h3>Rating: {review.rating}</h3>
                <div className="stars">{renderStars(review.rating)}</div>
              </div>
              <p><strong>Feedback:</strong> {review.feedback}</p>
              <p><strong>User:</strong> {user ? `${user.first_name} ${user.last_name}` : 'Loading...'}</p>
              <p><strong>Artist:</strong> {artist ? `${artist.first_name} ${artist.last_name}` : 'Loading...'}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
