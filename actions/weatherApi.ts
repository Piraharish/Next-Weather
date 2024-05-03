"use server";

import { WeatherData } from "@/lib/interface";
import { SearchSchema } from "@/lib/schema";

export const fetchWeatherData = async (query: string): Promise<WeatherData> => {
  const baseUrl = process.env.NEXT_PUBLIC_WEATHER_BASE_URL;

  try {
    const validatedField = SearchSchema.parse({ location: query });

    const response = await fetch(
      `${baseUrl}${validatedField.location}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    const { current, location } = data;
    return {
      name: location.name,
      region: location.region,
      country: location.country,
      icon: current.condition.icon,
      conditionText: current.condition.text,
      tempC: current.temp_c,
      tempF: current.temp_f,
      windKph: current.wind_kph,
      windDir: current.wind_dir,
      pressureMb: current.pressure_mb,
      humidity: current.humidity,
    };
  } catch (error) {
    throw new Error("Enter a valid location or try again later");
  }
};
