import React, { useState, useEffect, useRef, useContext } from 'react';
import { Map as GoogleMap, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import BridgesContext from '../../contexts/bridges-context';
import BridgeInfo from './BridgeInfo';
import BackToListButton from './BackToListButton';

const GREEN_MARKER = "https://mt.google.com/vt/icon?psize=30&font=fonts/arialuni_t.ttf&color=ff304C13&name=icons/spotlight/spotlight-waypoint-a.png&ax=43&ay=48&text=%E2%80%A2";
const RED_MARKER = "https://mt.googleapis.com/vt/icon/name=icons/spotlight/spotlight-poi.png&scale=1";

const Map = (props) => {
  const googleMap = useRef();
  const defaultCurrentBridge =
    props.location.state ?  props.location.state.bridge : null;
  const [ bridges, _ ] = useContext(BridgesContext);
  const [ marker, setMarker ] = useState();  
  const [ currentBridge, setCurrentBridge ] = useState(defaultCurrentBridge);
  const [ zoom, setZoom ] = useState(currentBridge ? 10 : 5);

  const onMarkerClick = (marker, bridge) => {
    setMarker(marker);
    setCurrentBridge(bridge);
  }

  const renderMarkers = () => {
    return bridges.map(bridge => {

      // if zoom smaller than X do not render small bridges
      return (
        <Marker
          onClick={(_, marker, e) => onMarkerClick(marker, bridge)}
          key={bridge.id}
          position={{
            lat: bridge.location.lat,
            lng: bridge.location.lng
          }}
          icon={{
            url: bridge === currentBridge ? GREEN_MARKER : RED_MARKER
          }}
        />
      )
    })
  }

  useEffect(() => {
    if(googleMap.current) {
      googleMap.current.map.addListener('zoom_changed', (e) => {
        setZoom(googleMap.current.map.getZoom());
      })
    }
  }, [])

  return (
    <>
      <BackToListButton />
      <GoogleMap
        ref={googleMap}
        google={props.google}
        zoom={zoom}
        style={{ width: '100%', heigth: '100%'}}
        initialCenter={{
          lat: currentBridge ? currentBridge.location.lat : 47,
          lng: currentBridge ? currentBridge.location.lng : 10,
        }}
      >
        { renderMarkers() }
        <InfoWindow marker={marker} visible={true}>
          <BridgeInfo bridge={currentBridge}/>
        </InfoWindow>
      </GoogleMap>
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY
})(Map);