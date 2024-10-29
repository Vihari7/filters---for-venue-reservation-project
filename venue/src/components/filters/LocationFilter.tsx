import React from 'react';

const LocationFilter: React.FC = () => {
    return (
        <div>
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" placeholder="Enter location" />
        </div>
    );
};

export default LocationFilter;
