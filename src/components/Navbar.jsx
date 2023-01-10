import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Subnav from "./subcomponents/Subnav";

const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <header id="header" className="fixed-top" onMouseLeave={handleMouseOut}>
      <div className="container-flex navbar d-flex align-items-center px-4 my-navbar" style={{ backgroundColor: "#fff", zIndex: 50 }}>
        <h1 className="navbar-brand logo">
          <Link className="nav-link" to="/" onMouseOver={handleMouseOut}>
            Discover<b>Cincinnati</b>
          </Link>
        </h1>
        <nav id="navbar" className="navbar-nav mr-auto">
          <ul>
            <li className="nav-item">
              <Link className="nav-link" to="/" onMouseOver={handleMouseOut}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/locations" onMouseOver={handleMouseOver}>
                Locations
              </Link>
            </li>
            {/* <li> */}
            <li className="nav-item d-lg-none px-5 bg-light">
              <Link className="nav-link" to="/attractions">
                Attractions
              </Link>
            </li>
            <li className="nav-item d-lg-none px-5 bg-light">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item d-lg-none px-5 bg-light">
              <Link className="nav-link" to="/bars">
                Bars
              </Link>
            </li>
            <li className="nav-item d-lg-none px-5 bg-light">
              <Link className="nav-link" to="/breweries">
                Breweries
              </Link>
            </li>
            <li className="nav-item d-lg-none px-5 bg-light">
              <Link className="nav-link" to="/arts">
                Arts and Music
              </Link>
            </li>
            <li className="nav-item d-lg-none px-5 bg-light">
              <Link className="nav-link" to="/parks">
                Parks and Recreation
              </Link>
            </li>
            {/* </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/map" onMouseOver={handleMouseOut}>
                Map
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onMouseOver={handleMouseOut}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team" onMouseOver={handleMouseOut}>
                About the Team
              </Link>
            </li>
          </ul>
          <i id="hamburger" className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* <!-- .navbar --> */}
      </div>
      {isHovering && <Subnav />}
      {/* <Subnav /> */}
    </header>
  );
};

export default Navbar;
