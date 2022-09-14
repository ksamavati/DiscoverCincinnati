import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import axios from 'axios';

const containerStyle = {
	position: 'absolute',
	top: '73px',
	right: '0px',
	bottom: '0px',
	left: '0px',
};

const center = {
  lat: 39.1031,
  lng: -84.5120
};

function MapElement() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCdU6rorFzmBl-NxqSRVJfVl7dy2nniTM8"
  })
  const [locArr, setLocArr] = React.useState([])
  const [selected, setSelected] = React.useState(null)
  const [mapLoaded, setMapLoaded] = React.useState(false)

	// Runs once at page load
	useEffect(() => {
		if (process.env.NODE_ENV === 'development') {
				axios.get('https://discovercincinnati.herokuapp.com/locationsdb/')
				.then(response => {
					setLocArr(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
		// If no category, load all locations
			axios.get('/locationsdb/')
			.then(response => {
				setLocArr(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		}
	},[]);

  const onLoad = React.useCallback(function callback(map) {
    setMapLoaded(true);
  }, []);

	const position = {
		lat: 39.103119,
		lng: -84.512016
	};

	const getPins = (locArr) => {
			return locArr.map((loc) => {
				return (<Marker	position={{
					lat: loc.location.lat,
					lng: loc.location.lng
					}}
					animation={window.google.maps.Animation.DROP}
					key={loc.id}
					onClick={() => {
						setSelected(loc);
					}}
					 />)
		})

		// console.log(locArr.map((loc) => {
		// 	return (<Marker	position={{lat: loc.location.lat, lng: loc.location.lat}} />)
		// }))
	}


  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
      >
        { /* Child components, such as markers, info windows, etc. */ }
				{(locArr.length > 0) ? getPins(locArr) : <></> }
				{selected ? 
					<InfoWindow position={{lat: selected.location.lat, lng: selected.location.lng}} pixelOffset={-50}>
					<div className="d-flex flex-column align-items-center">
						<h6>{selected.name}</h6>
						<div>{selected.address1}</div>
						<div>{selected.address2}</div>
						<Link to={"/destination-" + selected.id} state={{ loc: selected }} className="btn btn-primary" style={{fontSize: '8pt'}}>More Details {">>"}</Link>
					</div>
					</InfoWindow>

				: null}
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapElement)