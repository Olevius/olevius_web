import "../App.css";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Layout, Text } from "../components/basics/defaults";
import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, SplitText);

export const Home = () => {
    const container = useRef(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useGSAP(
        () => {
            tl.current = gsap
                .timeline()
                .fromTo(".title-header", { x: 750 }, { x: 0, duration: 3 })
                .fromTo(
                    ".nav-bar",
                    { y: -70 },
                    { y: 0, duration: 3, overflow: -3 },
                    "-=3"
                )
                .fromTo(
                    ".subtitle-header",
                    { y: -70, opacity: 0 },
                    { y: 0, opacity: 1, duration: 2, overflow: 3 }
                );
        },
        { scope: container }
    );

    return (
        <Layout ref={container}>
            <NavBar
                className="nav-bar"
                style={{ backgroundColor: "#dcffcf" }}
            />
            <Header ref={container}>
                <Layout style={{ display: "flex", flexDirection: "column" }}>
                    <Text
                        className="title-header"
                        style={{
                            fontSize: "200px",
                        }}
                    >
                        OLEVIUS
                    </Text>
                    <Text
                        className="subtitle-header"
                        style={{
                            fontSize: "50px",
                        }}
                    >
                        Accuracy. Unmatched.
                    </Text>
                </Layout>
            </Header>
        </Layout>
    );
};
