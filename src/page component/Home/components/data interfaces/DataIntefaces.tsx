import "./dataInterfaces.css";

import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCity, faWind, faTemperature0, faCloud, faUmbrella, faDroplet, faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../../../../UI components/search input/SearchInput.tsx";

export default function DataInterfaces({cityName, windSpeed, temp, cloud, weather, humidity, weatherInfo}:{cityName:string, windSpeed:number, temp:number, cloud:number, weather:string, humidity:number, weatherInfo:string}) {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [theme, setTheme] = useState<string>("DataInterfacesDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setTheme("DataInterfacesLight");
        } else {
            setTheme("DataInterfacesDark");
        }
    }, [isTheme]);

    return (
        <>
            <div className={theme}>
                <div className="firstRow">
                    <div className="cityAndSearchInput">
                        <div className="city">
                            <p><FontAwesomeIcon icon={faCity}/></p>
                            <h2>{cityName}</h2>
                        </div>
                        <div className="search">
                            <SearchInput/>
                        </div>
                    </div>
                    <div className="weatherStats">
                        <div className="stat">
                            <p><FontAwesomeIcon icon={faTemperature0}/></p>
                            <h2>{temp}</h2>
                        </div>
                        <div className="stat">
                        <p><FontAwesomeIcon icon={faWind}/></p>
                            <h2>{windSpeed}</h2>
                        </div>
                        <div className="stat">
                            <p><FontAwesomeIcon icon={faCloud}/></p>
                            <h2>{cloud}</h2>
                        </div>
                        <div className="stat">
                            <p><FontAwesomeIcon icon={faUmbrella}/></p>
                            <h2>{weather}</h2>
                        </div>
                        <div className="stat">
                            <p><FontAwesomeIcon icon={faDroplet}/></p>
                            <h2>{humidity}</h2>
                        </div>
                        <div className="stat">
                            <p><FontAwesomeIcon icon={faCircleInfo}/></p>
                            <h3>{weatherInfo}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}