import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import WeatherCard from "@/components/WeatherCard";
import { getWeather } from "../../utils/weather";

export default async function Home() {
  const weather = await getWeather();

  console.log(getWeather);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="p-8">
        <WeatherCard weatherData={weather} />
      </div>
    </div>
  );
}
