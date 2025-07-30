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
      runIntroTimeline(cssNumbers).then();
      runHeaderScrollTimeline(cssNumbers);
      runBodyTextScroll(cssNumbers);
    },
    { scope: container }
  );

  return (
    <Layout ref={container} style={{ overflow: "hidden" }}>
      <NavBar
        className="nav-bar"
        style={{
          backgroundColor: customColors.highlight,
          border: "1px solid red",
        }}
      />
      <Header
        style={{
          backgroundColor: customColors.highlight,
          border: "1px solid red",
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
          border: "1px solid red",
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
          border: "1px solid red",
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
              border: "1px solid red",
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
                why?
              </mark>
            </Text>
            <Text
              style={{
                fontSize: cssNumbers.layout.bodyFontSize,
                color: "black",
                textAlign: "left", // Aligns the text to the left
              }}
            >
              Current off-the-shelf blood pressure measurement solutions are
              sorely lacking in portability, accuracy, or continuity. Can an
              optical fiber-based wearable sensor deliver continuous,
              non-invasive blood pressure monitoring with clinical-grade
              accuracy and real-time data transmission?
            </Text>
          </Layout>
          <Layout
            style={{
              overflow: "hidden",
              backgroundColor: "white",
              display: "flex",
              marginTop: cssNumbers.layout.paddingBody,
              marginLeft: "500px",
              flexDirection: "column",
              justifyContent: "flex-start",
              border: "1px solid red",
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
                how?
              </mark>
            </Text>
            <Text
              style={{
                fontSize: cssNumbers.layout.bodyFontSize,
                color: "black",
                textAlign: "left", // Aligns the text to the left
              }}
            >
              Our device differs fundamentally from smartwatches like the Apple
              Watch by providing direct, continuous blood pressure measurement
              using optical fiber compression, rather than relying on indirect
              pulse transit time estimates. While smartwatches require frequent
              calibration and rely on population-averaged models with limited
              accuracy, our sensor captures true pulse waveforms via a
              fluid-coupled optical system, enabling machine learning models to
              extract systolic and diastolic pressures with FDA-grade precision
              (±3 mmHg). This allows for more reliable, individualized readings
              without cuffs, recalibration, or positional sensitivity—delivering
              medical-grade performance in a compact, wearable form.
            </Text>
          </Layout>
          <Layout
            style={{
              overflow: "hidden",
              backgroundColor: "white",
              display: "flex",
              marginTop: cssNumbers.layout.paddingBody,
              marginRight: "500px",
              flexDirection: "column",
              justifyContent: "flex-start",
              border: "1px solid red",
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
                whats next?
              </mark>
            </Text>
            <Text
              style={{
                fontSize: cssNumbers.layout.bodyFontSize,
                color: "black",
                textAlign: "left", // Aligns the text to the left
              }}
            ></Text>
          </Layout>
        </Layout>
      </Body>
    </Layout>
  );
};
