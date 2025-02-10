'use client'
import { useEffect, useState } from "react"

const WeatherComponent = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
          try {
            const response = await fetch(
              "https://api.open-meteo.com/v1/forecast?latitude=52.2298&longitude=21.0118&current_weather=true"
            );
            if (!response.ok) {
                throw new Error("HTTP error! Status: ${response.status}");
            } 
            const data = await response.json();
            if (!data.current_weather) {
                throw new Error("Weather data is missing!");
              }
            setWeather(data);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchWeather();
      }, []);

    const formatTime = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    };

    if (loading) return <p></p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="">
        <span>Warsaw, Poland, {formatTime(weather.current_weather.time)}: </span>
        <span>{weather.current_weather.temperature}°C</span>
    </div>
  )
}

export default WeatherComponent