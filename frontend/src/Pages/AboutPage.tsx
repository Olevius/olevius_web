import "../App.css";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Layout, Text, GridLayout } from "../components/basics/defaults";
import { useGSAP } from "@gsap/react";
import { Body } from "../components/Body";
import { customColors } from "../theme/colors";
import { cssNumbers } from "../theme/theme";
// Home.tsx
import {
  runIntroTimeline,
  runHeaderScrollTimeline,
  runTransitionTextScroll,
} from "../animations/homeAnimations";
import { useRef } from "react";
import { bodyTextMap } from "../text-maps/bodyTextMap";

export const AboutPage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      runIntroTimeline(cssNumbers).then();
      runHeaderScrollTimeline(cssNumbers);
      runTransitionTextScroll(cssNumbers);
    },
    { scope: container }
  );

  return (
    <Layout ref={container} style={{ overflow: "hidden" }}>
      <NavBar
        className="nav-bar"
        style={{
          backgroundColor: customColors.highlight,
        }}
      />
      <Header
        style={{
          backgroundColor: customColors.highlight,
        }}
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
      {/* <Padding
        style={{
          backgroundColor: customColors.highlight,
          border: "1px solid red",
        }}
        size={100}
        className="padding"
      /> */}
      <GridLayout
        style={{
          backgroundColor: customColors.highlight,
        }}
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
          backgroundColor: customColors.highlight,
        }}
        className="body"
      >
        <Layout
          style={{
            display: "flex",
            flexDirection: "column",
            padding: cssNumbers.layout.paddingBody,
          }}
        >
          <Layout
            style={{
              overflow: "hidden",
              backgroundColor: "white",
              display: "flex",
              marginRight: "500px",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            {Object.entries(bodyTextMap).map(([key, value]) => (
              <Layout
                key={key}
                style={{
                  overflow: "hidden",
                  backgroundColor: "white",
                  display: "flex",
                  marginBottom: "20px",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Text
                  style={{
                    textAlign: "left", // Aligns the text to the left
                    fontSize: cssNumbers.layout.textHeaderFontSize,
                    fontWeight: "bold", // Highlights the text
                    color: "black", // Ensures the text is visible
                  }}
                >
                  <mark style={{ backgroundColor: customColors.highlight }}>
                    {value.title}
                  </mark>
                </Text>
                <Text
                  style={{
                    fontSize: cssNumbers.layout.bodyFontSize,
                    color: "black",
                    textAlign: "left", // Aligns the text to the left
                  }}
                >
                  {value.content}
                </Text>
              </Layout>
            ))}
          </Layout>
        </Layout>
      </Body>
    </Layout>
  );
};
