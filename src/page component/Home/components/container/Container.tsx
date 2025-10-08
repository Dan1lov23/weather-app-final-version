import "./container.css";

import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import LogoAndSwitcher from "../logo and switcher/LogoAndSwitcher.tsx";
import StartWarning from "../../../../UI components/start warning/StartWarning.tsx";
import DataInterfaces from "../data interfaces/DataIntefaces.tsx";
import SearchInput from "../../../../UI components/search input/SearchInput.tsx"
import NoCityWarning from "../../../../UI components/no city warning/NoCityWarning.tsx";

export default function Container() {

    const isTheme = useSelector((state:any) => state.isTheme);
    const city = useSelector((state:any) => state.city);

    const [theme, setTheme] = useState<string>("containerDark");

    const [cityName, setCityName] = useState<string>("");
    const [temp, setTemp] = useState<number>(0);
    const [windSpeed, setWindSpeed] = useState<number>(0);
    const [cloud, setCloud] = useState<number>(0);
    const [weather, setWeather] = useState<string>("");
    const [humidity, setHumidity] = useState<number>(0);
    const [weatherInfo, setWeatherInfo] = useState<string>("");

    const [noCityCheck, setNoCityCheck] = useState("");

    const cityCheck = async() => {
       if (city.length > 0) {
           const apiKey = "c8679d90af76e2d4f5fe357e95ae46da"
           fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`)
           .then(res => res.json())
           .then(data => {
               console.log(data);
               setCityName(data.name);
               setTemp(data.main.temp);
               setWindSpeed(data.wind.speed);
               setCloud(data.clouds.all);
               setWeather(data.weather[0].main);
               setHumidity(data.main.humidity);
               setWeatherInfo(data.weather[0].description);
               setNoCityCheck("Successfully");
               console.log(noCityCheck);
           })
       } else {
           setNoCityCheck("");
       }
        console.log(noCityCheck);
    }

    useEffect(() => {
       cityCheck();
       console.log(city);
    }, [city])

    useEffect(() => {
        if (isTheme === "dark") {
            setTheme("containerLight");
        } else {
            setTheme("containerDark");
        }
    }, [isTheme]);

    return (
        <>
            <div className={theme}>
                <LogoAndSwitcher />
                <div className="main">
                    {city === "" ? (
                        <StartWarning />
                    ) : (
                        <div>
                            {noCityCheck.length > 0 ? (
                                <div>
                                    <DataInterfaces cityName={cityName} temp={temp} windSpeed={windSpeed} cloud={cloud} weather={weather} humidity={humidity} weatherInfo={weatherInfo}/>
                                </div>
                            ) : (
                                <div className="noCityError">
                                    <NoCityWarning />
                                    <SearchInput/>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}