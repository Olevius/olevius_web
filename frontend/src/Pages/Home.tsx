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
import { AboutCard } from "../components/AboutCard";
import { aboutTextMap } from "../text-maps/aboutTextMap";
import { bodyTextMap } from "../text-maps/bodyTextMap";
import { teamTextMap } from "../text-maps/teamMap";

export const Home = () => {
  const container = useRef(null);

  const imagePathList: ImageMapProps = {
    levi: {
      src: leviImg,
      style: {
        maxWidth: cssNumbers.layout.teamImageMaxWidth,
        height: "auto",
      },
    },
    jp: {
      src: jpImg,
      style: {
        maxWidth: cssNumbers.layout.teamImageMaxWidth,
        height: "auto",
      },
    },
    matthew: {
      src: matthewImg,
      style: {
        maxWidth: cssNumbers.layout.teamImageMaxWidth,
        height: "auto",
      },
    },
    andrew: {
      src: andrewImg,
      style: {
        maxWidth: cssNumbers.layout.teamImageMaxWidth,
        height: "auto",
      },
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
      runAboutScroll();
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
            marginLeft: cssNumbers.layout.paddingTransitionText,
            marginRight: cssNumbers.layout.paddingTransitionText,
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
                  styleContent={{
                    fontSize: cssNumbers.layout.bodyFontSize,
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
          style={{
            display: "flex",
            flexDirection: "row",
            width: cssNumbers.layout.aboutFullWidth,
            padding: cssNumbers.layout.paddingBody,
            border: cssNumbers.testing.border,
            gap: "5vw",
            paddingBlockStart: cssNumbers.layout.paddingBody, // 👈 top spacing applied once
            alignItems: "flex-start",
          }}
        >
          <Layout
            style={{
              display: "flex",
              width: cssNumbers.layout.aboutTitleWidth,
              border: cssNumbers.testing.border,
            }}
          >
            <Text
              data-speed={cssNumbers.layout.aboutTitleSpeed}
              className="about-title"
              style={{
                fontSize: cssNumbers.layout.mediumFontSize,
                textAlign: "left",
                zIndex: 100,
                border: cssNumbers.testing.border,
              }}
            >
              About Olevius
            </Text>
          </Layout>

          <Layout
            style={{
              display: "flex",
              // ❌ remove paddingTop; parent handles it
              height: cssNumbers.layout.aboutContentHeight,
              width: cssNumbers.layout.aboutContentWidth,
              justifyContent: "flex-start",
              border: cssNumbers.testing.border,
            }}
          >
            <Text
              className="about-content"
              data-speed={cssNumbers.layout.aboutContentSpeed}
              style={{
                fontSize: cssNumbers.layout.bodyFontSize,
                textAlign: "left",
                border: cssNumbers.testing.border,
                paddingRight: cssNumbers.layout.paddingBody,
              }}
            >
              Olevius is a wearable health-tech initiative focused on
              continuous, cuff-free blood pressure monitoring. Hypertension
              affects ~1.39 billion people, yet current options force a
              trade-off: bulky, intermittent cuffs vs. smartwatch PTT methods
              that require frequent recalibration and lack clinical accuracy.{" "}
              <br /> <br /> Our approach uses a compact optical-fiber sensor
              inside a fluid-filled PDMS pouch. Pulse pressure subtly changes
              light transmission at an air-core fiber union; those waveforms are
              processed on-device and with ML to estimate systolic and diastolic
              BP, targeting ±5 mmHg accuracy. <br /> <br /> Designed for
              everyday wear, the band targets ≤7 mm thickness, ≤30 g weight, ≥24
              h battery life, and secure Bluetooth/NFC syncing—while keeping
              unit cost under $100 to maximize accessibility.
            </Text>
          </Layout>
        </Layout>
      </About>

      <Team style={{ border: cssNumbers.testing.border }} className="team">
        <Layout style={{ display: "flex", flexDirection: "column" }}>
          <Layout
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "top",
              padding: cssNumbers.layout.paddingBody,
            }}
          >
            <Text
              className="team-title"
              style={{ fontSize: cssNumbers.layout.mediumFontSize }}
            >
              Our Team
            </Text>
          </Layout>
          <Layout style={{ display: "flex", flexDirection: "row" }}>
            {Object.entries(imagePathList).map(([key, value]) => (
              <Layout
                className="image-wrapper"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  height: "auto",
                }}
                key={key}
              >
                <Image
                  id="view_img"
                  className="images"
                  style={{ ...value.style, pointerEvents: "none" }} // don't block clicks
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
          height: cssNumbers.layout.teamHeight,
        }}
      >
        <Layout style={{ padding: cssNumbers.layout.paddingBody }}>
          {Object.entries(teamTextMap).map(([key, value]) => (
            <TextBox
              key={key}
              value={value}
              className={value.className}
              classNameContent={value.classNameContent}
              classNameTitle={value.classNameTitle}
              style={{
                opacity: 0,
                width: cssNumbers.layout.fullWidthPercent,
                paddingRight: cssNumbers.layout.paddingBody,
              }}
              styleContent={{ fontSize: cssNumbers.layout.bodyFontSize }}
            />
          ))}
        </Layout>
      </Layout>

      <Footer>
        <Layout
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            padding: cssNumbers.layout.paddingBody,
          }}
        >
          <Text
            style={{
              transform: `translateY(${cssNumbers.layout.footerContactTranslateY})`,
            }}
          >
            Contact us
          </Text>
          <Layout
            style={{
              marginLeft: cssNumbers.layout.footerLinkMargin,
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              gap: cssNumbers.layout.footerLinkGap,
              marginRight: cssNumbers.layout.footerLinkMargin,
            }}
          >
            {Object.entries(aboutTextMap).map(([key, value]) => (
              <AboutCard key={key} value={value} />
            ))}
          </Layout>
          <Layout
            style={{
              display: "flex",
              flexDirection: "row",
              gap: cssNumbers.layout.footerSocialGap,
            }}
          >
            <AnchoredImage
              link="https://www.linkedin.com/company/olevius/posts/?feedView=all"
              src={linkedinImg}
              style={{ scale: cssNumbers.layout.footerSocialIconScale }}
            />
            <AnchoredImage
              link="https://github.com/Olevius"
              src={githubImg}
              style={{ scale: cssNumbers.layout.footerSocialIconScale }}
            />
          </Layout>
        </Layout>
      </Footer>
    </Layout>
  );
};
