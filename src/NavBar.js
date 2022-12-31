import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import "./navbar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <img src={logo} alt="" height="50px" className="img" />
        <div className="links">
          <Link to="/">all</Link>
          <Link to="/new-arrival">Featured</Link>
          <Link to="/featured">Featured</Link>
        </div>
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="search for products...."
          className="search"
        />
        <span class="material-symbols-outlined abss">search</span>
      </div>

      <div className="circles">
        <span class="material-symbols-outlined">shopping_cart</span>

        <span class="material-symbols-outlined">circle</span>
      </div>
    </div>
  );
};

export default NavBar;
