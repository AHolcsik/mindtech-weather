import Navbar from "@/components/Navbar";
import WeatherCard from "@/components/WeatherCard";
import { getWeather } from "../../utils/weather";

export default async function Home() {
  const weather = await getWeather();

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
