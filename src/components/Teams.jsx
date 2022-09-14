import React from "react";
import Card from "react-bootstrap/Card";
import "../css/Teams.css";

function Teams() {
  return (
    <>
      <section class="team-section py-5">
        <div class="container">
          <div class="row justify-content-center">
					<div class="col-12 col-md-6 col-lg-4">
              <div class="card border-0 shadow-lg pt-5 my-5 position-relative" style={{overflow: "visible"}}>
                <div class="card-body p-4">
                  <div class="member-profile position-absolute w-100 text-center">
                    <img
                      class="rounded-circle mx-auto d-inline-block shadow-sm"
                      src="https://i.imgur.com/FWqtzXE.png"
                      alt="vera"
                    />
                  </div>
                  <div class="card-text pt-1">
                    <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                      Vera Opoku
                    </h5>
                    <div class="mb-3 text-center">Role</div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Vivamus eget eros
                      vestibulum, accumsan ante viverra, condimentum tellus.
                    </div>
                  </div>
                </div>
                {/* <!--//card-body--> */}
                <div class="card-footer theme-bg-primary border-0 text-center">
                  <ul class="social-list list-inline mb-0 mx-auto">
                    <li class="list-inline-item">
                      <a class="text-dark" href="#">
                        <i class="fab fa-github fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="#">
                        <i class="fab fa-linkedin-in fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="#">
                        <i class="fa-brands fa-reddit"></i>
                      </a>
                    </li>
                    <li class="list-inline-item"></li>
                  </ul>
                  {/* <!--//social-list--> */}
                </div>
                {/* <!--//card-footer--> */}
              </div>
              {/* <!--//card--> */}
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card border-0 shadow-lg pt-5 my-5 position-relative" style={{overflow: "visible"}}>
                <div class="card-body p-4">
                  <div class="member-profile position-absolute w-100 text-center">
                    <img
                      class="rounded-circle mx-auto d-inline-block shadow-sm"
                      src="https://i.imgur.com/TCdk6Mw.png"
                      alt="Kayvon"
                    />
                  </div>
                  <div class="card-text pt-1">
                    <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                      Kayvon Samavati
                    </h5>
                    <div class="mb-3 text-center">Role</div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Vivamus eget eros
                      vestibulum, accumsan ante viverra, condimentum tellus.
                    </div>
                  </div>
                </div>
                {/* <!--//card-body--> */}
                <div class="card-footer theme-bg-primary border-0 text-center">
                  <ul class="social-list list-inline mb-0 mx-auto d-flex flex-row justify-content-center align-items-center">
                    <li class="list-inline-item">
                      <a class="text-dark" href="#">
                        <i class="fab fa-github fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="#">
                        <i class="fab fa-linkedin fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="#" style={{fontSize: '15pt'}}>
                        <i class="fas fa-briefcase fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item"></li>
                  </ul>
                  {/* <!--//social-list--> */}
                  {/* <!--//card-footer--> */}
                </div>
              </div>
              {/* <!--//card--> */}
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card border-0 shadow-lg pt-5 my-5 position-relative" style={{overflow: "visible"}}>
                <div class="card-body p-4">
                  <div class="member-profile position-absolute w-100 text-center">
                    <img
                      class="rounded-circle mx-auto d-inline-block shadow-sm"
                      src="https://i.imgur.com/suDNsA1.png"
                      alt="Jonas"
                    />
                  </div>
                  <div class="card-text pt-1">
                    <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                      Jonas Appau
                    </h5>
                    <div class="mb-3 text-center">Role</div>
                    <div className="text-center">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Vivamus eget eros
                      vestibulum, accumsan ante viverra, condimentum tellus.
                    </div>
                  </div>
                </div>
                {/* <!--//card-body--> */}
                <div class="card-footer theme-bg-primary border-0 text-center">
                  <ul class="social-list list-inline mb-0 mx-auto">
                    <li class="list-inline-item">
                      <a class="text-dark" href="#">
                        <i class="fab fa-github fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="#">
                        <i class="fab fa-linkedin-in fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="#">
                        <i class="fab fa-github fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item"></li>
                  </ul>
                  {/* <!--//social-list--> */}
                </div>
                {/* <!--//card-footer--> */}
              </div>
              {/* <!--//card--> */}
            </div>

            <div class="col-12 col-md-6">
              <div class="card border-0 shadow-lg pt-5 my-5 position-relative" style={{overflow: "visible"}}>
                <div class="card-body p-4">
                  <div class="member-profile position-absolute w-100 text-center">
                    <img
                      class="rounded-circle mx-auto d-inline-block shadow-sm"
                      src="https://i.imgur.com/7k5oJMH.png"
                      alt="Ryan"
                    />
                  </div>
                  <div class="card-text pt-1">
                    <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                      Ryan Twele
                    </h5>
                    <div class="mb-3 text-center">Instructor</div>
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
                <div class="card-footer theme-bg-primary border-0 text-center">
                  <ul class="social-list list-inline mb-0 mx-auto">
                    <li class="list-inline-item">
                      <a class="text-dark" href="#">
                        <i class="fab fa-github fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="#">
                        <i class="fab fa-linkedin-in fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="#">
                        <i class="fa-brands fa-reddit"></i>
                      </a>
                    </li>
                    <li class="list-inline-item"></li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="card border-0 shadow-lg pt-5 my-5 position-relative" style={{overflow: "visible"}}>
                <div class="card-body p-4">
                  <div class="member-profile position-absolute w-100 text-center">
                    <img
                      class="rounded-circle mx-auto d-inline-block shadow-sm"
                      src="https://i.imgur.com/l2FcjzH.png"
                      alt="spencer"
                    />
                  </div>
                  <div class="card-text pt-1">
                    <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                      Spencer Dresmann
                    </h5>
                    <div class="mb-3 text-center">Teching Assitant</div>
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
                <div class="card-footer theme-bg-primary border-0 text-center">
                  <ul class="social-list list-inline mb-0 mx-auto">
                    <li class="list-inline-item">
                      <a class="text-dark" href="#">
                        <i class="fab fa-github fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="#">
                        <i class="fab fa-linkedin-in fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="#">
                        <i class="fab fa-github fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item"></li>
                  </ul>
                  {/* <!--//social-list--> */}
                </div>
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