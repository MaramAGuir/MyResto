// RatingPopup.js
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReactStars from 'react-rating-stars-component';

const RatingPopup = ({ show, onClose }) => {
  const [rating, setRating] = useState(0);
  const [ratingConfirmed, setRatingConfirmed] = useState(false);

  const ratingChanged = (newRating) => {
    setRating(newRating);
    // You can perform additional actions here, like sending the rating to your backend
    console.log(`Rated: ${newRating}`);
  };

  const handleConfirmRating = () => {
    // Simulate rating submission or any other action
    setRatingConfirmed(true);

    // Automatically close the popup after 1 second
    setTimeout(() => {
      setRatingConfirmed(false);
      onClose();
    }, 1000);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Rate Your Experience</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>How would you rate your experience with our service?</p>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={40}
          isHalf={true}
          value={rating}
          activeColor="#ffd700"
        />
        <p>{rating}</p>
        {ratingConfirmed && <p>Rating success! Thanks!!</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleConfirmRating}>
          Confirm Rating
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RatingPopup;
