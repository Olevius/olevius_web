import { Layout, Text, Image } from "../../../components/basics/defaults";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import retirementImg from "../../../assets/pictures/retirement.png";
import seniorImg from "../../../assets/pictures/senior.png";

export const UpdPeople2 = forRef<HTMLDivElement, Omit<BaseProps, "children">>(
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
            className="upd-people-text2-container"
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
            className="upd-people-text3-container"
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
