import React from 'react';
import {
  Map as GoogleMap,
  GoogleApiWrapper,
  InfoWindow,
  Marker
} from 'google-maps-react';

const Map = (props) => (
  <GoogleMap
    google={props.google}
    zoom={14}
    style={{ width: '100%', heigth: '100%'}}
    initialCenter={{
      lat: -1.2884,
      lng: 36.8233
    }}
  />
);

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY
})(Map);