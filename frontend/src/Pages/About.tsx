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

export const About = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      runIntroTimeline(cssNumbers).then();
      runHeaderScrollTimeline(cssNumbers);
      runBodyTextScroll(cssNumbers);
    },
    { scope: container }
  );

  const bodyTextMap = {
    why: {
      title: "why?",
      content:
        "Current off-the-shelf blood pressure measurement solutions are sorely lacking in portability, accuracy, or continuity. Can an optical fiber-based wearable sensor deliver continuous, non-invasive blood pressure monitoring with clinical-grade accuracy and real-time data transmission?",
    },
    how: {
      title: "how?",
      content:
        "Our device differs fundamentally from smartwatches like the Apple Watch by providing direct, continuous blood pressure measurement using optical fiber compression, rather than relying on indirect pulse transit time estimates. While smartwatches require frequent calibration and rely on population-averaged models with limited accuracy, our sensor captures true pulse waveforms via a fluid-coupled optical system, enabling machine learning models to extract systolic and diastolic pressures with FDA-grade precision (±3 mmHg). This allows for more reliable, individualized readings without cuffs, recalibration, or positional sensitivity—delivering medical-grade performance in a compact, wearable form.",
    },
    whatsNext: {
      title: "whats next?",
      content:
        "While we can’t reveal all the details just yet, our continuous blood pressure sensor fuses precision optical sensing with smart signal interpretation. At the heart of our design is a fluid-filled PDMS pouch containing an air-core optical fiber union. As your pulse presses against the pouch, it alters light transmission through the fiber—subtle changes that our photodetector captures in real time. From there, our software takes over. Using advanced signal processing and machine learning, we extract meaningful features from the waveform—like systolic and diastolic pressure—delivering accurate, continuous readings without the discomfort of a cuff or the need for constant recalibration. Our team brings together expertise in hardware/computer engineering, applied chemistry and physics, and wearable product design—alongside two software engineers with backgrounds in data science and full-stack development. Together, we’re building a clinically robust system that’s wearable, intuitive, and ready for the real world. We’re driven by a shared mission to make vital health insights accessible—seamlessly, continuously, and comfortably.",
    },
  };

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
