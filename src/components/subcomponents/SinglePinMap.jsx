import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';



const SinglePinMap = (props) => {
	const center = {
		lat: props.coords.lat,
		lng: props.coords.lng
	};
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: "AIzaSyCdU6rorFzmBl-NxqSRVJfVl7dy2nniTM8"
	})

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={{ width: 'auto', height: '400px' }}
			center={center}
			zoom={12}
		>
			<Marker position={center} />
			<></>
		</GoogleMap>
	) : <></>
}

export default React.memo(SinglePinMap)