// WeatherPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchWeather } from './WeatherService';
import './styles.css';

interface Weather {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
}

const WeatherPage: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeather(cityId);
        setWeather(data);
      } catch (error) {
        // Handle error
      }
    };
    getWeather();
  }, [cityId]);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Weather for {cityId}</h2>
      <p>Temperature: {weather.temperature} °C</p>
      <p>Description: {weather.description}</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} m/s</p>
      <p>Pressure: {weather.pressure} hPa</p>
    </div>
  );
};

export default WeatherPage;
