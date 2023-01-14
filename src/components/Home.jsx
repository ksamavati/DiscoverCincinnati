import React, { useLayoutEffect, useEffect, useState } from "react";
import "../css/Home.css";
import "../css/Home2.css";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Container } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
	const [pageLoaded, setPageLoaded] = useState(false);

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	});

	//ComponentDidMount, render skyscanner last
	useEffect(() => {
		setPageLoaded(true);
		AOS.init();
		AOS.refresh();

		// Import SkyScanner Widget JS
		if (document.getElementById("skyscannerjs") == null) {
			const script1 = document.createElement("script");
			script1.src = "https://widgets.skyscanner.net/widget-server/js/loader.js";
			script1.id = "skyscannerjs";
			script1.async = true;
			document.body.appendChild(script1);
		}

		// Import PureCounter JS
		if (document.getElementById("purecounterjs") == null) {
			const script2 = document.createElement("script");
			script2.src = "assets/vendor/purecounter/purecounter_vanilla.js";
			script2.id = "purecounterjs";
			script2.async = true;
			document.body.appendChild(script2);
		}

		// Import Main JS
		if (document.getElementById("mainjs") == null) {
			const script3 = document.createElement("script");
			script3.src = "/scripts/homepage/main.js";
			script3.id = "mainjs";
			script3.async = true;
			document.body.appendChild(script3);
		}

		// Unrender skyscanner
		return () => {
			document.getElementById("skyscannerjs").remove();
			// document.getElementById("purecounterjs").remove();
			// document.getElementById("mainjs").remove();
		};
	}, []);

	return (
		<main className="homepage" id="home-top">
			<section className="my-video-container home-section" id="section1">
				<video className="my-fullscreen-video my-background" src="/assets/videos/homeLanding.mp4" alt="drone footage of Downtown Cincinnati" muted loop autoPlay playsInline></video>
				<h1 className="text-white my-tagline">Welcome to Cincinnati</h1>
			</section>
			{/* <!-- End Hero --> */}

			<div id="main">
				<section id="why-us" className="why-us home-section">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 d-flex align-items-stretch">
								<div className="content">
									<h3>Why Visit Cincinnati?</h3>
									<p>Cincinnati is a great city with a lot to offer. The people are friendly and there is always something to do. The city has a great history and there are plenty of places to visit. The food is amazing and there is a great variety of restaurants. The city is also home to a great music scene. There are many reasons to visit Cincinnati, but these are just a few of the reasons why you should experience Cincinnati for yourself.</p>
									<div className="text-center">
										<a href="#features" className="more-btn">
											Learn More <i className="bx bx-chevron-right"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
								<div className="icon-boxes d-flex flex-column justify-content-center">
									<div className="row">
										<div className="col-xl-4 d-flex align-items-stretch">
											<div className="icon-box mt-4 mt-xl-0">
												<i className="bx bx-beer"></i>
												<h4>Breweries</h4>
												<p>The city has a rich brewing history, and there are a number of new and exciting breweries to check out.</p>
											</div>
										</div>
										<div className="col-xl-4 d-flex align-items-stretch">
											<div className="icon-box mt-4 mt-xl-0">
												<i className="bx bx-football"></i>
												<h4>Sports</h4>
												<p>Sports fans in Cincinnati are passionate about their teams and the city has a rich history of success in both professional and collegiate sports.</p>
											</div>
										</div>
										<div className="col-xl-4 d-flex align-items-stretch">
											`
											<div className="icon-box mt-4 mt-xl-0">
												<i className="bx bx-bowl-hot"></i>
												<h4>Food</h4>
												<p>The city has a rich food culture with a variety of cuisines to choose from. Cincinnati is also home to many great restaurants and food trucks.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="counts" className="counts section-bg home-section">
					<div className="container">
						<div className="row counters">
							<div className="col-lg-3 col-6 text-center">
								<span data-purecounter-start="0" data-purecounter-end="302687" data-purecounter-duration="1.75" className="purecounter">
									302,687
								</span>
								<p>Population</p>
							</div>

							<div className="col-lg-3 col-6 text-center">
								<span data-purecounter-start="0" data-purecounter-end="80" data-purecounter-duration="1" className="purecounter">
									80
								</span>
								<p>Breweries</p>
							</div>

							<div className="col-lg-3 col-6 text-center">
								<span data-purecounter-start="2022" data-purecounter-end="1788" data-purecounter-duration="1.25" className="purecounter">
									1788
								</span>
								<p>Year Founded</p>
							</div>

							<div className="col-lg-3 col-6 text-center">
								<span data-purecounter-start="0" data-purecounter-end="80327" data-purecounter-duration="1.5" className="purecounter">
									80,327
								</span>
								<p>Jobs supported by tourism</p>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="App">
						<Container>
							{/* <Button variant="secondary"> */}
							<h1 className="pt-5">Things to Do</h1>
							{/* </Button>{' '} */}
							<Row data-aos="fade-up">
								<Col className="py-4" md={4}>
									<Card>
										<CardImg top width="100%" src="assets/img/attracts.jpg" alt="Card image cap" style={{ objectFit: "cover" }} />
										<CardBody>
											<CardTitle>Attractions</CardTitle>
											<CardText>Cincinnati is home to many tourist attractions, including the Cincinnati Zoo, the National Underground Railroad Freedom Center, and the Cincinnati Museum Center.</CardText>
											<Link to="/attractions">
												<Button>Browse Attractions</Button>
											</Link>
										</CardBody>
									</Card>
								</Col>

								<Col className="py-4" md={4}>
									<Card>
										<CardImg top width="100%" src="assets/img/sport.jpeg" alt="Card image cap" style={{ objectFit: "cover" }} />
										<CardBody>
											<CardTitle>Sports</CardTitle>
											<CardText>Cincinnati is home to many professional sports teams, including the Bengals (NFL), Reds (MLB), and FC Cincinnati (MLS). The city also has a rich history in college sports.</CardText>
											<Link to="/sports">
												<Button>Browse Sports</Button>
											</Link>
										</CardBody>
									</Card>
								</Col>

								<Col className="py-4" md={4}>
									<Card>
										<CardImg top width="100%" src="assets/img/bar.jpg" alt="Card image cap" style={{ objectFit: "cover" }} />
										<CardBody>
											<CardTitle>Bars</CardTitle>
											<CardText>Some popular bars in Cincinnati include The Anchor, The Comet, and The Lackman. These bars offer a variety of beer, wine, and mixed drinks, as well as a variety of food options.</CardText>
											<Button>Browse Bars</Button>
										</CardBody>
									</Card>
								</Col>

								<Col className="py-4" md={4}>
									<Card>
										<CardImg top width="100%" src="assets/img/brew.jpg" alt="Card image cap" style={{ objectFit: "cover" }} />
										<CardBody>
											<CardTitle>Breweries</CardTitle>
											<CardText>There are many Cincinnati breweries, but some of the most popular include Rhinegeist, MadTree, and Fifty West. These breweries offer a variety of different beers.</CardText>
											<Button>Browse Breweries</Button>
										</CardBody>
									</Card>
								</Col>
								<Col className="py-4" md={4}>
									<Card>
										<CardImg top width="100%" src="assets/img/art.jpg" alt="Card image cap" style={{ objectFit: "cover" }} />
										<CardBody>
											<CardTitle>Performing Arts & Music</CardTitle>
											<CardText>Cincinnati has a long and rich history in the performing arts, dating back to the city's founding in 1788. The city is home to a number of world-renowned performing arts organizations. </CardText>
											<Button>Browse Arts & Music</Button>
										</CardBody>
									</Card>
								</Col>
								<Col className="py-4" md={4}>
									<Card>
										<CardImg top width="100%" src="assets/img/attract.jpeg" alt="Card image cap" style={{ objectFit: "cover" }} />
										<CardBody>
											<CardTitle>Parks and Recreation</CardTitle>
											<CardText>Cincinnati has a variety of parks and recreational facilities for residents and visitors to enjoy. The city operates over 60 parks, totaling more than 4,000 acres.</CardText>
											<Button>Browse Parks and Recreation</Button>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
						{/* <video className="" src={movie} muted loop autoPlay></video> */}
					</div>
				</section>
				{/* End Things to do */}

				{/* <!-- ======= Small Icons Section ======= --> */}
				<section id="about" className="about home-section">
					<div className="container" data-aos="zoom-in" data-aos-delay="100">
						<div className="row">
							<div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
								<img src="assets/img/cincyhistory.jpg" className="img-fluid" alt="Cincinnati Union Terminal" />
							</div>
							<div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
								<h3>A City Full of History</h3>
								<p>Cincinnati was founded in 1788 by Colonel Robert Patterson and Judge John Cleves Symmes. They named the city "Cincinnati" after the Society of the Cincinnati, of which they were members.</p>

								<p>Cincinnati was the first major city founded after the American Revolution, and because of this, it is sometimes called "The Birthplace of the West."</p>

								<p>Cincinnati grew rapidly in its early years, and by the 1830s it was the sixth-largest city in the United States. It was a major stop on the Underground Railroad, and its population was very diverse for its time.</p>

								<p>Cincinnati was a major manufacturing city during the Industrial Revolution, and it remained an important manufacturing center even after the decline of industry in the mid-20th century. Today, the city is known for its arts and culture scene, as well as its food (Cincinnati chili is a popular dish).</p>
								{/* <p className="fst-italic">
							What, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua.
						</p>
						<ul>
							<li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
							<li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
							<li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
						</ul> */}
								{/* <p>
							Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						</p> */}
							</div>
						</div>
					</div>
				</section>
				{/* <!-- End About Section --> */}

				{/* <!-- ======= Small Icons Section ======= --> */}
				<section id="features" className="features home-section text-center">
					<h1>Explore:</h1>
					<div className="container" data-aos="fade-up">
						<div className="row" data-aos="zoom-in" data-aos-delay="100">
							<div className="col-lg-4 col-md-4 mt-4">
								<Link className="nav-link" to="/attractions">
									<div className="icon-box">
										<i className="ri-star-line" style={{ color: "#ffbb2c" }}></i>
										<h3>Attractions</h3>
									</div>
								</Link>
							</div>
							<div className="col-lg-4 col-md-4 mt-4">
								<Link className="nav-link" to="/sports">
									<div className="icon-box">
										<i className="ri-football-line" style={{ color: "#5578ff" }}></i>
										<h3>Sports</h3>
									</div>
								</Link>
							</div>
							<div className="col-lg-4 col-md-4 mt-4">
								<Link className="nav-link" to="/bars">
									<div className="icon-box">
										<i className="ri-goblet-fill" style={{ color: "#e80368" }}></i>
										<h3>Bars</h3>
									</div>
								</Link>
							</div>
							<div className="col-lg-4 col-md-4 mt-4">
								<Link className="nav-link" to="/breweries">
									<div className="icon-box">
										<i className="ri-cup-fill" style={{ color: "#e361ff" }}></i>
										<h3>Breweries</h3>
									</div>
								</Link>
							</div>
							<div className="col-lg-4 col-md-4 mt-4">
								<Link className="nav-link" to="/arts">
									<div className="icon-box">
										<i className="ri-file-music-fill" style={{ color: "#47aeff" }}></i>
										<h3>Performing Arts & Music</h3>
									</div>
								</Link>
							</div>
							<div className="col-lg-4 col-md-4 mt-4">
								<Link className="nav-link" to="/parks">
									<div className="icon-box">
										<i className="ri-walk-fill" style={{ color: "#ffa76e" }}></i>
										<h3>Parks and Recreation</h3>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Plan your trip section */}
				<section className="home-section">
					<div className="container text-center">
						<h1>Excited? Plan your trip today!</h1>
						<div className="row pt-4" data-aos="fade-left" data-aos-delay="100">
							<img src="assets/img/travel.jpg" className="img-fluid col-md-6" alt="Cincinnati Skyline" />
							{pageLoaded && <div className="col-md-6" data-skyscanner-widget="SearchWidget" data-origin-geo-lookup="true" data-destination-name="Cincinnati" data-flight-type="return" data-market="US" data-locale="en-US" data-currency="USD" style={{ minWidth: "160px", maxWidth: "500px" }}></div>}
						</div>
					</div>
					{/* <Button variant="primary"><Card2.Link href="https://reservations.cincinnatiusa.com/hotel/list/4872/m2441?Search%5BhotelRegion%5D=m2441&Search%5BcheckInDate%5D=&Search%5BcheckOutDate%5D=&Search%5BnumberOfRooms%5D=1&Search%5BnumberOfAdults%5D=1&Search%5BnumberOfChildren%5D=0&Search%5BkeywordSearch%5D=&Search%5Bsort%5D=rank&Search%5BstarRating%5D=&Search%5BlowPrice%5D=&Search%5BhighPrice%5D=&customNavLink=0&Search%5Bnear%5D=&Search%5Blatitude%5D=&Search%5Blongitude%5D=&Search%5BlocationSearch%5D=Downtown&Search%5BpoiDistance%5D="><h3 className="text-white">Book Now</h3></Card2.Link></Button> */}
				</section>
			</div>
		</main>
	);
};

export default Home;
