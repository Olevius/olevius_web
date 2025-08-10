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
  runBodyScroll,
  runAboutScroll,
} from "../animations/homeAnimations";
import { useRef } from "react";
import { TextBox } from "../components/TextBox";
import { About } from "../components/About";

export const Home = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // SSR/CI/test guard — nothing runs in jsdom
      if (typeof window === "undefined" || process.env.NODE_ENV === "test")
        return;
      runIntroTimeline(cssNumbers).then();
      runHeaderScrollTimeline(cssNumbers);
      runTransitionTextScroll(cssNumbers);
      runBodyScroll(cssNumbers);
      runAboutScroll(cssNumbers);
    },
    { scope: container, dependencies: [cssNumbers] } // re-run when numbers change
  );

  const bodyTextMap = {
    why: {
      title: "Why?",
      content:
        "Current off-the-shelf blood pressure measurement solutions are sorely lacking in portability, accuracy, or continuity. Can an optical fiber-based wearable sensor deliver continuous, non-invasive blood pressure monitoring with clinical-grade accuracy and real-time data transmission?",
      classNameTitle: "why-title",
      classNameContent: "why-content",
    },
    how: {
      title: "How?",
      content:
        "Our device differs fundamentally from smartwatches like the Apple Watch by providing direct, continuous blood pressure measurement using optical fiber compression, rather than relying on indirect pulse transit time estimates. While smartwatches require frequent calibration and rely on population-averaged models with limited accuracy, our sensor captures true pulse waveforms via a fluid-coupled optical system, enabling machine learning models to extract systolic and diastolic pressures with FDA-grade precision (±3 mmHg). This allows for more reliable, individualized readings without cuffs, recalibration, or positional sensitivity—delivering medical-grade performance in a compact, wearable form.",
      classNameTitle: "how-title",
      classNameContent: "how-content",
    },
    whatsNext: {
      title: "Whats Next?",
      content:
        "While we can’t reveal all the details just yet, our continuous blood pressure sensor fuses precision optical sensing with smart signal interpretation. At the heart of our design is a fluid-filled PDMS pouch containing an air-core optical fiber union. As your pulse presses against the pouch, it alters light transmission through the fiber—subtle changes that our photodetector captures in real time. From there, our software takes over. Using advanced signal processing and machine learning, we extract meaningful features from the waveform—like systolic and diastolic pressure—delivering accurate, continuous readings without the discomfort of a cuff or the need for constant recalibration. Our team brings together expertise in hardware/computer engineering, applied chemistry and physics, and wearable product design—alongside two software engineers with backgrounds in data science and full-stack development. Together, we’re building a clinically robust system that’s wearable, intuitive, and ready for the real world. We’re driven by a shared mission to make vital health insights accessible—seamlessly, continuously, and comfortably.",
      classNameTitle: "what-title",
      classNameContent: "what-content",
    },
  };

  return (
    <Layout
      ref={container}
      style={{ overflow: "hidden", border: cssNumbers.testing.border }}
    >
      <NavBar
        className="nav-bar"
        style={{
          backgroundColor: customColors.highlight,
          border: cssNumbers.testing.border,
        }}
      />
      <Header
        style={{
          backgroundColor: customColors.highlight,
          border: cssNumbers.testing.border,
        }}
        className="header"
      >
        <Layout
          style={{
            display: "flex",
            flexDirection: "column",
            border: cssNumbers.testing.border,
          }}
        >
          <Text
            className="title-header"
            style={{
              fontSize: cssNumbers.layout.titleFontSize,
              color: "black",
              border: cssNumbers.testing.border,
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
              border: cssNumbers.testing.border,
            }}
          >
            Accuracy. Unmatched.
          </Text>
        </Layout>
      </Header>
      <GridLayout
        style={{
          backgroundColor: customColors.highlight,
          border: cssNumbers.testing.border,
        }}
        className="body-title-box"
      >
        <Text
          className="body-text"
          style={{
            fontSize: cssNumbers.layout.titleFontSize,
            color: "black",
            border: cssNumbers.testing.border,
          }}
        >
          What is Olevius?
        </Text>
      </GridLayout>
      <Body
        style={{
          overflow: "hidden",
          backgroundColor: customColors.highlight,
          border: cssNumbers.testing.border,
        }}
        className="body"
      >
        <Layout
          style={{
            display: "flex",
            flexDirection: "column",
            padding: cssNumbers.layout.paddingBody,
            border: cssNumbers.testing.border,
          }}
        >
          <Layout
            style={{
              overflow: "hidden",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              border: cssNumbers.testing.border,
            }}
          >
            {Object.entries(bodyTextMap).map(([key, value], idx) => {
              const marginTop =
                idx !== 0 ? cssNumbers.layout.marginExtraSmallTop : undefined;
              return (
                <TextBox
                  classNameTitle={value.classNameTitle}
                  classNameContent={value.classNameContent}
                  style={{ marginTop }}
                  key={key}
                  value={value}
                />
              );
            })}
          </Layout>
        </Layout>
      </Body>
      <About
        style={{
          overflow: "hidden",
          border: cssNumbers.testing.border,
        }}
        className="about"
      >
        <Layout
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            padding: cssNumbers.layout.paddingBody,
            border: cssNumbers.testing.border,
          }}
        >
          <Layout
            style={{
              overflow: "hidden",
              backgroundColor: "white",
              display: "flex",
              width: "50vw",
              paddingRight: cssNumbers.layout.paddingRight,
              justifyContent: "flex-start",
              border: cssNumbers.testing.border,
            }}
          >
            <Text
              data-speed={0.75}
              className="about-title"
              style={{
                fontSize: cssNumbers.layout.mediumFontSize,
                textAlign: "left",
                border: cssNumbers.testing.border,
              }}
            >
              About Olevius
            </Text>
          </Layout>
          <Layout
            style={{
              overflow: "hidden",
              backgroundColor: "white",
              display: "flex",
              paddingTop: 20,
              height: "100",
              width: "41vw",
              wordWrap: "break-word",
              justifyContent: "flex-start",
              border: cssNumbers.testing.border,
            }}
          >
            <Text
              className="about-content"
              data-speed={1}
              style={{
                fontSize: cssNumbers.layout.bodyFontSize,
                textAlign: "left",
                border: cssNumbers.testing.border,
              }}
            >
              Olevius is a wearable health-tech initiative focused on
              continuous, cuff-free blood pressure monitoring. Hypertension
              affects ~1.39 billion people, yet current options force a
              trade-off: bulky, intermittent cuffs vs. smartwatch PTT methods
              that require frequent recalibration and lack clinical accuracy.
              <br />
              <br />
              Our approach uses a compact optical-fiber sensor inside a
              fluid-filled PDMS pouch. Pulse pressure subtly changes light
              transmission at an air-core fiber union; those waveforms are
              processed on-device and with ML to estimate systolic and diastolic
              BP, targeting ±3 mmHg accuracy.
              <br />
              <br />
              Designed for everyday wear, the band targets ≤7 mm thickness, 30 g
              weight, ≥24 h battery life, and secure Bluetooth/NFC syncing—while
              keeping unit cost near $25 to maximize accessibility.
            </Text>
          </Layout>
        </Layout>
      </About>
    </Layout>
  );
};
