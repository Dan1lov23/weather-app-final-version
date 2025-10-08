import "./home.css";

import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

import Container from "../components/container/Container.tsx";

export default function Home() {

    const isTheme = useSelector((state:any) => state.isTheme);

    const [theme, setTheme] = useState<string>("homeDark");

    useEffect(() => {
        if (isTheme === "dark") {
            setTheme("homeLight");
        } else {
            setTheme("homeDark");
        }
    }, [isTheme])

    return (
        <>
            <div className={theme}>
                <Container/>
            </div>
        </>
    )
}