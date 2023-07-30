import React from 'react';
import './FeedbackCard.css';

const FeedbackCard = ({ feedback, email, onEdit, onDelete }) => {
  return (
    <div className="feedback-card">
      <div className="feedback-content">
        <div className="email">Email: {email}</div>
        <div className="feedback">Feedback: {feedback}</div>
      </div>
      <div className="feedback-actions">
        <button className="edit-btn" onClick={onEdit}>Edit</button>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default FeedbackCard;
