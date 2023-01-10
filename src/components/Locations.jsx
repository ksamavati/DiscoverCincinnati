import React, { useEffect, useState, useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import LocationRenderer from "./subcomponents/LocationRenderer";
import Carousel from "react-bootstrap/Carousel";
import "../css/Locations.css";
import { motion } from "framer-motion";

const Locations = (props) => {
  const [locArr, setLocArr] = useState([]);
  const { cat } = useParams();

  // Scroll to top of page on page load
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  // Runs once when compponent renders, and again when you toggle category
  useEffect(() => {
    let path = process.env.REACT_APP_BACKEND_URL + "/locationsdb/";

    if (cat === "" || cat === undefined) {
      axios
        .get(path)
        .then((response) => {
          setLocArr(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(path + cat)
        .then((response) => {
          setLocArr(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    window.scrollTo(0, 0);
  }, [cat]);

  // Runs when locArr gets updated
  useEffect(() => {
    if (locArr.length !== 0 && typeof locArr !== "undefined") {
    }
  }, [locArr]);

  const getCarouselItems = (locArr) => {
    return locArr
      .sort(() => 0.5 - Math.random())
      .map((location, index) => {
        return (
          <Carousel.Item interval={4000} key={"carousel-item" + index}>
            <img className="d-block w-100 my-car-img" src={location.image} alt="First slide" />
            <Carousel.Caption>
              <h3>{location.name}</h3>
              <p className="my-car-caption">{location.description}</p>
              <p>
                <Link className="btn btn-primary" to={"/destination-" + location.id} state={{ loc: location }}>
                  Learn More &raquo;
                </Link>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      });
  };

  if (locArr.length === 0) {
    return <div id="preloader"></div>;
  } else {
    return (
      <div style={{ backgroundColor: "#ddd" }}>
        <Carousel>{getCarouselItems(locArr)}</Carousel>
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout className="para-cols py-5">
          <LocationRenderer locationsArray={locArr} />
        </motion.div>
      </div>
    );
  }
};

export default Locations;
