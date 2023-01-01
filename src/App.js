import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/subcomponents/Footer";
import Locations from "./components/Locations";
import MapPage from "./components/MapPage";
import OneLocation from "./components/OneLocation";
import Contact from "./components/Contact";
import Teams from "./components/Teams";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import TopOfPage from "./components/subcomponents/TopOfPage";

function App() {
  const [renderFooter, setRenderFooter] = useState(true);
  const [renderTopLink, setRenderTopLink] = useState(true);
  const location = useLocation();

  // Import google maps JS
  // useEffect(() => {
  // 	let mapsApiKey = (process.env.NODE_ENV === 'development') ? process.env.REACT_APP_DEV_MAPS_API_KEY : process.env.REACT_APP_LIVE_MAPS_API_KEY;

  // 	const script = document.createElement("script");

  // 	script.src = "https://maps.googleapis.com/maps/api/js?key=" + mapsApiKey +  "&libraries=places";
  // 	script.async = true;

  // 	document.body.appendChild(script);
  // }, []);

  useEffect(() => {
    if (location.pathname === "/map") {
      // if (renderFooter === true) {
      setRenderFooter(false);
      // }
    } else {
      // if (renderFooter === false) {
      setRenderFooter(true);
      // }
    }
    if (
      location.pathname === "/map" ||
      location.pathname === "/contact" ||
      location.pathname === "/team"
    ) {
      // if (renderFooter === true) {
      setRenderTopLink(false);
      // }
    } else {
      // if (renderFooter === false) {
      setRenderTopLink(true);
      // }
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar />
      <div className="nav-offset" />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destination-:id" element={<OneLocation />} />
          <Route path="/:cat" element={<Locations />} />
          <Route path="/team" element={<Teams />} />
        </Routes>
      </main>
      {renderFooter && <Footer />}
      {/* {renderTopLink && <a href="#header" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}
      {renderTopLink && <TopOfPage />}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
