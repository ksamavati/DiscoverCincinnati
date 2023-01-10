import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

{
  /* <script
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAX5fX8976AtyGXi5iANifb78vSwHRarX0&libraries=places"
  defer
></script>; */
}

const SinglePinMap = (props) => {
  let apiKey = process.env.REACT_APP_MAPS_API_KEY;

  const center = {
    lat: props.coords.lat,
    lng: props.coords.lng,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "auto", height: "400px" }}
      center={center}
      zoom={12}
    >
      <Marker position={center} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(SinglePinMap);
