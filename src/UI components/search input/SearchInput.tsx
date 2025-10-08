import "./seacrhInput.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";

export default function SearchInput() {

    const dispatch = useDispatch();

    const isTheme = useSelector((state:any) => state.isTheme);

    const [theme, setTheme] = useState<string>("searchInputDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setTheme("searchInputLight");
        } else {
            setTheme("searchInputDark");
        }
    }, [isTheme]);


    const getWeatherApp = () => {
        const cityName = document.getElementById("cityName") as HTMLInputElement;
        console.log(cityName.value);
        dispatch({type: "SET_CITY", payload: cityName.value});
    }

    return (
        <>
            <div className={theme}>
                <input placeholder="enter city name" id="cityName"/>
                <button onClick={() => getWeatherApp()}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </>
    )
}