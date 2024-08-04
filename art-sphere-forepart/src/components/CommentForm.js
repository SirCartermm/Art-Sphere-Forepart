import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(1); // Default rating

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit({ text, rating });
      setText('');
      setRating(1);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Leave a comment..."
        required
      />
      <div>
        <label>
          Rating:
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            {[1, 2, 3, 4, 5].map((rate) => (
              <option key={rate} value={rate}>{rate}</option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;