import React, { useEffect, useState, useLayoutEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, useGoogleMap } from '@react-google-maps/api';



const SinglePinMap = (props) => {
	const center = {
		lat: props.coords.lat,
		lng: props.coords.lng
	};
	const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCdU6rorFzmBl-NxqSRVJfVl7dy2nniTM8"
  })

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);


  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []);

	const position = props.coords;

	
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width: 'auto', height: '400px'}}
        center={center}
        zoom={12}
        // onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
				<Marker	position={center} />
				{/* <Marker	position={{
					lat: props.coords.lat,
					lng: props.coords.lng
				}} /> */}
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(SinglePinMap)