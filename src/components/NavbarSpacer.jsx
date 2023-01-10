import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const NavbarSpacer = () => {
  return (
    <div id="navbar-spacer">
      <div className="container-flex navbar d-flex align-items-center px-4 my-navbar" style={{ backgroundColor: "#fff", zIndex: 50 }}>
        <h1 className="navbar-brand logo">
          <Link className="nav-link opacity-0" to="/">
            Discover<b>Cincinnati</b>
          </Link>
        </h1>
        {/* <!-- .navbar --> */}
      </div>
      {/* <Subnav /> */}
    </div>
  );
};

export default NavbarSpacer;
