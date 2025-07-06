import "./App.css";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Text } from "./components/basics/defaults";
import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, SplitText); // register the hook to avoid React version discrepancies

// ...existing imports...
export const App = () => {
    const container = useRef(null);

    useGSAP(
        () => {
            gsap.fromTo(".poop", { x: 750 }, { x: 0, duration: 3 });
        },
        { scope: container }
    );

    return (
        <>
            <NavBar />
            <Header
                ref={container}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                }}
            >
                <Text
                    className="poop"
                    style={{ color: "white", fontSize: "200px" }}
                >
                    {/* spell-checker: disable-next-line */}
                    OLEVIUS
                </Text>
            </Header>
        </>
    );
};
