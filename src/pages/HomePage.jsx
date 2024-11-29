import "./homepage.css";
import { useState } from "react";
import axios from "axios";
import React from "react";

const HomePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const fetchMovies = async (searchInput) => {
      if (!searchInput.trim()) {
        setError("Please enter a movie name!");
        return;
      }
      setError("");

      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=${"9c66f674"}&s=${searchInput}&page=${1}`
        );

        if (response.data.Response === "True") {
          setMovies(response.data.Search);

          return response.data.Search;
        } else {
          setMovies([]);
          setError(response.data.Error);
        }
        console.log(response.data.Search);
      } catch (error) {
        setError("Movie not found. Please try again .");
        console.log(error);
      }
    };

    fetchMovies(searchInput);
  };

  return (
    <div className="home">
      <div className="search-container">
        <input
          className="search-bar"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="type here to search"
          type="text"
        />
        <button className="search-button " onClick={handleSearch}>
          Search
        </button>
      </div>
      <p className="error">{error}</p>
      <div>
        <div className="movies">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movie">
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/150"
                }
                alt={`${movie.Title} poster`}
              />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
