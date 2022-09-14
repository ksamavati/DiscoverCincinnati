import React from 'react';
import { motion } from 'framer-motion';
import '../css/Parallax.css';
import { Link } from 'react-router-dom';

const LocationRenderer = (props) => {
	const handleTouch = event => {
		event.curentTarget.classList.toggle('hover')
	}

	return props.locationsArray.map(location => {
		return (
			<Link to={"/destination-" + location.id} state={{ loc: location }} key={location.id}>
		<motion.div
				layout
				animate={{opacity: 1}}
				initial={{opacity: 0}}
				exit={{opacity: 0}} className='para-col lg-col-3' onTouchStart={handleTouch}>
							<div className="para-container">
					<div className="para-front" style={{backgroundImage: "url("+ location.image +")"}}>
						<div className="para-inner">
							<p>{location.name}</p>
							<span>{location.address1}</span>
						  <span>{location.address2}</span>
						  <span>{location.phone}</span>
						</div>
					</div>
					{/* <div className="para-back" style={{backgroundImage: "url("+ location.image +")"}}> */}
					<div className="para-back" style={{background: "rgba(0, 0, 0, .55) url(" + location.image + ")"}}>
						<div className="para-inner">
						  <p>{location.description}</p>
							{/* <p><Link className="btn btn-primary" to={"/destination-" + location.id} state={{ loc: location }}>More &raquo;</Link></p> */}
							<p className="btn btn-primary" to={"/destination-" + location.id} state={{ loc: location }}>More &raquo;</p>
						</div>
					</div>
				</div>
		</motion.div>
			</Link>
		)
	});
}

export default LocationRenderer;