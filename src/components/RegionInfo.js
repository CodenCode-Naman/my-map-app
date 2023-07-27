// RegionInfo.js
import React from 'react';
import { useSelector } from 'react-redux';

const RegionInfo = () => {
    const selectedRegion = useSelector((state) => state.map.selectedRegion);

    return (
        <div className="region-info">
            <h3>Region Information</h3>
            <p>Selected Region: {selectedRegion}</p>
            {/* Display other region info as per your requirement */}
        </div>
    );
};

export default RegionInfo;
