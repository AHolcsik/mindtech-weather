import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import WeatherCard from "@/components/WeatherCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <WeatherCard />
      </div>
    </div>
  );
}
