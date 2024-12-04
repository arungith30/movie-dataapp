import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./moviedetails.css";
import { FavoritesContext } from "../context/FavoritesContext";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { favorites, dispatch } = useContext(FavoritesContext);

  const fetchMovieDetails = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      );
      setMovie(response.data);
    } catch (err) {
      setError("Failed to fetch movie details. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleAddToFavorites = () => {
    // const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.find((fav) => fav.imdbID === movie.imdbID)) {
      alert(`${movie.Title} is already in favorites.`);
    } else {
      //  localStorage.setItem("favorites", JSON.stringify([...favorites, movie]));
      dispatch({ type: "ADD_FAVORITE", payload: movie });
      alert(`${movie.Title} has been added to favorites.`);
    }
  };

  return (
    <div className="movie-details">
      <h1>
        {movie.Title} ({movie.Year})
      </h1>
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300"
        }
        alt={movie.Title}
      />
      <p>
        <strong>Plot:</strong>{" "}
        {movie.Plot === "N/A" ? "Sorry Not available." : movie.Plot}
      </p>
      <p>
        <strong>Runtime:</strong> {movie.Runtime}
      </p>
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Director:</strong> {movie.Director}
      </p>
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
    </div>
  );
};

export default MovieDetailsPage;
