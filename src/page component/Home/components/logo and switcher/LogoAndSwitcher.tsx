import "./LogoAndSwitcher.css";

import ThemeSwitcher from "../../../../UI components/theme switcher/ThemeSwitcher.tsx";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function LogoAndSwitcher() {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [theme, setTheme] = useState<string>("LogoAndSwitcherDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setTheme("LogoAndSwitcherLight");
        } else {
            setTheme("LogoAndSwitcherDark");
        }
    }, [isTheme]);

    return (
        <>
            <div className={theme}>
                <div className="logo">
                    <p>Weather app</p>
                </div>
                <div className="switcher">
                    <ThemeSwitcher />
                </div>
            </div>
        </>
    )
}