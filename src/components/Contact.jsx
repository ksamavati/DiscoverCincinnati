import React from 'react'
import { useLayoutEffect } from 'react';
import '../css/Contact.css';

const Contact = () => {
	useLayoutEffect(() => {
    window.scrollTo(0, 0)
	});

	return (
		<div>
		<section className="contact-master-container d-flex flex-column justify-content-center">
			<div className="contact_us">
		<div className="container-fluid">
				<div className="row">
						<div className="col-md-11 offset-md-1">
								<div className="contact_inner">
										<div className="row">
												<div className="col-lg-10">
														<div className="contact_form_inner">
																<div className="contact_field">
																		<h3>Contact Us</h3>
																		<p>Feel free to contact us any time. We will get back to you as soon as we can!</p>
																		<input type="text" className="form-control form-group" placeholder="Name" />
																		<input type="text" className="form-control form-group" placeholder="Email" />
																		<textarea className="form-control form-group" placeholder="Message"></textarea>
																		<button className="contact_form_submit">Send</button>
																</div>
														</div>
												</div>
												<div className="col-lg-2">
														<div className="right_conatct_social_icon d-flex align-items-end justify-content-center">
															 <div className="socil_item_inner d-flex py-3">
																	<li><a href="https://www.facebook.com/DowntownCincinnati"><i className="fab fa-facebook-square tiny-social"></i></a></li>
																	<li><a href="https://www.instagram.com/city_of_cincinnati/?hl=en"><i className="fab fa-instagram tiny-social"></i></a></li>
																	<li><a href="https://twitter.com/cityofcincy"><i className="fab fa-twitter tiny-social"></i></a></li>
															 </div>
														</div>
												</div>
										</div>
										<div className="contact_info_sec text-white d-lg-block d-none">
												<h4>Contact Info</h4>
												<div className="d-flex info_single align-items-center">
														<i className="fas fa-headset tiny-icon"></i>
														<span> +91 8009 054294</span>
												</div>
												<div className="d-flex info_single align-items-center">
														<i className="fas fa-envelope-open-text tiny-icon"></i>
														<span> info@flightmantra.com</span>
												</div>
												<div className="d-flex info_single align-items-center">
														<i className="fas fa-map-marked-alt tiny-icon"></i>
														<span>1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE</span>
												</div>
										</div>
								</div>
						</div>
				</div>
		</div>
		</div>
</section>
<div className="contact-ft-spacer"></div>
		</div>
	)
}

export default Contact