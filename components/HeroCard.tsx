"use client";

import { fetchWeatherData } from "@/actions/weatherApi";
import ContentCard from "@/components/ContentCard";
import DefaultCard from "@/components/DefaultCard";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Loader from "@/components/ui/loader";
import { WeatherData } from "@/lib/interface";
import { SearchSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { LuLoader, LuSearch } from "react-icons/lu";
import * as z from "zod";

const HeroCard = () => {
  const [isPending, startTransition] = useTransition();
  const [weatherData, setWeatherData] = useState<WeatherData | null>();

  const form = useForm<z.infer<typeof SearchSchema>>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      location: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof SearchSchema>) => {
    startTransition(() => {
      fetchWeatherData(data.location)
        .then((data) => {
          setWeatherData(data);
          form.reset();
        })
        .catch((error) => {
          form.setError("location", { message: "Failed to fetch weather data" });
        });
    });
  };

  return (
    <div className="space-y-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-2 justify-center"
        >
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Enter a location"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isPending}
            type="submit"
            aria-label="Search"
            title="Search"
          >
            {isPending ? (
              <LuLoader size={20} className="animate-spin" />
            ) : (
              <LuSearch size={20} />
            )}
          </Button>
        </form>
      </Form>
      {!weatherData && !isPending && <DefaultCard />}
      {isPending && <Loader />}
      {weatherData && (
        <ContentCard
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
    </div>
  );
};

export default HeroCard;
