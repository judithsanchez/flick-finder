import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ movie }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="movie-card" onClick={() => setModalOpen(true)}>
        <img src={movie.Poster} alt={`${movie.Title} Poster`} />
        <h2>{movie.Title}</h2>
      </div>
      {modalOpen && (
        <Modal movie={movie} onClose={() => setModalOpen(false)}></Modal>
      )}
    </>
  );
};

export default Card;
