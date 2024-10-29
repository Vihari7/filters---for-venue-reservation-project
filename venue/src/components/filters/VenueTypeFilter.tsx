import React from 'react';

const VenueTypeFilter: React.FC = () => {
    return (
        <div>
            <label htmlFor="venueType">Venue Type:</label>
            <select id="venueType" name="venueType">
                <option value="all">All</option>
                <option value="conference">Conference</option>
                <option value="wedding">Wedding</option>
            </select>
        </div>
    );
};

export default VenueTypeFilter;
