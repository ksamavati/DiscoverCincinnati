import React from 'react';
import { Link } from 'react-router-dom';

const Subnav = () => {
	return (
    <div className="container d-flex align-items-center">

      <i className="logo me-auto"></i>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

      <nav id="subnav" className="navbar subnav order-last order-lg-0">
        <ul>
						<li className="nav-item">
						<Link className="nav-link" to="/attractions">Attractions</Link>
						</li>
						<li className="nav-item">
						<Link className="nav-link" to="/sports">Sports</Link>
						</li>
						<li className="nav-item">
						<Link className="nav-link" to="/bars">Bars</Link>
						</li>
						<li className="nav-item">
						<Link className="nav-link" to="/breweries">Breweries</Link>
						</li>
						<li className="nav-item">
						<Link className="nav-link" to="/arts">Arts and Music</Link>
						</li>
						<li className="nav-item">
						<Link className="nav-link" to="/parks">Parks and Recreation</Link>
						</li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
	)
}

export default Subnav