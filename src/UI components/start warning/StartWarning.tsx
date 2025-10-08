import "./startWarning.css";

import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import SearchInput from "../search input/SearchInput.tsx";

export default function StartWarning() {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [theme, setTheme] = useState<string>("startWarningDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setTheme("startWarningLight");
        } else {
            setTheme("startWarningDark");
        }
    }, [isTheme]);

    return (
        <>
            <div className={theme}>
                <div className="warningText">
                    <p>Find out the weather in your city</p>
                    <SearchInput />
                </div>
            </div>
        </>
    )
}