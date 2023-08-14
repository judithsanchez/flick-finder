import React, { useState } from 'react';
import Card from './Card';
import './App.css';

const API_URL = 'https://omdb-proxy.onrender.com';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movieList, setMovieList] = useState([]);

  const handleSearch = async () => {
    if (searchQuery.trim() !== '') {
      const response = await fetch(
        `${API_URL}?s=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      if (data.Search) {
        setMovieList(data.Search);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="App">
      <h1 className="App-title">Flick Finder</h1>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a movie"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {movieList.length > 0 && (
        <div className="movie-list">
          {movieList.map((movie) => (
            <Card key={movie.imdbID} movie={movie} apiUrl={API_URL} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
