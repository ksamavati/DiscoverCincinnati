import React, { useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Link } from "react-router-dom";
import axios from "axios";

const containerStyle = {
  position: "absolute",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
};

const center = {
  lat: 39.1031,
  lng: -84.512,
};

function MapElement() {
  let apiKey = process.env.REACT_APP_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });
  const [locArr, setLocArr] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  // const [mapLoaded, setMapLoaded] = React.useState(false)

  // Runs once at page load
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/locationsdb/")
      .then((response) => {
        setLocArr(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const onLoad = React.useCallback(function callback(map) {
  // 	setMapLoaded(true);
  // }, []);

  // const getPinColor = (cat) => {
  // 	switch (cat) {
  // 		case "bars":
  // 			return ({
  // 				backgroundColor: "#0000ff",
  // 				fillColor: "#0000ff",
  // 				strokeColor: "0000ff"
  // 			})
  // 		case "breweries":
  // 			return ({
  // 				backgroundColor: "#0000ff",
  // 				fillColor: "#0000ff",
  // 				strokeColor: "0000ff"
  // 			})
  // 	}
  // }

  const getPinIcon = (cat) => {
    switch (cat) {
      case "arts":
        return "./assets/img/mapPins/arts.png";
      case "parks":
        return "./assets/img/mapPins/parks.png";
      case "bars":
        return "./assets/img/mapPins/bars.png";
      case "breweries":
        return "./assets/img/mapPins/breweries.png";
      case "sports":
        return "./assets/img/mapPins/sports.png";
      case "attractions":
        return "./assets/img/mapPins/attractions.png";
      default:
        return "./assets/img/mapPins/default.png";
    }
  };

  const getPins = (locArr) => {
    return locArr.map((loc) => {
      return (
        <Marker
          position={{
            lat: loc.location.lat,
            lng: loc.location.lng,
          }}
          animation={window.google.maps.Animation.DROP}
          key={loc.id}
          // icon={{path: 'M12.75 0l-2.25 2.25 2.25 2.25-5.25 6h-5.25l4.125 4.125-6.375 8.452v0.923h0.923l8.452-6.375 4.125 4.125v-5.25l6-5.25 2.25 2.25 2.25-2.25-11.25-11.25zM10.5 12.75l-1.5-1.5 5.25-5.25 1.5 1.5-5.25 5.25z',
          //     fillColor: '#34495e',
          //     fillOpacity: 1,
          //     strokeColor: '#000',
          //     strokeWeight: 1,
          //     scale: 1,
          //   }}
          icon={{ url: getPinIcon(loc.category) }}
          onClick={() => {
            setSelected(loc);
          }}
          style={{
            backgroundColor: "#0000ff",
            fillColor: "#0000ff",
            strokeColor: "0000ff",
          }}
        />
      );
    });
  };

  let myStyles = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ];

  const onCloseClick = React.useCallback(function callback(map) {
    setSelected(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      // onLoad={onLoad}
      clickableIcons={false}
      options={{ styles: myStyles }}
      onClick={onCloseClick}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {locArr.length > 0 ? getPins(locArr) : <></>}
      {selected ? (
        <InfoWindow
          position={{ lat: selected.location.lat, lng: selected.location.lng }}
          options={{ pixelOffset: new window.google.maps.Size(0, -34) }}
          onCloseClick={onCloseClick}
        >
          <div className="d-flex flex-column align-items-center">
            <h6>{selected.name}</h6>
            <div>{selected.address1}</div>
            <div>{selected.address2}</div>
            <Link
              to={"/destination-" + selected.id}
              state={{ loc: selected }}
              className="btn btn-primary"
              style={{ fontSize: "8pt" }}
            >
              More Details {">>"}
            </Link>
          </div>
        </InfoWindow>
      ) : null}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapElement);
