'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import './FeedbackList.css';

const FeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Replace 'https://api.example.com/feedback' with your API endpoint URL
      const response = await axios.get('http://localhost:3000/api/feedback/get-feedback');
      setFeedbackList(response.data.feedback);
    } catch (error) {
      console.error('Error fetching feedback data', error);
    }
  };

  const handleEdit = (feedbackId) => {
    // Implement edit logic here, if needed
    console.log('Edit feedback with ID:', feedbackId);
  };

  const handleDelete = async (feedbackId) => {
    try {
      // Replace 'https://api.example.com/feedback' with your API endpoint URL
      await axios.delete(`https://api.example.com/feedback/${feedbackId}`);
      // After successful deletion, update the feedback list
      const updatedFeedbackList = feedbackList.filter(
        (feedback) => feedback.id !== feedbackId
      );
      setFeedbackList(updatedFeedbackList);
    } catch (error) {
      console.error('Error deleting feedback', error);
    }
  };

  return (
    <div className="feedback-list">
      <h2>All Feedback</h2>
      {feedbackList.map((feedbackData) => (
        <FeedbackCard
          key={feedbackData.id}
          feedback={feedbackData.feedback}
          email={feedbackData.email}
          onEdit={() => handleEdit(feedbackData._id)}
          onDelete={() => handleDelete(feedbackData._id)}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
