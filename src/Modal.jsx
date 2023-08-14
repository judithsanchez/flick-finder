import React, { useState, useEffect } from 'react';

const Modal = ({ movie, onClose, apiUrl }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `${apiUrl}?t=${encodeURIComponent(movie.Title)}`
      );
      const data = await response.json();
      setMovieDetails(data);
    };

    if (!movieDetails) {
      fetchMovieDetails();
    }
  }, [movie, apiUrl, movieDetails]);

  return (
    <div className="modal-container">
      <div className="modal">
        <button className="modal__close-btn" onClick={onClose}>
          ❌
        </button>

        {movieDetails && (
          <div className="modal__content">
            <img
              className="modal__poster"
              src={movieDetails.Poster}
              alt={`${movieDetails.Title} Poster`}
            />
            <div className="modal__info">
              <h2 className="modal__title">{movieDetails.Title}</h2>
              <p className="modal__year">Year: {movieDetails.Year}</p>
              <p className="modal__runtime">Runtime: {movieDetails.Runtime}</p>
              <p className="modal__genre">Genre: {movieDetails.Genre}</p>
              <p className="modal__director">
                Director: {movieDetails.Director}
              </p>
              <p className="modal__actors">Actors: {movieDetails.Actors}</p>
              <p className="modal__plot">Plot: {movieDetails.Plot}</p>
              <p className="modal__rating">
                IMDb Rating: {movieDetails.imdbRating}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
