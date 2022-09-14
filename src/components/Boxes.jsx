import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/Boxes.css"

const Boxes = () => {
  return (
    <div>
      <section className="fun-facts">
        <div className="container">
          <h1 className="fn-title text-center my-5">DID YOU KNOW!!</h1>
          <div className="row">
            <div className="col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="fn-card m-2 cb1 text-center">
                <div className="fn-card-body">
                  <span className="fn-card-number fw-bold">01</span>
                  <h2 className="fn-card-title mb-4">
                    Over-the-Rhine Brewery District
                  </h2>
                  <p className="fn-card-text">
                    Somewhere between Prohibition, two world wars and urban
                    sprawl, the tunnels beneath Over-the-Rhine, Newport and
                    Covington that brewery workers used to access lagering
                    cellars and transport goods between buildings were all but
                    forgotten. Then in 2008, urban explorers came across
                    original brewery blueprints, curiosity led to jack
                    hammering, and the tunnels were rediscovered.You can see the
                    curious underworld for yourself on a Brewing Heritage Trail
                    Tour. One tour ends in a cellar beneath the original
                    Kauffman Brewery malt house. Built in 1860, Kauffman grew to
                    be the fourth largest brewery in Cincinnati, but never
                    reopened after Prohibition.!.
                  </p>
                  <button className="fn-btn btn-success">Read More</button>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="fn-card m-2 cb1 text-center">
                <div className="fn-card-body">
                  <span className="fn-card-number fw-bold">02</span>
                  <h2 className="fn-card-title mb-4">Built on Beer</h2>
                  <p className="fn-card-text">
                    Cincinnati and Northern Kentucky were, quite literally,
                    built on beer. By the mid-1800s, 36 breweries were producing
                    more than 30 million gallons of beer and digging underground
                    lagering cellars and tunnels. One batch of lager at a time,
                    Cincinnati's so-called beer barons turned humble brewing
                    operations into beer-making empires that prospered until
                    Prohibition forced them all to close. Few reopened, and none
                    survived consecutively into the 21st century (after
                    operating for 114 years, Hudepohl Brewing Company closed in
                    1999) Now, in just a few years, the number of breweries in
                    Cincinnati and Northern Kentucky has surpased the number
                    that exhisted prior to Prohibition.
                  </p>
                  <button className="fn-btn btn-success">Read More</button>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="fn-card m-2 cb1 text-center">
                <div className="fn-card-body">
                  <span className="fn-card-number fw-bold">03</span>
                  <h2 className="fn-card-title mb-4">Beer Capital of the World</h2>
                  <p className="fn-card-text">
                    In 1860, as many as 36 breweries operated in Cincinnati. By
                    1889, a fewer number of breweries (23) produced even more
                    beer, collectively brewing 35,700,000 gallons of suds drunk
                    the world over (Christian Moerlein Brewing Company exported
                    beer as far as South America and Europe). In fact, so much
                    beer was made and consumed in Cincinnati that in 1890 it was
                    dubbed the “Beer Capital of the World.The vast majority of
                    Cincinnati's pre-Prohibition breweries were in
                    Over-the-Rhine, clustered together along McMicken Avenue and
                    the canal. From 1875-1900, 17 operated in Over-the-Rhine and
                    the West End.
                  </p>
                  <button className="fn-btn btn-success">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boxes;
