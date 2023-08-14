import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ movie, apiUrl }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="movie-card" onClick={() => setModalOpen(true)}>
        <img
          className="movie-card__image"
          src={movie.Poster}
          alt={`${movie.Title} Poster`}
        />
      </div>
      {modalOpen && (
        <Modal
          movie={movie}
          onClose={() => setModalOpen(false)}
          apiUrl={apiUrl}
        ></Modal>
      )}
    </>
  );
};

export default Card;
