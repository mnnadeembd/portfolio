import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log("Searching for:", search);
    // Here API call / filter logic will set in future
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">

        {/* BRAND */}
        <a href="#home" className="navbar-brand">
          @Dashboard
        </a>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto nav-links">

            {/* SEARCH BOX */}
            <li className="search-box">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={handleSearch}>🔍</button>
            </li>

            {/* LOGOUT */}
            <li>
              <button
                className="logout-btn"
                onClick={() => navigate("/")}
              >
                Logout
              </button>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;