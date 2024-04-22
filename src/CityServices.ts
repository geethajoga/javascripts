// CityService.ts
import axios from 'axios';
import './App.css';


const CITY_API_URL = 'https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/api/?disjunctive.cou_name_en&sort=name';

export const fetchCities = async () => {
  try {
    const response = await axios.get(CITY_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};
