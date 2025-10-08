import "./noCityWarning.css";

import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function NoCityWarning() {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [theme, setTheme] = useState<string>("NoCityWarningDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setTheme("NoCityWarningLight");
        } else {
            setTheme("NoCityWarningDark");
        }
    }, [isTheme]);

    return (
        <>
            <div className={theme}>
                <h1>Такой город не найден</h1>
            </div>
        </>
    )
}