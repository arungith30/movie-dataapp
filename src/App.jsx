// src/App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";

import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
            <Route
              path="/favorites"
              element={
                <ProtectedRoute>
                  <FavoritesPage />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </FavoritesProvider>
    </AuthProvider>
  );
};

export default App;
