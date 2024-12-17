import React, { useState } from "react";
import { FaMapMarkerAlt, FaQuestion, FaCircle } from "react-icons/fa";
import { IoSunny, IoRainy, IoCloudy, IoSnow } from "react-icons/io5";
import Background from "../components/Background";
import "./weatherApp.css";


const WeatherApp = () => {
    //to save the weather data
    const [weather, setweather] = useState(null);

    //to save the Place name in a variable
    const [placeName, setplaceName] = useState("");

    const setLoc = (e) => {
        setplaceName(e.target.value);
        console.log(e.target.value);
    };


    //fetchWeatherFucntion
    const fetchWeather = async () => {
        const API_Key = import.meta.env.VITE_API_KEY;
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&units=metric&appid=${API_Key}`);
            
            if(!res.ok){
                throw new Error("Location not found. Please check the name and try again.");
            }
            
            const data = await res.json();
            setweather(data);
            console.log(data);
        } catch (error) {
            console.log(error);
            alert(error.message)
        }
    };


    //adding custom Icons
    const weatherIcon = () => {
        //checking if everything exsist or not.
        if (!weather || !weather.weather || !weather.weather[0]?.description) {
            return <FaQuestion style={{ fontSize: "64px", color: "black" }} />;
        }



        if ((weather.weather[0].description).toString().toLowerCase().includes("rain")) {
            return <IoRainy style={{ fontSize: "64px", color: "black" }} />
        }
        else if ((weather.weather[0].description).toString().toLowerCase().includes("clear")) {
            return <IoSunny style={{ fontSize: "64px", color: "black" }} />
        }
        else if ((weather.weather[0].description).toString().toLowerCase().includes("cloud")) {
            return <IoCloudy style={{ fontSize: "64px", color: "black" }} />
        }
        else if ((weather.weather[0].description).toString().toLowerCase().includes("snow")) {
            return <IoSnow style={{ fontSize: "64px", color: "black" }} />
        }
        else {
            return <FaQuestion style={{ fontSize: "64px", color: "black" }} />
        }
    };



    return (
        <>
            <div className="weather-app">
                <Background />
                <div className="center-body">
                    {weather ?
                        <div className="weather-info">

                            {/* <img 
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} //this will fetch the corresponding weather icon.
                            alt="weather-icon" 
                            className="weather-icon"
                        /> */}

                            {weatherIcon()}
                            <div className="temp-txt">
                                {weather.main.temp}
                                <FaCircle style={{ fontSize: "12px", color: "black", paddingTop: "4px" }} />
                            </div>
                            <div className="description-txt">{(weather.weather[0].description).toUpperCase()}</div>

                        </div>
                        :
                        <div className="weather-info">
                            <h1>Enter a Location...</h1>
                        </div>
                    }
                    <div className="input-feild">
                        <FaMapMarkerAlt style={{ color: "black", fontSize: "48px", paddingLeft: "8px" }} />
                        <input
                            type="text"
                            placeholder="Place ?"
                            value={placeName}
                            onChange={setLoc}
                        />
                        <button type="submit" onClick={fetchWeather}>Submit</button>
                    </div>
                </div>

            </div>
        </>
    )
};

export default WeatherApp;