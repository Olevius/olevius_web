import "../App.css";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import {
  Layout,
  Text,
  GridLayout,
  Padding,
} from "../components/basics/defaults";
import { useGSAP } from "@gsap/react";
import { Body } from "../components/Body";
import { customColors } from "../theme/colors";
import { cssNumbers } from "../theme/theme";
// Home.tsx
import {
  runIntroTimeline,
  runHeaderScrollTimeline,
  runBodyTextScroll,
} from "../animations/homeAnimations";
import { useRef } from "react";

export const Home = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      runIntroTimeline(cssNumbers);
      runHeaderScrollTimeline(cssNumbers);
      runBodyTextScroll(cssNumbers);
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
              fontSize: cssNumbers.layout.titleFontSize,
              color: "black",
            }}
          >
            OLEVIUS
          </Text>
          <Text
            className="subtitle-header"
            style={{
              fontSize: cssNumbers.layout.subtitleFontSize,
              color: "black",
              opacity: 0,
            }}
          >
            Accuracy. Unmatched.
          </Text>
        </Layout>
      </Header>
      <Padding
        style={{ backgroundColor: customColors.highlight }}
        size={700}
        className="padding"
      />
      <GridLayout
        style={{ backgroundColor: customColors.highlight }}
        className="body-title-box"
      >
        <Text
          className="body-text"
          style={{
            fontSize: cssNumbers.layout.titleFontSize,
            color: "black",
          }}
        >
          What is Olevius?
        </Text>
      </GridLayout>
      <Body
        style={{
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: customColors.highlight,
        }}
        className="body"
      ></Body>
    </Layout>
  );
};
