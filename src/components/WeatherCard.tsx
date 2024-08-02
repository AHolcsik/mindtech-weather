import React from "react";

const WeatherCard = (data) => {
  return (
    <div>
      <p className="text-sm font-semibold leading-6 text-gray-900">
        {data.weatherData.name} weather
      </p>
      <ul role="list" className="divide-y divide-gray-100">
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Temperature: {data.weatherData.main.temp}
              </p>
            </div>
          </div>
        </li>
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Humidity: {data.weatherData.main.humidity}
              </p>
            </div>
          </div>
        </li>
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Wind speed: {data.weatherData.wind.speed}
              </p>
            </div>
          </div>
        </li>
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Weather description: {data.weatherData.weather[0].description}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WeatherCard;
