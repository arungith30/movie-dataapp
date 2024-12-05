import React from "react";
import { Link } from "react-router-dom";
const MovieCard = ({ imdbID, Poster, Title, Year }) => {
  console.log();
  return (
    <div className="movie">
      <Link to={`/movies/${imdbID}`}>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/150"}
          alt={`${Title} poster`}
        />
        <h3>{Title}</h3>
      </Link>
      <p>{Year}</p>
    </div>
  );
};

export default MovieCard;
