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
          start: "top top",
          end: "+=1000",
          pin: true,
          scrub: true,
          markers: true,
        },
      });

      scrubTl.to(".title-header", {
        fontSize: "5000px",
        scale: 10,
        duration: 2,
        color: "white",
      });

      const hiddenOverlapTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".body",
          start: "top top",
          end: "+=100",
          pin: true,
          scrub: true,
          markers: true,
        },
      });

      hiddenOverlapTl.to("title-header", { opacity: 0, duration: 3 });
    },
    { scope: container }
  );

  return (
    <Layout ref={container} style={{ overflow: "hidden" }}>
      <NavBar className="nav-bar" style={{ backgroundColor: "#dcffcf" }} />
      <Header ref={container}>
        <Layout style={{ display: "flex", flexDirection: "column" }}>
          <Text
            className="title-header"
            style={{
              fontSize: "200px",
              color: "black",
            }}
          >
            OLEVIUS
          </Text>
          <Text
            className="subtitle-header"
            style={{
              fontSize: "50px",
              color: "black",
            }}
          >
            Accuracy. Unmatched.
          </Text>
        </Layout>
      </Header>
      <Body style={{ marginTop: "60%" }} className="body">
        <Layout style={{ display: "flex", flexDirection: "column" }}>
          <Text
            style={{
              fontSize: "20px",
              color: "black",
            }}
          >
            hihihi hihihi hihihi hihihi hihihi hihihi hihihi hihihi hihihi
            hihihi hihihi hihihi
          </Text>
        </Layout>
      </Body>
    </Layout>
  );
};
