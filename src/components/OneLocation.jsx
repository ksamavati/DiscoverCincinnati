import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import "../css/OneLocation.css";
import SinglePinMap from "./subcomponents/SinglePinMap";

const OneLocation = () => {
	const [mapsData, setMapsData] = useState([]);
	const location = useLocation();
	const navigate = useNavigate();
	const { loc } = location.state;
	const httpRegex = /http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?/g;
	const backendPlacesURL = process.env.REACT_APP_BACKEND_URL + "/googleplacesapi/";
	const mapsApiKey = process.env.REACT_APP_MAPS_API_KEY;

	// Runs once when compponent renders, equivalent to ComponentDidMount
	// This will call Google Maps API
	useEffect(() => {
		//get Place ID
		var config1 = {
			method: "get",
			url: backendPlacesURL + loc.name,
			headers: {
				Accept: "application/json",
			},
		};

		axios(config1)
			.then(function (response) {
				let theData = response.data;
				setMapsData(theData.result);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [loc, backendPlacesURL]);

	const getHours = (hours) => {
		if (typeof hours === "object") {
			return hours.weekday_text.map((line, index) => {
				return (
					<span key={index}>
						{line}
						<br />
					</span>
				);
			});
		} else {
			return <span>Hours Unavailable</span>;
		}
	};

	const getStars = (score, index) => {
		let output = [];
		for (let i = 1; i <= 5; i++) {
			if (score > 0.75) {
				output.push(<i className="fa-solid fa-star" key={"review-" + index + "-star-" + i}></i>);
				score--;
			} else if (score > 0.25) {
				output.push(<i className="fa-regular fa-star-half-stroke" key={"review-" + index + "-star-" + i}></i>);
				score--;
			} else {
				output.push(<i className="fa-regular fa-star" key={"review-" + index + "-star-" + i}></i>);
			}
		}
		return output;
	};

	if (mapsData.length === 0) {
		return <div id="preloader"></div>;
	} else {
		return (
			<main>
				<div className="my-back-button d-flex align-items-center justify-content-center" onClick={() => navigate(-1)}>
					<i className="bi bi-arrow-left-short" />
				</div>
				<div className="position-relative">
					<Carousel>
						{mapsData.photos.map((photo, index) => {
							return (
								<Carousel.Item interval={4000} key={index}>
									<img
										className="d-block my-car-img"
										src={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=2560&photo_reference=" + photo.photo_reference + "&key=" + mapsApiKey}
										// src={backendURL + "photos/" + photo.photo_reference}
										alt={loc.name}
									/>
								</Carousel.Item>
							);
						})}
					</Carousel>
					<h1 className="my-carousel-title text-white text-center">{loc.name}</h1>
				</div>
				<div className="container position-relative">
					<div className="d-flex flex-md-row flex-column-reverse py-3">
						<div className="d-flex flex-column px-4 align-items-center" style={{ minWidth: "350px" }}>
							<div>
								<div className="my-address-cell">
									<div className="card-loc card-just-text d-flex justify-content-center" data-background="color" data-color="green">
										<div className="content">
											<h6 className="category">
												WHERE IT'S LOCATED <i className="fa-solid fa-location-dot"></i>
											</h6>

											<div onClick={() => navigate(-1)} className="back-to-top d-flex align-items-center justify-content-center" style={{ zIndex: "2" }}>
												<i className="bi bi-arrow-up-short"></i>
											</div>
											<p className="description pt-2">
												{loc.address1}
												<br />
												{loc.address2}
												<br />
												<a href={mapsData.url}>View on Google Maps</a>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div className="my-contact-cell">
									<div className="card-loc card-just-text d-flex justify-content-center" data-background="color" data-color="blue">
										<div className="content">
											<h6 className="category mb-2">
												MORE INFORMATION <i className="fa-solid fa-circle-info"></i>
											</h6>
											<p className="description">
												<i key="phone-icon" className="fa-solid fa-phone"></i> {loc.phone}
												<br />
												<i key="website-icon" className="fa-solid fa-globe"></i> {mapsData.website ? <a href={mapsData.website}>{mapsData.website.replace(httpRegex, "")}</a> : "Website unavailable"}
												<br />
											</p>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div className="my-hours-cell">
									<div className="card-loc card-just-text d-flex flex-column justify-content-center" data-background="color" data-color="yellow">
										<div className="content">
											<h6 className="category mb-3">
												HOURS OF OPERATION <i className="fa-solid fa-clock"></i>
											</h6>
											<p style={{ whiteSpace: "nowrap" }}>{getHours(mapsData.opening_hours)}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="d-flex flex-column">
							<div>
								<div className="my-map-cell" style={{ width: "100%", height: "100%" }}>
									<SinglePinMap coords={mapsData.geometry.location} />
								</div>
							</div>
							<div className="my-description-cell text-center py-4">
								<h2>{loc.name}</h2>
								<p>{loc.description}</p>
								<h4 className="mt-5">Average Review Score</h4>
								<h1 className="text-warning">{mapsData.rating ? getStars(mapsData.rating) : "No reviews so far"}</h1>
								<p>{mapsData.user_ratings_total ? "(" + mapsData.rating + ") out of " + mapsData.user_ratings_total + " total reviews" : <a href={mapsData.url}>Be the first to write one</a>}</p>
							</div>
						</div>
					</div>
					{mapsData.reviews !== undefined ? (
						<section className="d-flex">
							<div className="container mb-5">
								<div className="mgb-40 pb-3 auto-invert line-b-4 align-center">
									<h2 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg mt-5">Top Reviews</h2>
								</div>
								<ul className="hash-list cols-3 cols-1-xs align-center text-sm">
									<li key="1" className="my-4">
										<a href={mapsData.reviews[0].author_url}>
											<img src={mapsData.reviews[0].profile_photo_url} className="wpx-100 img-round mgb-20" title="" alt="Review Author" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" style={{ borderRadius: 0 }} />
										</a>
										<h3 className="text-warning">{getStars(mapsData.reviews[0].rating, 1)}</h3>
										<p className="fs-110 font-cond-l px-4 my-review-text">"{mapsData.reviews[0].text}"</p>
										<h5 className="font-cond mgb-5 fg-text-d fs-130">
											<a href={mapsData.reviews[0].author_url}>{mapsData.reviews[0].author_name}</a>
										</h5>
										<small className="font-cond case-u lts-sm fs-80 fg-text-l">{mapsData.reviews[0].relative_time_description}</small>
									</li>
									<li key="2" className="my-4">
										<a href={mapsData.reviews[1].author_url}>
											<img src={mapsData.reviews[1].profile_photo_url} className="wpx-100 img-round mgb-20" title="" alt="Review Author" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" style={{ borderRadius: 0 }} />
										</a>
										<h3 className="text-warning">{getStars(mapsData.reviews[1].rating, 2)}</h3>
										<p className="fs-110 font-cond-l px-4 my-review-text">"{mapsData.reviews[1].text}"</p>
										<h5 className="font-cond mgb-5 fg-text-d fs-130">
											<a href={mapsData.reviews[1].author_url}>{mapsData.reviews[1].author_name}</a>
										</h5>
										<small className="font-cond case-u lts-sm fs-80 fg-text-l">{mapsData.reviews[1].relative_time_description}</small>
									</li>
									<li key="3" className="my-4">
										<a href={mapsData.reviews[2].author_url}>
											<img src={mapsData.reviews[2].profile_photo_url} className="wpx-100 img-round mgb-20" title="" alt="Review Author" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" style={{ borderRadius: 0 }} />
										</a>
										<h3 className="text-warning">{getStars(mapsData.reviews[1].rating, 3)}</h3>
										<p className="fs-110 font-cond-l px-4 my-review-text">"{mapsData.reviews[2].text}"</p>
										<h5 className="font-cond mgb-5 fg-text-d fs-130">
											<a href={mapsData.reviews[2].author_url}>{mapsData.reviews[2].author_name}</a>
										</h5>
										<small className="font-cond case-u lts-sm fs-80 fg-text-l">{mapsData.reviews[2].relative_time_description}</small>
									</li>
								</ul>
							</div>
						</section>
					) : (
						<></>
					)}
				</div>
			</main>
		);
	}
};

export default OneLocation;
