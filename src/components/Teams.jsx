import React from "react";
import Card from "react-bootstrap/Card";
import "../css/Teams.css";

function Teams() {
  return (
    <>
      <section className="team-section py-5">
        <div className="container">
          <div className="row justify-content-center">
					<div className="col-12 col-md-6 col-lg-4">
              <div className="card border-0 shadow-lg pt-5 my-5 position-relative" style={{overflow: "visible"}}>
                <div className="card-body p-4">
                  <div className="member-profile position-absolute w-100 text-center">
                    <img
                      className="rounded-circle mx-auto d-inline-block shadow-sm"
                      src="https://i.imgur.com/FWqtzXE.png"
                      alt="vera"
                    />
                  </div>
                  <div className="card-text pt-1 text-center">
                    <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                      Vera Opoku
                    </h5>
                    <div className="mb-3">Frontend specialist and Content Manager</div>
                    <div>
										Passionate about front-end development. Always looking to improve her skills.
                    </div>
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
                      <a className="text-dark" href="#" style={{fontSize: '15pt'}}>
                        <i className="fas fa-briefcase fa-fw"></i>
                      </a>
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
              <div className="card border-0 shadow-lg pt-5 my-5 position-relative" style={{overflow: "visible"}}>
                <div className="card-body p-4">
                  <div className="member-profile position-absolute w-100 text-center">
                    <img
                      className="rounded-circle mx-auto d-inline-block shadow-sm"
                      src="https://i.imgur.com/TCdk6Mw.png"
                      alt="Kayvon"
                    />
                  </div>
                  <div className="card-text pt-1 text-center">
                    <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                      Kayvon Samavati
                    </h5>
                    <div className="mb-3 text-center">Project Lead and Backend Specialist</div>
                    <div>
                      Automation fanatic and eternal student. Code monkey by day and slightly more focused code monkey by night.
                    </div>
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
                      <a className="text-dark" href="https://www.ksamavati.com/" style={{fontSize: '15pt'}}>
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
              <div className="card border-0 shadow-lg pt-5 my-5 position-relative" style={{overflow: "visible"}}>
                <div className="card-body p-4">
                  <div className="member-profile position-absolute w-100 text-center">
                    <img
                      className="rounded-circle mx-auto d-inline-block shadow-sm"
                      src="https://i.imgur.com/suDNsA1.png"
                      alt="Jonas"
                    />
                  </div>
                  <div className="card-text pt-1">
                    <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                      Jonas Appau
                    </h5>
                    <div className="mb-3 text-center">Database Architect and VFX Specialist</div>
                    <div className="text-center">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Vivamus eget eros
                      vestibulum, accumsan ante viverra, condimentum tellus.
                    </div>
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
                      <a className="text-dark" href="#" style={{fontSize: '15pt'}}>
                        <i className="fas fa-briefcase fa-fw"></i>
                      </a>
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
              <div className="card border-0 shadow-lg pt-5 my-5 position-relative" style={{overflow: "visible"}}>
                <div className="card-body p-4">
                  <div className="member-profile position-absolute w-100 text-center">
                    <img
                      className="rounded-circle mx-auto d-inline-block shadow-sm"
                      src="https://i.imgur.com/7k5oJMH.png"
                      alt="Ryan"
                    />
                  </div>
                  <div className="card-text pt-1 text-center">
                    <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                      Ryan Twele
                    </h5>
                    <div className="mb-3 text-center">Instructor</div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Vivamus eget eros
                      vestibulum, accumsan ante viverra, condimentum tellus.
                      Curabitur pellentesque convallis purus non ornare. Donec
                      bibendum sed purus dignissim rutrum. Maecenas bibendum
                      feugiat est, et venenatis nunc.
                    </div>
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
              <div className="card border-0 shadow-lg pt-5 my-5 position-relative" style={{overflow: "visible"}}>
                <div className="card-body p-4">
                  <div className="member-profile position-absolute w-100 text-center">
                    <img
                      className="rounded-circle mx-auto d-inline-block shadow-sm"
                      src="https://i.imgur.com/l2FcjzH.png"
                      alt="spencer"
                    />
                  </div>
                  <div className="card-text pt-1 text-center">
                    <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                      Spencer Dresmann
                    </h5>
                    <div className="mb-3 text-center">Teaching Assitant</div>
                    <div>
                      Future game developer and Ramen bowl consumer. Fueled by ramen and canned energy.
                    </div>
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
    </>
  );
}

export default Teams;