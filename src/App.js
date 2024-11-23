// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={<HomePage />} />
        <Route path="/movies/:id" component={<MovieDetailsPage />} />
        <Route path="/favorites" component={<FavoritesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
