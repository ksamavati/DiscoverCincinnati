import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Footer.css';


const Footer = () => {
	return (
		<footer id="footer" className="d-flex flex-row justify-content-evenly align-items-center text-center flex-wrap py-2" style={{ backgroundColor: '#eef0ef' }}>
			<div className='flex-person ms-3'>
				This website was built as the final capstone project of a group of 3 students who have graduated from Kable Academy's full-stack web development program in September 2022.
			</div>
			<div className='d-flex flex-column flex-person align-items-center'>
				<h5>Kayvon Samavati
				</h5>
				<div className="rounded-social-buttons my-2">
					<a className="social-button linkedin" href="https://www.linkedin.com/in/ksamavati/" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-linkedin"></i></a>
					<a className="social-button github" href="https://github.com/ksamavati" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-github"></i></a>
					<a className="social-button portfolio" href="https://www.ksamavati.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fas fa-briefcase"></i></a>
				</div>
				<div className="d-flex flex-row justify-content-around" style={{ width: "194px" }}><span>LinkedIn</span><span>GitHub</span><span>Portfolio</span>
				</div>
			</div>
			<div className='d-flex flex-column flex-person align-items-center'>
				<h5>Jonas Appau
				</h5>
				<div className="rounded-social-buttons my-2">
					<a className="social-button linkedin" href="https://www.linkedin.com/in/jonas-appau-8a7825237/" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-linkedin"></i></a>
					<a className="social-button github" href="https://github.com/Jonasappau16" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-github"></i></a>
					<a className="social-button portfolio" href="#header" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fas fa-briefcase"></i></a>
				</div>
				<div className="d-flex flex-row justify-content-around" style={{ width: "194px" }}><span>LinkedIn</span><span>GitHub</span><span>Portfolio</span>
				</div>
			</div>
			<div className='d-flex flex-column flex-person align-items-center'>
				<h5>Vera Opoku
				</h5>
				<div className="rounded-social-buttons my-2">
					<a className="social-button linkedin" href="https://www.linkedin.com/in/vera-opoku-302437244/" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-linkedin"></i></a>
					<a className="social-button github" href="https://github.com/Bigracksvee" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-github"></i></a>
					<a className="social-button portfolio" href="#header" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fas fa-briefcase"></i></a>
				</div>
				<div className="d-flex flex-row justify-content-around" style={{ width: "194px" }}><span>LinkedIn</span><span>GitHub</span><span>Portfolio</span>
				</div>
			</div>
			<div className='flex-person me-3'>
				<h5 class="py-4" style={{ verticalAlign: 'middle', }}>
					<Link to="/team">Learn more about us <span style={{ translate: "5px" }}><i className="fas fa-angles-right"></i></span></Link>
				</h5>


			</div>
			{/* <div className="rounded-social-buttons">
      <a className="social-button linkedin" href="https://www.linkedin.com/company/city-of-cincinnati/" target="_blank"   rel="noreferrer" aria-label="Facebook"><i className="fab fa-linkedin"></i></a>
      <a className="social-button github" href="https://www.pinterest.com/pin/342555115378863777/" target="_blank"   rel="noreferrer" aria-label="Facebook"><i className="fab fa-github"></i></a>
      <a className="social-button portfolio" href="https://www.reddit.com/r/cincinnati/" target="_blank"   rel="noreferrer" aria-label="Facebook"><i className="fas fa-briefcase"></i></a>
      </div> */}
		</footer>
	)
}

export default Footer