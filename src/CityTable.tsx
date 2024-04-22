// CityTable.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCities } from './CityServices';
import './style.css';

const CityTable: React.FC = () => {
  const [cities, setCities] = useState<any[]>([]);

  useEffect(() => {
    const getCities = async () => {
      try {
        const data = await fetchCities();
        setCities(data);
      } catch (error) {
        // Handle error
      }
    };
    getCities();
  }, []);

  return (
    <div>
      <h2>Cities</h2>
      <table>
        {/* Table rows */}
        {cities.map((city) => (
          <tr key={city.id}>
            <td>
              <Link to={`/weather/${city.id}`}>{city.city_name}</Link>
            </td>
            {/* Other columns */}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default CityTable;


