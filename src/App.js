import * as ImpactAddresses from './data/ImpactAddress.json';
import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
require('dotenv').config();


function Map() {
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
          icon={{}}
        />
      ))}
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
