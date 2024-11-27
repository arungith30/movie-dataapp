import { Link } from "react-router-dom";
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
            <Link className="logo" to="/">
              Movies
            </Link>
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
