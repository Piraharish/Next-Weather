export interface WeatherData {
  name: string;
  region: string;
  country: string;
  icon: string;
  conditionText: string;
  tempC: number;
  tempF: number;
  windKph: number;
  windDir: string;
  pressureMb: number;
  humidity: number;
}

export const fetchWeatherData = async (query: string | number): Promise<WeatherData> => {
  const baseUrl = process.env.NEXT_PUBLIC_WEATHER_BASE_URL;
  const apiUrl = `${baseUrl}${query}`;

  try {
    const response = await fetch(apiUrl);
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
    throw new Error("Failed to fetch weather data");
  }
};
