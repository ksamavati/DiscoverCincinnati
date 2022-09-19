import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import Subnav from './subcomponents/Subnav';
import Helmet from 'react-helmet';

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
			<div className="container-flex navbar d-flex align-items-center px-4 my-navbar" style={{ backgroundColor: '#fff', zIndex: 50 }}>
				{/* <div className="navbar navbar-expand-lg"> */}
				<h1 className="navbar-brand logo">
					<Link className="nav-link" to="/" onMouseOver={handleMouseOut}>
						Discover<b>Cincinnati</b>
					</Link>
				</h1>
				{/* <nav id="navbar" className="navbar navbar-expand-lg"> */}
				<nav id="navbar" className="navbar-nav mr-auto">
					<ul>
						<li className="nav-item">
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
					<i id="hamburger" className="bi bi-list mobile-nav-toggle"></i>
					{/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button> */}
				</nav>
				{/* <!-- .navbar --> */}
			</div>
			{isHovering && <Subnav />}
			{/* <Subnav /> */}

			<Helmet>
				<script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
				<script src="/scripts/homepage/main.js"></script>
			</Helmet>
		</header>
	)
}

export default Navbar