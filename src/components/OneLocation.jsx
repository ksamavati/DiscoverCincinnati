import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import axios from 'axios';
import '../css/OneLocation.css';
// import { GoogleMap, useJsApiLoader, Marker, useGoogleMap } from '@react-google-maps/api';
import SinglePinMap from './SinglePinMap';

const OneLocation = () => {
	const [mapsData, setMapsData] = useState([]);
	const location = useLocation();
	const navigate = useNavigate();
	const { loc } = location.state;
	const httpRegex = /http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?/g;
	let placeID = "";

	//get data from Google Maps API
	const getData = async () => {
		//get Place ID
		var config1 = {
			method: 'get',
			url: 'https://cors-anywhere-ks.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + loc.name + '&inputtype=textquery&locationbias=point:39.1031,84.5120&key=AIzaSyCdU6rorFzmBl-NxqSRVJfVl7dy2nniTM8',
			headers: {
				'Accept': 'application/json'
			}
		};

		await axios(config1)
			.then(function (response) {
				let theData = response.data;
				placeID = theData.candidates[0].place_id;
			})
			.catch(function (error) {
				console.log(error);
			});

		//get Place Details
		var config2 = {
			method: 'get',
			url: 'https://cors-anywhere-ks.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=' + placeID + '&key=AIzaSyCdU6rorFzmBl-NxqSRVJfVl7dy2nniTM8',
			headers: {
				'Accept': 'application/json'
			}
		};

		await axios(config2)
			.then(function (response) {
				// setMapsData(response.data);
				let theData = response.data;
				setMapsData(theData.result);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	// Runs once when compponent renders, equivalent to ComponentDidMount
	// This will call Google Maps API
	useEffect(() => {
		getData();
	}, [loc]);

	const getReviews = (reviewArr) => {
		return reviewArr.map(rvw => {
			return (
				<div>
					<p><img alt="author" src={rvw.profile_photo_url} style={{ maxHeight: '40px', maxWidth: '40px' }} /><a href={rvw.author_url}>{rvw.author_name}</a></p>
					<p>Rating: {rvw.rating}</p>
					<p>{rvw.relative_time_description}</p>
					<p>{rvw.text}</p>
				</div>
			)
		});
	}

	const getHours = (hours) => {
		if (typeof hours === 'object') {
			return hours.weekday_text.map(line => {
				return (<span>{line}<br /></span>)
			})
		} else {
				return (<p>Hours Unavailable</p>)
		}
	}

	const getStars = (score) => {
		let output = []
		for (let i=1; i <= 5; i++) {
			if (score > 0.75) {
				output.push(<i class="fa-solid fa-star"></i>)
				score--
			} else if (score > 0.25) {
				output.push(<i class="fa-regular fa-star-half-stroke"></i>)
				score--
			} else {
				output.push(<i class="fa-regular fa-star"></i>)
			}
		}
		return output;
	}

	if (mapsData.length === 0) {
		return (<div id="preloader"></div>)
	} else {
		return (
			<div>
				<button onClick={() => navigate(-1)}>Go back</button>

				<Carousel>
					{mapsData.photos.map(photo => {
						return (
							<Carousel.Item interval={4000}>
								<img
									className="d-block w-100 my-car-img"
									src={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=2560&photo_reference=" + photo.photo_reference + "&key=AIzaSyCdU6rorFzmBl-NxqSRVJfVl7dy2nniTM8"}
									alt={loc.name}
								/>
							</Carousel.Item>

						)
					})}
					<Carousel.Caption>
						<h1>{loc.name}</h1>
						{/* <p>{location.description}</p> */}
					</Carousel.Caption>
				</Carousel>
				<div className="container">

					<div className="d-flex flex-row py-3">
						<div className="d-flex flex-column px-4" style={{ minWidth: '350px' }}>
							<div>
								<div className="my-address-cell">
									<div className="card-big-shadow">
										<div
											className="card-loc card-just-text d-flex justify-content-center"
											data-background="color"
											data-color="green"
											data-radius="none"
										>
											<div className="content">
												<h6 className="category">
													WHERE IT'S LOCATED <i className="fa-solid fa-location-dot"></i>
												</h6>
												<h4 className="loc-title">
												</h4>
												<p className="description">
													{loc.address1}<br></br>
													{loc.address2}<br></br>
													<a href={mapsData.url}>View on Google Maps</a>
												</p>
											</div>
										</div>
									</div>
								</div>

							</div>
							<div>
								<div className="my-contact-cell">
									<div className="card-big-shadow">
										<div
											className="card-loc card-just-text d-flex justify-content-center"
											data-background="color"
											data-color="blue"
											data-radius="none"
										>
											<div className="content">
												<h6 className="category mb-2">
													MORE INFORMATION <i className="fa-solid fa-circle-info"></i>
												</h6>
												<p className="description">
													<i className="fa-solid fa-phone"></i> {loc.phone}<br></br>
													<i className="fa-solid fa-globe"></i> {mapsData.website ? <a href={mapsData.website}>{mapsData.website.replace(httpRegex, '')}</a> : "Website unavailable" }<br></br>
												</p>
											</div>
										</div>
									</div>
								</div>

							</div>
							<div>
								<div className="my-hours-cell">
									<div className="card-big-shadow">
										<div
											className="card-loc card-just-text d-flex flex-column justify-content-center"
											data-background="color"
											data-color="yellow"
											data-radius="none"
										>
											<div className="content">
												<h6 className="category mb-3">
													HOURS OF OPERATION <i className="fa-solid fa-clock"></i>
												</h6>
												<p style={{whiteSpace: 'nowrap'}}>{getHours(mapsData.opening_hours)}</p>
												{/* <p>{mapsData.opening_hours.weekday_text.map(line => {return (<span>{line}<br /></span>)})}</p> */}
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
						<div className="d-flex flex-column">
							<div>
								<div className="my-map-cell" style={{ width: '100%', height: '100%' }}>
									<SinglePinMap coords={mapsData.geometry.location} />

									{/* <iframe style={{ border: '0', width: '100%', height: '100%' }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sTQL+Stadium!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> */}
								</div>

							</div>
							<div className="my-description-cell text-center py-4">
								<h2>{loc.name}</h2>
								<p>{loc.description}</p>
								<h4 className="mt-5">Average Review Score</h4>
								<h1 className="text-warning">{mapsData.rating ? getStars(mapsData.reviews[0].rating) : "No reviews so far"}</h1>
								<p>{mapsData.user_ratings_total ? "(" + mapsData.rating + ") out of " + mapsData.user_ratings_total + " total reviews" : <a href={mapsData.url}>Be the first to write one</a>}</p>
							</div>
						</div>
					</div>
					{(mapsData.reviews !== undefined) ?
					<section className="d-flex">
						<div className="container mb-5">
							<div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
								<h2
									className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg mt-5">
									Top Reviews
								</h2>
							</div>
							<ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
								<li key="1">
								<a href={mapsData.reviews[0].author_url}><img
										src={mapsData.reviews[0].profile_photo_url}
										className="wpx-100 img-round mgb-20"
										title=""
										alt="Review Author"
										data-edit="false"
										data-editor="field"
										data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
										style={{borderRadius: 0}}
									/></a>
									<h3 className="text-warning">{getStars(mapsData.reviews[0].rating)}</h3>
									<p className="fs-110 font-cond-l px-4 my-review-text">
										"{mapsData.reviews[0].text}"
									</p>
									<h5
										className="font-cond mgb-5 fg-text-d fs-130"
									>
										<a href={mapsData.reviews[0].author_url}>{mapsData.reviews[0].author_name}</a>
									</h5>
									<small
										className="font-cond case-u lts-sm fs-80 fg-text-l"
									>
										{mapsData.reviews[0].relative_time_description}
									</small>
								</li>
								<li key="2">
								<a href={mapsData.reviews[1].author_url}><img
										src={mapsData.reviews[1].profile_photo_url}
										className="wpx-100 img-round mgb-20"
										title=""
										alt="Review Author"
										data-edit="false"
										data-editor="field"
										data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
										style={{borderRadius: 0}}
									/></a>
									<h3 className="text-warning">{getStars(mapsData.reviews[1].rating)}</h3>
									<p className="fs-110 font-cond-l px-4 my-review-text">
										"{mapsData.reviews[1].text}"
									</p>
									<h5
										className="font-cond mgb-5 fg-text-d fs-130"
									>
										<a href={mapsData.reviews[1].author_url}>{mapsData.reviews[1].author_name}</a>
									</h5>
									<small
										className="font-cond case-u lts-sm fs-80 fg-text-l"
									>
										{mapsData.reviews[1].relative_time_description}
									</small>
								</li>
								<li key="3">
								<a href={mapsData.reviews[2].author_url}><img
										src={mapsData.reviews[2].profile_photo_url}
										className="wpx-100 img-round mgb-20"
										title=""
										alt="Review Author"
										data-edit="false"
										data-editor="field"
										data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
										style={{borderRadius: 0}}
									/></a>
									<h3 className="text-warning">{getStars(mapsData.reviews[1].rating)}</h3>
									<p className="fs-110 font-cond-l px-4 my-review-text">
										"{mapsData.reviews[2].text}"
									</p>
									<h5
										className="font-cond mgb-5 fg-text-d fs-130"
									>
										<a href={mapsData.reviews[2].author_url}>{mapsData.reviews[2].author_name}</a>
									</h5>
									<small
										className="font-cond case-u lts-sm fs-80 fg-text-l"
									>
										{mapsData.reviews[2].relative_time_description}
									</small>
								</li>
							</ul>
						</div>
					</section>
					: <></>}
				</div >
			</div >
		);
	}
};

export default OneLocation;
