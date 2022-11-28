import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "../components/Weather";
import Spinner from "../components/Spinner";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setweather] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  const getWeather = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.get(url).then((response) => {
      setweather(response);
    });
    setLoading(false);
  };
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="flex flex-col justify">
        <Head>
          <title>Wa-s-c-hout</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* This div is just an Overlay */}
        <div className=" z-[1] bg-black/40 absolute top-0 left-0 right-0 bottom-0" />
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
          layout="fill"
          alt="Weather Background"
          className="object-cover"
        />

        {/* Search */}
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10 ">
          <form className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl ">
            <div>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent border-none text-white focus:outline-none text-2xl "
                type="text"
                placeholder="Search City"
              />
            </div>
            <button onClick={getWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
        {weather.data && <Weather weather={weather.data} />}
      </div>
    );
  }
}
