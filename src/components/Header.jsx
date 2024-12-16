import { NavLink } from "react-router-dom";
import "./header.css";
import { useState } from "react";
const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <div className="header">
        <div>
          <div className="logo-left">
            <NavLink className="logo" to="/">
              Movies
            </NavLink>
            <span className="material-symbols-outlined" onClick={handleClick}>
              menu
            </span>
          </div>
        </div>

        <div className="header-right">
          <nav
            className={clicked ? "navbar-mobile-open" : "navbar-mobile-close"}
          >
            <ul className="nav-links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "nonactive-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "nonactive-link"
                  }
                >
                  Favorites
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "nonactive-link"
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "nonactive-link"
                  }
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
