import "./App.css";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Text } from "./components/basics/defaults";
import { useRef, useEffect } from "react";
import { animate } from "animejs";

// ...existing imports...

export const App = () => {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            animate("Text", {
                targets: textRef.current, // Pass the DOM node directly!
                fontSize: "200px",
                duration: 1000,
                easing: "easeOutExpo",
            });
        }
    }, []);

    return (
        <>
            <NavBar />
            <Header
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                }}
            >
                <Text
                    style={{ color: "white", fontSize: "200px" }}
                    ref={textRef}
                >
                    OLEVIUS
                </Text>
            </Header>
        </>
    );
};
