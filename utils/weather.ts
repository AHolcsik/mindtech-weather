export async function getWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=peshawar&appid=${process.env.WEATHER_API_KEY}`
  );
  if (!response.ok) throw new Error("failed to fetch weather");
  const data = await response.json();

  return data;
}
