import React from "react";
import MovieCard from "../components/MovieCard";

const FavoritesPage = () => {
  const localData = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <>
      {localData.length > 0 ? (
        <div className="movies">
          {localData.map((movie) => (
            <MovieCard {...movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <p>No favorites yet</p>
        </div>
      )}
    </>
  );
};

export default FavoritesPage;
