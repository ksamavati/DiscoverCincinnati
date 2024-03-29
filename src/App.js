import "./App.css";
import Navbar from "./components/Navbar";
import NavbarSpacer from "./components/NavbarSpacer";
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

	// useEffect(() => {
	// }, []);

	useEffect(() => {
		if (location.pathname === "/map") {
			setRenderFooter(false);
		} else {
			setRenderFooter(true);
		}
		if (location.pathname === "/map" || location.pathname === "/contact" || location.pathname === "/team") {
			setRenderTopLink(false);
		} else {
			setRenderTopLink(true);
		}
	}, [location.pathname]);

	return (
		<div className="App app-flex">
			<Navbar />
			<NavbarSpacer />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/locations" element={<Locations />} />
				<Route path="/map" element={<MapPage />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/destination-:id" element={<OneLocation />} />
				<Route path="/:cat" element={<Locations />} />
				<Route path="/team" element={<Teams />} />
			</Routes>
			{renderFooter && <Footer />}
			{/* {renderTopLink && <a href="#header" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}
			{renderTopLink && <TopOfPage />}

			{/* <Footer /> */}
		</div>
	);
}

export default App;
