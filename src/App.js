import * as ImpactAddresses from './data/ImpactAddress.json';
import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
require('dotenv').config();


function Map() {
  const [selectedAddress, setSelectedAddress] = useState(null);
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 33.516239, lng: -86.81276 }}
    >
      {ImpactAddresses.Impact.map((address) => (
        <Marker
          key={address.A}
          position={{
            lat: Number(address.B),
            lng: Number(address.C)
          }}
          onMouseOver={() => {
            setSelectedAddress(address);
          }}
        />
      ))}

      {selectedAddress && (
        <InfoWindow
          position={{
            lat: Number(selectedAddress.B),
            lng: Number(selectedAddress.C)
          }}
          onCloseClick={() =>{
            setSelectedAddress(null);
          }}
        ><div>Address Info</div></InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px`, width: `55%` }} />}
        mapElement={<div style={{ height: `100%` }} />} />
    </div>
  );
}

export default App;
