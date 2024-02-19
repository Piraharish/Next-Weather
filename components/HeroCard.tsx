"use client";
import { useState, useEffect } from "react";
import { fetchWeatherData, WeatherData } from "@/lib/weatherApi";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import HeroCardContent from "./HeroCardContent";
import { Search } from "lucide-react";

const HeroCard: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>({
    name: "Location",
    region: "Region",
    country: "Country",
    icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
    conditionText: "Condition",
    tempC: 0,
    tempF: 0,
    windKph: 0,
    windDir: "Null",
    pressureMb: 0,
    humidity: 0,
  });
  const [error, setError] = useState<string | null>(null);

  const fetchInitialWeatherData = async (
    latitude: number,
    longitude: number
  ) => {
    try {
      const coords = `${latitude},${longitude}`;
      const data = await fetchWeatherData(`${coords}`);
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError("Failed to fetch initial weather data.");
    }
  };

  useEffect(() => {
    const getLocation = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              fetchInitialWeatherData(latitude, longitude);
            },
            (error) => {
              console.error("Error getting location:", error);
              // If user denies location access, use default coordinates
              fetchInitialWeatherData(9.370589, 78.833458);
            }
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
          // If geolocation is not supported, use default coordinates
          fetchInitialWeatherData(9.370589, 78.833458);
        }
      } catch (error) {
        console.error("Error getting location:", error);
        // If there's any other error, use default coordinates
        fetchInitialWeatherData(9.370589, 78.833458);
      }
    };

    getLocation();
  }, []);

  const handleSearch = async () => {
    const trimmedLocation = searchLocation.trim().toLowerCase();

    if (!trimmedLocation) {
      setError("Please enter a location to search.");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(trimmedLocation)) {
      setError("Please enter a valid location (letters and spaces only).");
      return;
    }

    try {
      const data = await fetchWeatherData(trimmedLocation);
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError(
        "Failed to fetch weather data. Enter a valid Input or try again later."
      );
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="flex w-3/4 items-center justify-center mx-auto py-4 gap-x-2">
        <Input
          type="text"
          placeholder="Search location..."
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button onClick={handleSearch} className="px-3"><Search size={18} /></Button>
      </div>
      {weatherData && (
        <HeroCardContent
          name={weatherData.name}
          region={weatherData.region}
          country={weatherData.country}
          icon={weatherData.icon}
          conditionText={weatherData.conditionText}
          tempC={weatherData.tempC}
          tempF={weatherData.tempF}
          windKph={weatherData.windKph}
          windDir={weatherData.windDir}
          pressureMb={weatherData.pressureMb}
          humidity={weatherData.humidity}
        />
      )}
    </>
  );
};

export default HeroCard;
