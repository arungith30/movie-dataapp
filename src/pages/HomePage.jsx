import "./homepage.css";
import { useState, React } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  const handleSearch = () => {
    const fetchMovies = async (searchInput) => {
      if (!searchInput.trim()) {
        setError("Please enter a movie name!");
      }
      setError("");

      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=${
            process.env.REACT_APP_OMDB_API_KEY
          }&s=${searchInput}&page=${1}`
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
        if (error.response) {
          setError("API error: " + error.response.data.Error);
        } else {
          setError("An unknown error occurred.");
        }

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
          onKeyPress={handleKeyPress}
        />
        <button className="search-button " onClick={handleSearch}>
          Search
        </button>
      </div>
      <p className="error">{error}</p>
      <div>
        <div className="movies">
          {movies.map((movie) => (
            <MovieCard {...movie} key={movie.imdbID} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
