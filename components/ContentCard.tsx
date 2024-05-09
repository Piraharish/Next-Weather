import { WeatherData } from "@/lib/interface";
import Image from "next/image";
import { Suspense } from "react";
import { BiSolidThermometer } from "react-icons/bi";
import { BsSignpostSplit } from "react-icons/bs";
import {
  LuDroplets,
  LuGaugeCircle,
  LuThermometerSun,
  LuWind,
} from "react-icons/lu";
import { MotionDiv } from "./motions";
import Loader from "./ui/loader";
import WeatherAttribute from "./WeatherAttribute";

const ContentCard: React.FC<WeatherData> = ({
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
    <div className="space-y-4">
      <MotionDiv
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.3,
        }}
        className="flex items-center justify-between p-4 border rounded-md"
      >
        <div className="space-y-1 w-full">
          <WeatherAttribute label="City" value={name} />
          <WeatherAttribute label="Region" value={region} />
          <WeatherAttribute label="Country" value={country} />
          <WeatherAttribute label="Weather" value={conditionText} />
        </div>
        {icon && (
          <Suspense fallback={<Loader />}>
            <Image
              src={`https:${icon}`}
              alt={`${conditionText} Icon`}
              width={64}
              height={64}
              quality={100}
              loading="lazy"
              className="size-28 bg-primary/10 rounded-md"
            />
          </Suspense>
        )}
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <WeatherAttribute
          icon={<LuThermometerSun className="text-red-500 size-8" />}
          label="Celsius"
          value={`${tempC}°C`}
        />
        <WeatherAttribute
          icon={<BiSolidThermometer className="text-orange-400 size-8" />}
          label="Fahrenheit"
          value={`${tempF}°F`}
        />
        <WeatherAttribute
          icon={<LuWind className="text-blue-600 size-8" />}
          label="Wind Speed"
          value={`${windKph} Km/h`}
        />
        <WeatherAttribute
          icon={<BsSignpostSplit className="text-emerald-400 size-8" />}
          label="Wind Direction"
          value={windDir}
        />
        <WeatherAttribute
          icon={<LuGaugeCircle className="text-yellow-500 size-8" />}
          label="Pressure"
          value={`${pressureMb} mb`}
        />
        <WeatherAttribute
          icon={<LuDroplets className="text-sky-400 size-8" />}
          label="Humidity"
          value={`${humidity}%`}
        />
      </MotionDiv>
    </div>
  );
};

export default ContentCard;
