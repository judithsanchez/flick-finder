import React, { useState, useEffect } from 'react';

const API_URL = 'http://lvh.me:3000/';

const Modal = ({ movie, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `${API_URL}?t=${encodeURIComponent(movie.Title)}`
      );
      const data = await response.json();
      setMovieDetails(data);
    };

    if (!movieDetails) {
      fetchMovieDetails();
      //alert('making api call');
    }
  }, []);

  return (
    <div className="modal-container">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ❌
        </button>

        {movieDetails && (
          <>
            <h2>{movieDetails.Title}</h2>
            <p>Year: {movieDetails.Year}</p>
            <p>Runtime: {movieDetails.Runtime}</p>
            <p>Genre: {movieDetails.Genre}</p>
            <p>Director: {movieDetails.Director}</p>
            <p>Actors: {movieDetails.Actors}</p>
            <p>Plot: {movieDetails.Plot}</p>
            <p>IMDb Rating: {movieDetails.imdbRating}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
