import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const InteractiveMap = ({ profiles }) => {
  return (
    <div id="map" className="interactive-map">
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {profiles.map(profile => (
          <Marker key={profile.id} position={[profile.latitude, profile.longitude]}>
            <Popup>
              <div>
                <h3>{profile.name}</h3>
                <p>{profile.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
