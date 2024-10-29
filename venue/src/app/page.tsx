"use client"; 

import { useState } from 'react';
import {LocationFilter} from '../components/filters/LocationFilter';
import {VenueTypeFilter} from '../components/filters/VenueTypeFilter';

interface Venue {
  id: number;
  name: string;
  address: string;
  capacity: number;
  size: number;
  timeSchedule: string;
}

export default function HomePage() {
  const [locationId, setLocationId] = useState<string | null>(null);
  const [venueTypeId, setVenueTypeId] = useState<string | null>(null);
  const [venues, setVenues] = useState<Venue[]>([]);

  const fetchVenues = () => {
    let query = `/api/venues?`;
    if (locationId) query += `locationId=${locationId}&`;
    if (venueTypeId) query += `venueTypeId=${venueTypeId}`;

    fetch(query)
      .then((res) => res.json())
      .then((data) => setVenues(data));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Find Your Venue</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <LocationFilter onChange={setLocationId} />
        <VenueTypeFilter onChange={setVenueTypeId} />
        <button onClick={fetchVenues} style={{ padding: '8px 16px' }}>
          Search
        </button>
      </div>
      <div>
        {venues.map((venue) => (
          <div key={venue.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
            <h2>{venue.name}</h2>
            <p>{venue.address}</p>
            <p>Capacity: {venue.capacity}</p>
            <p>Size: {venue.size} sqft</p>
            <p>Time Schedule: {venue.timeSchedule}</p>
          </div>
        ))}
      </div>
    </div>
  );
}