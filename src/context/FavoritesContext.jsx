import { createContext, useEffect, useReducer } from "react";

export const FavoritesContext = createContext();

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      // Prevent duplicates by checking for existing imdbID
      if (state.find((movie) => movie.imdbID === action.payload.imdbID)) {
        return state;
      }
      return [...state, action.payload];
    case "REMOVE_FAVORITE": // Fixed typo here
      return state.filter(
        (element) => element.imdbID !== action.payload.imdbID
      );
    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, [], () => {
    const localData = localStorage.getItem("favorites"); // Fixed key
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};
