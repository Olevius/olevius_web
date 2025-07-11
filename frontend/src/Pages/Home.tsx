import "../App.css";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Layout, Text } from "../components/basics/defaults";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText, ScrollToPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Body } from "../components/Body";
import { Padding } from "../components/Padding";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger, ScrollToPlugin);

export const Home = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // 1. Initial load animation (not scroll-triggered)
      const introTl = gsap.timeline();
      introTl
        .to(window, { duration: 0, scrollTo: 0 })
        .fromTo(".title-header", { x: 750 }, { x: 0, duration: 3 })
        .fromTo(".nav-bar", { y: -70 }, { y: 0, duration: 3 }, "-=3")
        .fromTo(
          ".subtitle-header",
          { y: -70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          }
        );

      // 2. Scrub animation (scroll-triggered)
      const scrubTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".header",
          start: "bottom bottom",
          end: "+=1000",
          pin: true,
          scrub: true,
          markers: true,
        },
      });

      scrubTl
        .to(".title-header", {
          fontSize: "3000px",
          scale: 10,
          duration: 3,
          color: "white",
        })
        .to(
          "header",
          {
            color: "white",
          },
          "-=3"
        );
    },
    { scope: container }
  );

  return (
    <Layout
      ref={container}
      style={{
        overflowX: "hidden",
        overflowY: "hidden",
        position: "relative",
        display: "block",
      }}
    >
      <NavBar className="nav-bar" style={{ backgroundColor: "#dcffcf" }} />
      <Layout>
        <Header className="header">
          <Layout
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="layout"
          >
            <Layout ref={container}>
              <Text
                className="title-header"
                style={{
                  fontSize: "200px",
                  color: "black",
                }}
              >
                OLEVIUS
              </Text>
            </Layout>
            <Text
              className="subtitle-header"
              style={{
                fontSize: "50px",
                color: "black",
                top: "50%",
                left: "50%",
                width: "100vh",
                transform: "translate(-50%, -50%)",
                position: "absolute",
              }}
            >
              Accuracy. Unmatched.
            </Text>
          </Layout>
        </Header>
        <Padding size={100} className="padding" />
        <Body>
          <Layout style={{ display: "flex", flexDirection: "column" }}>
            <Text
              style={{
                fontSize: "20px",
                color: "black",
              }}
            >
              OLEVIUS
            </Text>
          </Layout>
        </Body>
      </Layout>
    </Layout>
  );
};
