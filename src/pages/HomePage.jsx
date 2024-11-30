import "./homepage.css";
import { useState, React } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
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
        } else if (error.request) {
          setError("Network error. Please check your connection.");
        } else {
          setError("An unknown error occurred.");
        }

        console.log(error);
      } finally {
        setLoading(false);
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
              <Link to={`/movies/${movie.imdbID}`}>
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/150"
                  }
                  alt={`${movie.Title} poster`}
                />{" "}
                <h3>{movie.Title}</h3>
              </Link>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
