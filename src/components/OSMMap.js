// OSMMap.js
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const OSMMap = ({ region }) => {
    // Define the map's initial view
    const mapCenter = [51.505, -0.09];
    const zoomLevel = 13;

    return (
        <MapContainer center={mapCenter} zoom={zoomLevel} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* You can add markers or other map features based on the selected region */}
        </MapContainer>
    );
};

export default OSMMap;
