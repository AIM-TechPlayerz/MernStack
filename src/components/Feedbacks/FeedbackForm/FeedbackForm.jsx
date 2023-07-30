"use client";
import React, { useState } from "react";
import axios from "axios";
import "./FeedbackForm.css"; // Import the CSS file containing classnames

const FeedbackForm = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log({
      email,
      feedback,
    });

    try {
      // Replace 'https://api.example.com/feedback' with your API endpoint URL
      const response = await axios.post(
        "http://localhost:3000/api/feedback/add-feedback",
        {
          email,
          feedback,
        }
      );
      console.log("this is a response", response);
      setSubmitSuccess(true);
      setEmail("");
      setFeedback("");
    } catch (error) {
      setSubmitError("Failed to submit feedback. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className={isSubmitting ? "submit-btn disabled" : "submit-btn"}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        {submitSuccess ? (
          <div className="success-message">
            Feedback submitted successfully!
          </div>
        ) : submitError ? (
          <div className="error-message">{submitError}</div>
        ) : null}
      </form>
    </div>
  );
};

export default FeedbackForm;
