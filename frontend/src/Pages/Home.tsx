import "../App.css";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import {
  Layout,
  Text,
  GridLayout,
  Image,
  AnchoredImage,
} from "../components/basics/defaults";
import leviImg from "../assets/levi.png";
import jpImg from "../assets/jp.png";
import matthewImg from "../assets/matthew.png";
import andrewImg from "../assets/andrew.png";
import githubImg from "../assets/logos/github.svg";
import linkedinImg from "../assets/logos/linkedin.svg";
import aboutImg from "../assets/aboutBg.png";
import { Body } from "../components/Body";
import { customColors } from "../theme/colors";
import { cssNumbers } from "../theme/theme";

import {
  runIntroTimeline,
  runHeaderScrollTimeline,
  runTransitionTextScroll,
  runBodyScroll,
  runAboutScroll,
  runTeamScroll,
} from "../animations/homeAnimations";
import { useEffect, useRef } from "react";
import { TextBox } from "../components/TextBox";
import { About } from "../components/About";
import { Team } from "../components/Team";
import type { ImageMapProps } from "../components/basics/ImagePropTypes";
import { Footer } from "../components/Footer";
import { FooterCard } from "../components/FooterCard";
import { footerTextMap } from "../text-maps/footerTextMap";
import { bodyTextMap } from "../text-maps/bodyTextMap";
import { teamTextMap } from "../text-maps/teamMap";

export const Home = () => {
  const container = useRef(null);

  const imagePathList: ImageMapProps = {
    levi: {
      src: leviImg,
    },
    jp: {
      src: jpImg,
    },
    matthew: {
      src: matthewImg,
    },
    andrew: {
      src: andrewImg,
    },
  };

  useEffect(() => {
    document.documentElement.classList.add("cursor-hidden");
    return () => document.documentElement.classList.remove("cursor-hidden");
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (typeof document !== "undefined" && "fonts" in document) {
        await (document.fonts as FontFaceSet).ready;
      }
      if (cancelled) return;
      // run SplitText/ScrollTrigger timelines here AFTER fonts are ready
      runIntroTimeline(cssNumbers);
      runHeaderScrollTimeline(cssNumbers);
      runTransitionTextScroll(cssNumbers);
      runBodyScroll(cssNumbers);
      runAboutScroll(cssNumbers);
      runTeamScroll(cssNumbers);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

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
              color: "black",
              zIndex: 0,
              border: cssNumbers.testing.border,
            }}
          >
            OLEVIUS
          </Text>
          <Text
            className="subtitle-header"
            style={{
              color: "black",
              opacity: 1,
              border: cssNumbers.testing.border,
              zIndex: 0,
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
          zIndex: 2,
        }}
        className="transition-title-box"
      >
        <Text
          className="transition-text"
          style={{
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
          zIndex: 3,
        }}
        className="body"
      >
        <Layout
          className="body-text-container"
          style={{
            display: "flex",
            flexDirection: "column",
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
              return (
                <TextBox
                  className={idx !== 0 ? "body-text-box" : undefined}
                  classNameTitle={value.classNameTitle}
                  classNameContent={value.classNameContent}
                  styleContent={{
                    textAlign: "left",
                    border: cssNumbers.testing.border,
                    whiteSpace: "pre-line",
                  }}
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
          backgroundImage: `url(${aboutImg})`,
          backgroundColor: "transparent",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="about"
      >
        <Layout
          className="about-container"
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <Layout
            className="about-title-container"
            style={{
              display: "flex",
              border: cssNumbers.testing.border,
            }}
          >
            <Text
              data-speed={cssNumbers.layout.aboutTitleSpeed}
              className="about-title"
              style={{
                textAlign: "left",
                border: cssNumbers.testing.border,
              }}
            >
              About Olevius
            </Text>
          </Layout>

          <Layout
            className="about-content-container"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              border: cssNumbers.testing.border,
            }}
          >
            <Text
              className="about-content"
              data-speed={cssNumbers.layout.aboutContentSpeed}
              style={{
                textAlign: "left",
                border: cssNumbers.testing.border,
              }}
            >
              Olevius is a wearable health-tech initiative focused on
              continuous, cuff-free blood pressure monitoring. Hypertension
              affects ~1.39 billion people, yet current options force a
              trade-off: bulky, intermittent cuffs vs. smartwatch PTT methods
              that require frequent recalibration and lack clinical accuracy.{" "}
              <br /> <br />
              Our approach uses a compact optical-fiber sensor inside a
              fluid-filled PDMS pouch. Pulse pressure subtly changes light
              transmission at an air-core fiber union; those waveforms are
              processed on-device and with ML to estimate systolic and diastolic
              BP, targeting ±5 mmHg accuracy.
              <br /> <br />
              Designed for everyday wear, the band targets ≤7 mm thickness, ≤30
              g weight, ≥24 h battery life, and secure Bluetooth/NFC
              syncing—while keeping unit cost under $100 to maximize
              accessibility.
            </Text>
          </Layout>
        </Layout>
      </About>

      <Team style={{ border: cssNumbers.testing.border }} className="team">
        <Layout style={{ display: "flex", flexDirection: "column" }}>
          <Layout
            className="team-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "top",
            }}
          >
            <Text className="team-title">Our Team</Text>
          </Layout>
          <Layout className="image-container" style={{ display: "flex" }}>
            {Object.entries(imagePathList).map(([key, value]) => (
              <Layout
                className="image-wrapper"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  height: "auto",
                }}
                key={key}
              >
                <Image
                  id="view_img"
                  className="images"
                  style={{ pointerEvents: "none" }}
                  key={key}
                  src={value.src}
                />
              </Layout>
            ))}
          </Layout>
        </Layout>
      </Team>

      <Layout
        className="scroll-rect1"
        style={{
          backgroundColor: "white",
          border: cssNumbers.testing.border,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Layout
          className="team-text-box-container"
          style={{ padding: cssNumbers.layout.paddingBody }}
        >
          {Object.entries(teamTextMap).map(([key, value]) => (
            <TextBox
              key={key}
              value={value}
              className="team-text-box"
              classNameContent="team-text-box-content"
              style={{
                opacity: 0,
              }}
            />
          ))}
        </Layout>
      </Layout>

      <Footer>
        <Layout
          className="footer-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text className="footer-contact-us">Contact us</Text>
          <Layout
            className="footer-link-layout"
            style={{
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            {Object.entries(footerTextMap).map(([key, value]) => (
              <FooterCard key={key} value={value} />
            ))}
          </Layout>
          <Layout
            className="footer-image-container"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <AnchoredImage
              className="footer-linkedin-icon"
              link="https://www.linkedin.com/company/olevius/posts/?feedView=all"
              src={linkedinImg}
            />
            <AnchoredImage
              className="footer-github-icon"
              link="https://github.com/Olevius"
              src={githubImg}
            />
          </Layout>
        </Layout>
      </Footer>
    </Layout>
  );
};
