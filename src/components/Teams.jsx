import React, { useLayoutEffect } from "react";
import "../css/Teams.css";

function Teams() {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<main>
			<section className="team-section py-5">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-md-6 col-lg-4">
							<div className="card border-0 shadow-lg pt-5 my-5 position-relative" style={{ overflow: "visible" }}>
								<div className="card-body p-4">
									<div className="member-profile position-absolute w-100 text-center">
										<img className="rounded-circle mx-auto d-inline-block" src="https://i.imgur.com/FWqtzXE.png" alt="vera" />
									</div>
									<div className="card-text pt-1 text-center">
										<h5 className="member-name mb-0 text-center text-primary font-weight-bold">Vera Opoku</h5>
										<div className="mb-3">Frontend specialist and Content Manager</div>
										<div>Passionate about front-end development. Always looking to improve her skills.</div>
									</div>
								</div>
								{/* <!--//card-body--> */}
								<div className="card-footer theme-bg-primary border-0 text-center">
									<ul className="social-list list-inline mb-0 mx-auto d-flex flex-row justify-content-center align-items-center">
										<li className="list-inline-item">
											<a className="text-dark" href="https://github.com/Bigracksvee">
												<i className="fab fa-github fa-fw"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-dark" href="https://www.linkedin.com/in/vera-opoku-302437244/">
												<i className="fab fa-linkedin fa-fw"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<b className="text-dark" href="#" style={{ fontSize: "15pt" }}>
												<i className="fas fa-briefcase fa-fw"></i>
											</b>
										</li>
										<li className="list-inline-item"></li>
									</ul>
									{/* <!--//social-list--> */}
								</div>
								{/* <!--//card-footer--> */}
							</div>
							{/* <!--//card--> */}
						</div>
						<div className="col-12 col-md-6 col-lg-4">
							<div className="card border-0 shadow-lg pt-5 my-5 position-relative" style={{ overflow: "visible" }}>
								<div className="card-body p-4">
									<div className="member-profile position-absolute w-100 text-center">
										<img className="rounded-circle mx-auto d-inline-block" src="/assets/img/avatars/kayvon.svg" alt="Kayvon" />
									</div>
									<div className="card-text pt-1 text-center">
										<h5 className="member-name mb-0 text-center text-primary font-weight-bold">Kayvon Samavati</h5>
										<div className="mb-3 text-center">Project Lead and Backend Specialist</div>
										<div>Automation fanatic and eternal student. Code monkey by day and swole code gorilla by night.</div>
									</div>
								</div>
								{/* <!--//card-body--> */}
								<div className="card-footer theme-bg-primary border-0 text-center">
									<ul className="social-list list-inline mb-0 mx-auto d-flex flex-row justify-content-center align-items-center">
										<li className="list-inline-item">
											<a className="text-dark" href="https://github.com/ksamavati">
												<i className="fab fa-github fa-fw"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-dark" href="https://www.linkedin.com/in/ksamavati/">
												<i className="fab fa-linkedin fa-fw"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-dark" href="https://www.ksamavati.com/" style={{ fontSize: "15pt" }}>
												<i className="fas fa-briefcase fa-fw"></i>
											</a>
										</li>
										<li className="list-inline-item"></li>
									</ul>
									{/* <!--//social-list--> */}
									{/* <!--//card-footer--> */}
								</div>
							</div>
							{/* <!--//card--> */}
						</div>
						<div className="col-12 col-md-6 col-lg-4">
							<div className="card border-0 shadow-lg pt-5 my-5 position-relative" style={{ overflow: "visible" }}>
								<div className="card-body p-4">
									<div className="member-profile position-absolute w-100 text-center">
										<img className="rounded-circle mx-auto d-inline-block" src="https://i.imgur.com/suDNsA1.png" alt="Jonas" />
									</div>
									<div className="pt-1">
										<h5 className="member-name mb-0 text-center text-primary font-weight-bold">Jonas Appau</h5>
										<div className="mb-3 text-center">Database Architect and VFX Specialist</div>
										<div className="text-center">Enjoys stirring up innovation with creative artistry, vision, flair and functionality to deliver results that reflect technological goals and ideas in a clear and concise manner.</div>
									</div>
								</div>
								{/* <!--//card-body--> */}
								<div className="card-footer theme-bg-primary border-0 text-center">
									<ul className="social-list list-inline mb-0 mx-auto d-flex flex-row justify-content-center align-items-center">
										<li className="list-inline-item">
											<a className="text-dark" href="https://github.com/Jonasappau16">
												<i className="fab fa-github fa-fw"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="text-dark" href="https://www.linkedin.com/in/jonas-appau-8a7825237/">
												<i className="fab fa-linkedin fa-fw"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<b className="text-dark" href="#" style={{ fontSize: "15pt" }}>
												<i className="fas fa-briefcase fa-fw"></i>
											</b>
										</li>
										<li className="list-inline-item"></li>
									</ul>
									{/* <!--//social-list--> */}
								</div>
								{/* <!--//card-footer--> */}
							</div>
							{/* <!--//card--> */}
						</div>

						<div className="col-12 col-md-6">
							<div className="card border-0 shadow-lg pt-5 my-5 position-relative" style={{ overflow: "visible" }}>
								<div className="card-body p-4">
									<div className="member-profile position-absolute w-100 text-center">
										<img className="rounded-circle mx-auto d-inline-block" src="https://i.imgur.com/7k5oJMH.png" alt="Ryan" />
									</div>
									<div className="card-text pt-1 text-center">
										<h5 className="member-name mb-0 text-center text-primary font-weight-bold">Ryan Twele</h5>
										<div className="mb-3 text-center">Instructor</div>
										<div>Coffee addict and avid proponent of blockchain tech. In his free time he enjoys long walks on the beach and explaining development fundamentals to aspiring web developers.</div>
									</div>
								</div>
								{/* <!--//card-body--> */}
								{/* <div className="card-footer theme-bg-primary border-0 text-center">
                  <ul className="social-list list-inline mb-0 mx-auto">
                    <li className="list-inline-item">
                      <a className="text-dark" href="#">
                        <i className="fab fa-github fa-fw"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-dark" href="#">
                        <i className="fab fa-linkedin-in fa-fw"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-dark" href="#">
                        <i className="fa-brands fa-reddit"></i>
                      </a>
                    </li>
                    <li className="list-inline-item"></li>
                  </ul>
                </div> */}
							</div>
						</div>

						<div className="col-12 col-md-6">
							<div className="card border-0 shadow-lg pt-5 my-5 position-relative" style={{ overflow: "visible" }}>
								<div className="card-body p-4">
									<div className="member-profile position-absolute w-100 text-center">
										<img className="rounded-circle mx-auto d-inline-block" src="https://i.imgur.com/l2FcjzH.png" alt="Spencer" />
									</div>
									<div className="card-text pt-1 text-center">
										<h5 className="member-name mb-0 text-center text-primary font-weight-bold">Spencer Dresmann</h5>
										<div className="mb-3 text-center">Teaching Assitant</div>
										<div>Future game developer and Ramen bowl consumer. Atomic makeup primarily composed of tonkotsu and pure liquid Nos biofuel. Ask him about Outer Wilds. Seriously.</div>
									</div>
								</div>
								{/* <!--//card-body--> */}
								{/* <div className="card-footer theme-bg-primary border-0 text-center">
                  <ul className="social-list list-inline mb-0 mx-auto">
                    <li className="list-inline-item">
                      <a className="text-dark" href="#">
                        <i className="fab fa-github fa-fw"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-dark" href="#">
                        <i className="fab fa-linkedin-in fa-fw"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-dark" href="#">
                        <i className="fab fa-github fa-fw"></i>
                      </a>
                    </li>
                    <li className="list-inline-item"></li>
                  </ul> */}
								{/* <!--//social-list--> */}
								{/* </div> */}
								{/* <!--//card-footer--> */}
							</div>
							{/* <!--//card--> */}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Teams;
