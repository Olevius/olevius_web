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
import { customColors } from "../theme/colors";
import { numbers } from "../theme/default";

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
          { x: numbers.animation.titleStartX },
          {
            x: 0,
            duration: numbers.animation.introDuration,
            ease: "power1.out",
          }
        )
        .fromTo(
          ".nav-bar",
          { y: numbers.animation.navStartY },
          {
            y: 0,
            duration: numbers.animation.introDuration,
            ease: "power1.out",
          },
          `-=${numbers.animation.introDuration}`
        )
        .fromTo(
          ".subtitle-header",
          { y: numbers.animation.navStartY, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: numbers.animation.subtitleDuration,
            ease: "power2.out",
          }
        );

      // 2. Scrub animation (scroll-triggered)
      const scrubTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: `+=${numbers.animation.scrollEnd}`,
          pin: true,
          scrub: true,
          markers: true,
        },
      });

      scrubTl
        .to(".title-header", {
          fontSize: numbers.layout.scrubFontSize,
          scale: numbers.animation.scrubScale,
          duration: numbers.animation.scrubDuration,
          color: "white",
          ease: "power1.in",
        })
        .to(
          ".header",
          {
            backgroundColor: "white",
            duration: numbers.animation.scrubDuration,
            ease: "power1.in",
          },
          0
        )
        .to(
          ".padding",
          {
            backgroundColor: "white",
            duration: numbers.animation.scrubDuration,
            ease: "power1.in",
          },
          0
        );

      // 3. Scrub animation color transition (scroll-triggered)
      const hiddenOverlapTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".body",
          start: "top top",
          end: `+=${numbers.animation.overlapEnd}`,
          pin: true,
          scrub: true,
          markers: true,
        },
      });

      hiddenOverlapTl.to(".title-header", {
        opacity: 0,
        duration: numbers.animation.hideDuration,
      });
    },
    { scope: container }
  );

  return (
    <Layout ref={container} style={{ overflow: "hidden" }}>
      <NavBar
        className="nav-bar"
        style={{ backgroundColor: customColors.highlight }}
      />
      <Header
        style={{ backgroundColor: customColors.highlight }}
        className="header"
      >
        <Layout style={{ display: "flex", flexDirection: "column" }}>
          <Text
            className="title-header"
            style={{
              fontSize: numbers.layout.titleFontSize,
              color: "black",
            }}
          >
            OLEVIUS
          </Text>
          <Text
            className="subtitle-header"
            style={{
              fontSize: numbers.layout.subtitleFontSize,
              color: "black",
            }}
          >
            Accuracy. Unmatched.
          </Text>
        </Layout>
      </Header>
      <Padding
        size={numbers.layout.paddingLarge}
        style={{ backgroundColor: customColors.highlight }}
        className="padding"
      />
      <Body style={{ overflow: "hidden" }} className="body">
        <Layout style={{ display: "flex", flexDirection: "column" }}>
          <Text
            style={{
              fontSize: numbers.layout.titleFontSize,
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
