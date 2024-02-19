import {
  Thermometer,
  Wind,
  Signpost,
  GaugeCircle,
  Droplets,
} from "lucide-react";
import Image from "next/image";
import { WeatherData } from "@/lib/weatherApi";
import { CardContent, CardHeader, CardTitle } from "./ui/card";

const HeroCardContent: React.FC<WeatherData> = ({
  name,
  region,
  country,
  icon,
  conditionText,
  tempC,
  tempF,
  windKph,
  windDir,
  pressureMb,
  humidity,
}) => {
  return (
    <>
      <CardHeader className="flex flex-col mx-auto items-center object-contain">
        <CardTitle className="flex items-center justify-center text-center font-bold text-4xl lg:text-2xl">
          {name || "City"}, {region || "Region"}, {country || "Country"}
        </CardTitle>
        {icon && (
          <Image
            src={`https:${
              icon || "//cdn.weatherapi.com/weather/64x64/night/113.png"
            }`}
            alt="Weather"
            width={64}
            height={64}
            priority
          />
        )}
        <p className="text-4xl sm:text-2xl font-bold text-center">
          {conditionText || "Condition"}
        </p>
      </CardHeader>

      <CardContent className="grid grid-cols-2 sm:grid-cols-3 justify-between gap-4">
        <div className="attributes">
          <Thermometer className="text-red-400" />
          <span>{tempC || 0}&deg;C</span>
          <p className="text-muted-foreground">Celsius</p>
        </div>
        <div className="attributes">
          <Thermometer className="text-orange-400" />
          <span>{tempF || 0}&deg;F</span>
          <p className="text-muted-foreground">Fahrenheit</p>
        </div>
        <div className="attributes">
          <Wind className="text-blue-600" />
          <span>{windKph || 0} Km/h</span>
          <p className="text-muted-foreground">Wind Speed</p>
        </div>
        <div className="attributes">
          <Signpost className="text-emerald-400" />
          <span>{windDir || "N/A"}</span>
          <p className="text-muted-foreground">Wind Direction</p>
        </div>
        <div className="attributes">
          <GaugeCircle className="text-yellow-500" />
          <span>{pressureMb || 0} mb</span>
          <p className="text-muted-foreground">Pressure</p>
        </div>
        <div className="attributes">
          <Droplets className="text-sky-400" />
          <span>{humidity || 0} %</span>
          <p className="text-muted-foreground">Humidity</p>
        </div>
      </CardContent>
    </>
  );
};

export default HeroCardContent;
