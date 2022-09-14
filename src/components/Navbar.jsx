import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import Subnav from './Subnav';
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";


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
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><Link className="nav-link" to="/"
								onMouseOver={handleMouseOut}>Discover<b>Cincinnati</b></Link></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

      <nav id="navbar" className="navbar">
        <ul>
				<li className="">
							<Link className="nav-link" to="/" onMouseOver={handleMouseOut}>Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/locations" onMouseOver={handleMouseOver}>Locations</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/map" onMouseOver={handleMouseOut}>Map</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact" onMouseOver={handleMouseOut}>Contact</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/team" onMouseOver={handleMouseOut}>About the Team</Link>
						</li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
			{/* <!-- .navbar --> */}
    </div>
		{isHovering && <Subnav />}
		{/* <Subnav /> */}
  </header>
	)
}

export default Navbar