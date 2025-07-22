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
      const introAnimationTimeline = gsap.timeline();
      introAnimationTimeline
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

      // 2. Scroll-triggered animation for header and padding
      const headerScrollAnimationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: `+=${numbers.animation.scrollEnd}`,
          pin: true,
          scrub: true,
          markers: true,
        },
      });

      headerScrollAnimationTimeline
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

      // 3. Scroll-triggered animation for hiding title header
      const titleHeaderHideAnimationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".body",
          start: "top top",
          end: `+=${numbers.animation.overlapEnd}`,
          pin: true,
          scrub: true,
          markers: true,
        },
      });

      titleHeaderHideAnimationTimeline.to(".title-header", {
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
            What is Olevius?
          </Text>
        </Layout>
      </Body>
    </Layout>
  );
};
