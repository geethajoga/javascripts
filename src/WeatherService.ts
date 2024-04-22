// src/services/weatherService.ts
import axios from 'axios';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

export const fetchWeather = async (cityId: string) => {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${API_KEY}`;

  try {
    const response = await axios.get(API_URL);
    const data: WeatherData = response.data;
    
    // Extract relevant weather information
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const pressure = data.main.pressure;

    return {
      temperature,
      description,
      humidity,
      windSpeed,
      pressure,
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
