import "../App.css";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Layout, Text } from "../components/basics/defaults";
import { customColors } from "../theme/colors";
import { numbers } from "../theme/default";
import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, SplitText);

export const Contact = () => {
  const container = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .fromTo(
          ".title-header",
          { x: numbers.animation.titleStartX },
          { x: 0, duration: numbers.animation.hideDuration }
        )
        .fromTo(
          ".nav-bar",
          { y: numbers.animation.navStartY },
          { y: 0, duration: numbers.animation.hideDuration, overflow: -3 },
          `-=${numbers.animation.hideDuration}`
        )
        .fromTo(
          ".subtitle-header",
          { y: numbers.animation.navStartY, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: numbers.animation.subtitleDuration,
            overflow: 3,
          }
        );
    },
    { scope: container }
  );

  return (
    <Layout ref={container}>
      <NavBar className="nav-bar" style={{ backgroundColor: customColors.highlight }} />
      <Header ref={container}>
        <Layout style={{ display: "flex", flexDirection: "column" }}>
          <Text
            className="title-header"
            style={{
              fontSize: numbers.layout.titleFontSize,
            }}
          >
            OLEVIUS
          </Text>
          <Text
            className="subtitle-header"
            style={{
              fontSize: numbers.layout.subtitleFontSize,
            }}
          >
            Accuracy. Unmatched.
          </Text>
        </Layout>
      </Header>
    </Layout>
  );
};
