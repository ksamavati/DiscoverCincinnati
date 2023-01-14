import React from "react";
import { useLayoutEffect } from "react";
import "../css/Contact.css";

const Contact = () => {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		// <main style={{ flexGrow: "1" }}>
		<main className="contact-page-component">
			<section className="contact-master-container">
				<div className="contact-inner container-fluid d-flex col-md-11 offset-md-1">
					<div className="row overflow-hidden main-form">
						<div className="col-lg-10">
							<div className="contact-form-inner">
								<div className="contact-field">
									<h3>Contact Us</h3>
									<p>Feel free to contact us any time. We will get back to you as soon as we can!</p>
									<input type="text" className="form-control form-group" placeholder="Name" />
									<input type="text" className="form-control form-group" placeholder="Email" />
									<textarea className="form-control form-group" placeholder="Message"></textarea>
									<button className="contact-form-submit">Send</button>
								</div>
							</div>
						</div>
						<div className="col-lg-2 px-0 socials-strip">
							<div className="right-contact-social-icon d-flex align-items-end justify-content-center">
								<div className="social-item-inner d-flex py-3">
									<li>
										<a href="https://www.facebook.com/DowntownCincinnati">
											<i className="fab fa-facebook-square tiny-social"></i>
										</a>
									</li>
									<li>
										<a href="https://www.instagram.com/city_of_cincinnati/?hl=en">
											<i className="fab fa-instagram tiny-social"></i>
										</a>
									</li>
									<li>
										<a href="https://twitter.com/cityofcincy">
											<i className="fab fa-twitter tiny-social"></i>
										</a>
									</li>
								</div>
							</div>
						</div>
					</div>
					<div className="contact-info-sec text-white d-lg-block d-none">
						<h4>Contact Info</h4>
						<div className="d-flex info-single align-items-center">
							<i className="fas fa-headset tiny-icon"></i>
							<span>937-529-8661</span>
						</div>
						<div className="d-flex info-single align-items-center">
							<i className="fas fa-envelope-open-text tiny-icon"></i>
							<span>kayvonsamavati@gmail.com</span>
						</div>
						<div className="d-flex info-single align-items-center">
							<i className="fas fa-map-marked-alt tiny-icon"></i>
							<span>Cincinnati, OH</span>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Contact;
