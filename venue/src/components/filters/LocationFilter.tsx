"use client";
import React, { useEffect, useState } from 'react';

interface Location {
    id: number;
    province: string;
    city: string;
  }

  export const LocationFilter = ({ onChange }: { onChange: (id: string) => void }) => {
    const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    fetch('/api/locations')
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);


  return (
    <div>
      <label>Location</label>
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="">Select Location</option>
        {locations.map((location) => (
          <option key={location.id} value={location.id}>
            {location.province} - {location.city}
          </option>
        ))}
      </select>
    </div>
  );
};