import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.text}</p>
          <p>Rating: {comment.rating}</p>
          <p>Posted by: {comment.userName}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;