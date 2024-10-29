"use client";

import React, { useEffect, useState } from 'react';

interface VenueType {
    id: number;
    type: string;
  }

export const VenueTypeFilter= ({ onChange }: { onChange: (id: string) => void }) => {
    const [venueTypes, setVenueTypes] = useState<VenueType[]>([]);
  
    useEffect(() => {
      fetch('/api/venueTypes')
        .then((res) => res.json())
        .then((data) => setVenueTypes(data));
    }, []);

    return (
        <div>
            <label>Venue Type</label>
            <select onChange={(e) => onChange(e.target.value)}>
                <option value="">Select Venue Type</option>
                {venueTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                        {type.type}
                    </option>
            ))}
            </select>
        </div>
    );
};

export default VenueTypeFilter;
