import React, { useState, useEffect, useRef, useContext } from 'react';
import BridgesContext from '../../contexts/bridges-context';
import { Map as GoogleMap, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import BridgeInfo from './BridgeInfo';

const Map = (props) => {
  const googleMap = useRef();
  const defaultCurrentBridge =
    props.location.state ?  props.location.state.bridge : null;
  const [ bridges, _ ] = useContext(BridgesContext);
  const [ marker, setMarker ] = useState();  
  const [ currentBridge, setCurrentBridge ] = useState(defaultCurrentBridge);

  const onMarkerClick = (marker, bridge) => {
    setMarker(marker);
    setCurrentBridge(bridge);
  }

  const renderMarkers = () => {
    return bridges.map(bridge => (
      <Marker
        onClick={(_, marker, e) => onMarkerClick(marker, bridge)}
        key={bridge.id}
        position={{
          lat: 47 + bridge.country.length,
          lng: 10 + bridge.name.length
        }}
      />
    ))
  }

  return (
    <GoogleMap
      ref={googleMap}
      google={props.google}
      zoom={currentBridge ? 10 : 5}
      style={{ width: '100%', heigth: '100%'}}
      onPositionChanged={() => console.log('aaa')}
      initialCenter={{
        lat: currentBridge ? 47 + currentBridge.country.length : 47,
        lng: currentBridge ? 10 + currentBridge.name.length : 10,
      }}
    >
      { renderMarkers() }
      <InfoWindow marker={marker} visible={true}>
        <BridgeInfo bridge={currentBridge}/>
      </InfoWindow>
    </GoogleMap>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY
})(Map);