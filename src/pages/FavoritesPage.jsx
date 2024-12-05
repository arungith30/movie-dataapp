import React from "react";
import { Link } from "react-router-dom";
const FavoritesPage = () => {
  const localData = JSON.parse(localStorage.getItem("favorites")) || [];
  console.log(localData);
  return (
    <>
      {localData.length > 0 ? (
        <div className="movies">
          {localData.map((movie) => (
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
      ) : (
        <div>
          <p>No favorites yet</p>
        </div>
      )}
    </>
  );
};

export default FavoritesPage;
