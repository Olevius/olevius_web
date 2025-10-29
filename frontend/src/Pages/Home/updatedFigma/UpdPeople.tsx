import {
  Layout,
  Padding,
  Text,
  Image,
} from "../../../components/basics/defaults";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import smileImg from "../../../assets/smile.png";
import retirementImg from "../../../assets/retirement.png";
import semifatImg from "../../../assets/semi-fat.png";
import seniorImg from "../../../assets/senior.png";
import { cssNumbers } from "../../../theme/theme";

export const UpdPeople = forRef<HTMLDivElement, Omit<BaseProps, "children">>(
  ({ style, className, ...rest }, ref) => (
    <Layout
      className={className}
      ref={ref}
      {...rest}
      style={{
        backgroundColor: "white",
        display: "flex",
        overflow: "hidden",
        position: "relative",

        flexDirection: "column",
        textAlign: "left",
        ...style,
      }}
    >
      <Layout
        style={{
          display: "flex",
          height: "55vh",
          flexDirection: "row",
          borderTop: "1px solid black",
        }}
      >
        <Layout
          style={{
            width: "50vw",
            display: "flex",
            overflow: "hidden",
            position: "relative",
            lineHeight: 0.7,
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          <Layout
            style={{
              position: "absolute",
              left: "34.9vw",
              width: "1px",
              height: "55vh",
              right: "16.25vw",
              borderRight: "1px solid black",
            }}
          />
          <Layout
            style={{
              display: "flex",
              borderTop: "1px solid black",
              flexDirection: "column",
              lineHeight: 0.7,
              marginTop: "5vh",
              overflow: "hidden",
            }}
          >
            <Text style={{ textAlign: "left", fontSize: "5rem" }}>
              PEOPLE ARE
            </Text>
            <Text
              style={{
                textAlign: "left",
                marginTop: "4vh",
                borderBottom: "1px solid black",
                fontSize: "5rem",
              }}
            >
              EVERYWHERE
            </Text>
          </Layout>
        </Layout>
        <Layout
          style={{
            width: "50vw",
            overflow: "hidden",
            borderLeft: "1px solid black",
          }}
        >
          <Image src={semifatImg} style={{ width: "55vw" }} />
        </Layout>
      </Layout>
      <Layout
        style={{
          display: "flex",
          height: "45vh",
          flexDirection: "row",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        <Layout
          style={{
            width: "50vw",
            borderRight: "1px solid black",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          <Image src={smileImg} style={{ width: "53vw" }} />
        </Layout>
        <Layout
          style={{
            width: "50vw",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Layout
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 20,
              width: "35vw",
              flex: 1,
              alignContent: "space-around",
            }}
          >
            <Text
              style={{
                fontSize: "2.5rem",
                fontFamily: "Uber Move Text",
                color: "#375D41",
              }}
            >
              31%
            </Text>
            <Text
              style={{
                fontFamily: "Uber Move Text",
                fontSize: "1.5rem",
                color: "#375D41",
              }}
            >
              of adults on BP medication miss doses — consistent tracking helps
              keep it controlled.
            </Text>
          </Layout>
          <Layout
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "right",
              padding: 20,
              marginLeft: "15vw",
            }}
          >
            <Text
              style={{
                fontSize: "2.5rem",
                fontFamily: "Uber Move Text",
                color: "#4F2455",
              }}
            >
              13%
            </Text>
            <Text
              style={{
                fontFamily: "Uber Move Text",
                fontSize: "1.5rem",
                color: "#4F2455",
              }}
            >
              reduction in heart events when nighttime blood pressure is closely
              observed.
            </Text>
          </Layout>
        </Layout>
      </Layout>
      {/* Row 3: CHERISH WHAT YOU LOVE */}
      <Layout
        style={{
          display: "flex",
          height: "55vh",
          flexDirection: "row",
          overflow: "hidden",
        }}
      >
        <Layout
          style={{
            width: "50vw", // Changed from 49.5vw
            borderRight: "1px solid black",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          <Image src={retirementImg} style={{ width: "55vw" }} />
        </Layout>
        <Layout
          style={{
            width: "50vw",
            padding: 0,
            display: "flex", // Add this
            flexDirection: "column", // Changed from "row" to "column"
            boxSizing: "border-box", // Add this
            position: "relative",
          }}
        >
          <Layout
            style={{
              position: "absolute",
              right: "39.2vw",
              width: "1px",
              height: "55vh",
              borderLeft: "1px solid black",
            }}
          />
          <Layout
            style={{
              display: "flex",
              borderTop: "1px solid black",
              flexDirection: "column",
              lineHeight: 0.7,
              marginTop: "5vh",
              borderBottom: "1px solid black",
              overflow: "hidden",
            }}
          >
            <Text style={{ textAlign: "right", fontSize: "5rem" }}>
              CHERISH WHAT
            </Text>
            <Text
              style={{
                textAlign: "right",
                marginTop: "5vh",
                fontSize: "5rem",
              }}
            >
              YOU LOVE
            </Text>
          </Layout>
        </Layout>
      </Layout>
      {/* Row 4: LIVE. LAUGH. LOVE. */}
      <Layout
        style={{
          display: "flex",
          height: "45vh",
          flexDirection: "row",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        <Layout
          style={{
            width: "50vw",
            borderRight: "1px solid black",
            overflow: "hidden",
            boxSizing: "border-box",
            position: "relative",
            display: "flex", // Add this
            alignItems: "flex-start", // Add this for better alignment
          }}
        >
          <Layout
            style={{
              position: "absolute",
              width: "50vw",
              height: "50vh",
              right: "16.25vw",
              borderRight: "1px solid black",
            }}
          />
          <Layout
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 0.7,
              marginTop: "4vh",
              width: "50vw",
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              overflow: "hidden",
            }}
          >
            <Text
              style={{
                textAlign: "left",
                fontSize: "5rem",
              }}
            >
              LIVE. LAUGH.
            </Text>
            <Text
              style={{
                textAlign: "left",
                marginTop: "4vh",
                fontSize: "5rem",
              }}
            >
              LOVE.
            </Text>
          </Layout>
        </Layout>
        <Layout
          style={{
            width: "50vw",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            overflow: "hidden", // Add this
          }}
        >
          <Image src={seniorImg} style={{ width: "53vw" }} />
        </Layout>
      </Layout>
    </Layout>
  )
);
