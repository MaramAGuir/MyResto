// src/components/StarRating.js
import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import '../App.css'; // Utilisation d'un seul fichier CSS pour tout le projet

const StarRating = () => {
  const [rating, setRating] = useState(4.5);

  const ratingChanged = (newRating) => {
    setRating(newRating);
    // Vous pouvez envoyer la nouvelle note à votre serveur ou effectuer une autre action ici
    console.log(`Nouvelle note: ${newRating}`);
  };

  return (
    <div className="star-rating">
      <h2>Notez notre restaurant</h2>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={40}
        isHalf={true}
        value={rating}
        activeColor="#ffd700"
      />
      <p>Votre note : {rating}</p>
    </div>
  );
};

export default StarRating;
