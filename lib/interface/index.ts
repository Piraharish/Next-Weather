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
