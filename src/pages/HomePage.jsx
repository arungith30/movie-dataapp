import "./homepage.css";
import { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearch = (element) => {
    const fetchMovies = async (searchInput, page = 1) => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=${"9c66f674"}&s=${searchInput}&page=${page}`
        );

        console.log(response.data);
      } catch (error) {
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
          onChange={handleInputChange}
          type="text"
        />
        <button className="search-button " onClick={handleSearch(searchInput)}>
          Search
        </button>
      </div>
    </div>
  );
};

export default HomePage;
