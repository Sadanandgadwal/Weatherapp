import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  let api_key = "40481b0717fdb1232120cd305441c45c";

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

  const Searchlocation = (event) => {
    if (event.key === "Enter") {
      axios.get(URL).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat object-cover bg-fixed bg-center bg-opacity-5"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2982&q=80)`,
      }}
    >
      <div className="min-h-screen  flex-col flex items-center justify-center ">
        <div>
          <div className="text-7xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Weather App
            </span>
          </div>
        </div>
        <div className="flex flex-col  rounded p-4 w-full max-w-xs">
          <div className="mb-5 w-full flex items-center justify-center">
            <div className="relative w-72">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <input
                type="text"
                id="voice-search"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                onKeyUp={Searchlocation}
                className=" border border-gray-300 text-black text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Location"
                required
              />
            </div>
          </div>

          <div className="font-bold text-4xl text-white">{data.name}</div>
          {/* <div className="text-lg text-gray-300">{data.timezone}</div> */}
          {/* <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <svg
              className="w-32 h-32"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              ></path>
            </svg>
          </div> */}
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-bold text-7xl text-white">
              {" "}
              {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            </div>
            <div className="flex flex-col items-center ml-6 text-white">
              <div>Cloudy</div>
              <div className="mt-1">
                <span className="text-lg font-light text-gray-100">
                  {data.main ? <h1>{data.clouds.all.toFixed()}°F</h1> : null}
                </span>
              </div>
              <div>
                <span className="text-lg">
                  <i className="far fa-long-arrow-down"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className=" text-lg text-white font-bold">Wind</div>
              <div className="text-lg text-gray-100">
                {" "}
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()} MPH</p>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-bold text-lg text-white">Humidity</div>
              <div className="text-lg text-gray-100">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-bold text-lg text-white">Visibility</div>
              <div className="text-lg text-gray-100"> {data.visibility}km</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
