import Image from "next/image";
import React from "react";

const Weather = ({ weather }) => {
  console.log(weather);
  const iconWeather = weather.weather[0].icon;
  const descriptionWeather = weather.weather[0].description;
  console.log(iconWeather);
  const temptData = weather.main;
  const { feels_like, humidity, pressure, temp, temp_max, temp_min } =
    temptData;

  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${iconWeather}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="text-2xl">{descriptionWeather}</p>
        </div>
        <h1 className="text-9xl  text-white font-semibold">
          {temp.toFixed(0)}&#176;
        </h1>
      </div>
      
      <div className="relative flex-col justify-between bg-black/50 p-4 rounded-xl  w-full mb-20">
        <div className="w-full flex justify-center text-white font-semibold ">
          {" "}
          <p>Weather in {weather.name}</p>
        </div>
        <div className="w-full flex gap-6 justify-between">
          <div>
            <p className="text-gray-400 font-semibold text-lg text-center">
              {feels_like.toFixed(0)}
            </p>
            <p className="text-gray-400 font-semibold text-ms">Feels like</p>
          </div>
          <div>
            <p className="text-gray-400 font-semibold text-lg text-center">{humidity}%</p>
            <p className="text-gray-400 font-semibold text-md text-center">Humidity</p>
          </div>
          <div className="pl-2">
            <p className="text-gray-400 font-semibold text-lg text-center">{weather.wind.speed.toFixed(0)} MPH</p>
            <p className="text-gray-400 font-semibold text-md text-center">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
