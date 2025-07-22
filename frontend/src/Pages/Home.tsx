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
        .fromTo(
          ".title-header",
          { x: 750 },
          { x: 0, duration: 1.5, ease: "power1.out" }
        )
        .fromTo(
          ".nav-bar",
          { y: -70 },
          { y: 0, duration: 1.5, ease: "power1.out" },
          "-=1.5"
        )
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

      scrubTl
        .to(".title-header", {
          fontSize: "5000px",
          scale: 10,
          duration: 2,
          color: "white",
        })
        .to(
          ".header",
          {
            backgroundColor: "white",
            duration: 2,
          },
          0
        )
        .to(
          ".padding",
          {
            backgroundColor: "white",
            duration: 2,
          },
          0
        );

      // scrubTl.to(":root", {
      //   css: { "--white": "#ffffff" }, // Replace "#ffffff" with your desired color value
      //   duration: 2,
      // });

      // 3. Scrub animation color transition (scroll-triggered)
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

      hiddenOverlapTl.to(".title-header", { opacity: 0, duration: 3 });
    },
    { scope: container }
  );

  return (
    <Layout ref={container} style={{ overflow: "hidden" }}>
      <NavBar className="nav-bar" style={{ backgroundColor: "#dcffcf" }} />
      <Header style={{ backgroundColor: "#dcffcf" }} className="header">
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
      <Padding
        size={100}
        style={{ backgroundColor: "#dcffcf" }}
        className="padding"
      />
      <Body style={{ overflow: "hidden" }} className="body">
        <Layout style={{ display: "flex", flexDirection: "column" }}>
          <Text
            style={{
              fontSize: "200px",
              color: "black",
            }}
          >
            This product is a fully functioning proof of concept. It
            demonstrates the core features and intended user experience,
            showcasing the main capabilities and design direction. While not yet
            production-ready, it provides a comprehensive preview of the final
            solution, including interactive elements, animations, and essential
            workflows. The implementation highlights the underlying architecture
            and technical approach, allowing stakeholders to evaluate usability,
            performance, and scalability. All major components are integrated to
            simulate real-world scenarios, enabling thorough testing and
            feedback collection. Future iterations will focus on refining the
            user interface, optimizing backend processes, and ensuring robust
            security and reliability for production deployment.
          </Text>
        </Layout>
      </Body>
    </Layout>
  );
};
