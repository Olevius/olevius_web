import { Layout, Text } from "../../../components/basics/defaults";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import { cssNumbers } from "../../../theme/theme";

export const UpdBody = forRef<HTMLDivElement, Omit<BaseProps, "children">>(
  ({ style, className, ...rest }, ref) => (
    <Layout
      className={className}
      ref={ref}
      {...rest}
      style={{
        backgroundColor: "white",
        display: "flex",
        height: "135vh",
        padding: 0,
        overflow: "hidden",
        margin: 0,
        gap: 0,
        flexDirection: "column",
        textAlign: "left",
        ...style,
      }}
    >
      <Layout
        style={{
          display: "flex",
          flexDirection: "row",
          borderBottom: "1px solid black",
          borderTop: "1px solid black",
        }}
      >
        <Text
          style={{
            width: "89vw",
            lineHeight: 0.7,
            padding: 0,
            marginLeft: "-1vw",
            whiteSpace: "nowrap",
            fontSize: "22vw",
            borderRight: "1px solid black",
            fontFamily: "Uber Move",
            textShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          OLEVIUS
        </Text>
      </Layout>
      <Layout
        style={{
          display: "flex",
          flexDirection: "row",
          borderBottom: "1px solid black",
        }}
      >
        <Layout
          style={{
            width: "88vw",
            height: "20vh",
            borderRight: "1px solid black",
          }}
        />
      </Layout>
      <Layout
        style={{
          display: "flex",
          flexDirection: "row",
          borderBottom: "1px solid black",
        }}
      >
        <Layout
          style={{
            width: "88vw",
            height: "30vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRight: "1px solid black",
            position: "relative", // Add this line
          }}
        >
          <Layout
            aria-label="status circle"
            style={{
              position: "absolute",
              top: "16vh",
              left: "64vw",
              width: "6.2vw",
              opacity: 0.2,
              height: "6.2vw",
              borderRadius: "50%",
              backgroundColor: "#AFFF47",
            }}
          />
          <Layout style={{ padding: cssNumbers.layout.paddingBody }}>
            <Text
              style={{
                textAlign: "left",
                fontFamily: "satoshi",
                fontSize: "2rem",
                fontWeight: "lighter",
                zIndex: 2,
                lineHeight: 1.5,
              }}
            >
              Olevius delivers continuous, cuff-free blood pressure tracking
              through direct optical sensing. See real-time trends, detect
              subtle changes, and understand your heart’s rhythm with
              clinical-grade accuracy — all in one effortless glance.
            </Text>
          </Layout>
        </Layout>
      </Layout>
      <Layout
        style={{
          display: "flex",
          flexDirection: "row",
          borderBottom: "1px solid black",
          flex: 1,
        }}
      >
        <Layout
          style={{
            width: "15vw",
            borderRight: "1px solid black",
          }}
        />
        <Layout
          style={{
            width: "65vw",
            borderRight: "1px solid black",
          }}
        />
        <Layout
          style={{
            width: "7.85vw",
            borderRight: "1px solid black",
          }}
        />
      </Layout>
      <Layout
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <Layout
          style={{
            width: "15vw",
            borderRight: "1px solid black",
          }}
        />
        <Layout
          style={{
            width: "65vw",
            borderRight: "1px solid black",
          }}
        />
        <Layout
          style={{
            width: "7.85vw",
            borderRight: "1px solid black",
          }}
        />
      </Layout>

      {/* <Layout
        style={{
          position: "relative",
          width: "100vw",
          lineHeight: 0.7,
          padding: 0,
          whiteSpace: "nowrap",
          height: "0vw",
          borderBottom: "1px solid black",
          fontFamily: "Uber Move",
        }}
      />
      <Layout
        style={{
          position: "relative",
          width: "100vw",
          lineHeight: 0.7,
          padding: 0,
          whiteSpace: "nowrap",
          height: "15.4vw",
          borderBottom: "1px solid black",
          fontFamily: "Uber Move",
        }}
      />
      <Layout
        style={{
          width: "100vw",
          lineHeight: 0.7,
          padding: 0,
          display: "flex",
          height: "18vw",
          borderBottom: "1px solid black",
        }}
      >
        <Layout
          style={{
            width: "89vw",
            lineHeight: 0.7,
            padding: 0,
            display: "flex",
            height: "18vw",
            fontFamily: "Uber Move",
          }}
        >
          <Layout
            style={{
              display: "flex",
              paddingLeft: "5vw",
              justifyContent: "flex-start",
              alignItems: "center",
              flex: 1,
              position: "relative",
            }}
          >
            <Layout
              aria-label="status circle"
              style={{
                position: "absolute",
                top: "15vh",
                left: "65vw",
                width: "6.2vw",
                opacity: 0.2,
                height: "6.2vw",
                borderRadius: "50%",
                backgroundColor: "#AFFF47",
              }}
            />
            <Text
              style={{
                textAlign: "left",
                fontFamily: "satoshi",
                fontSize: "2rem",
                fontWeight: "lighter",
                zIndex: 2,
                lineHeight: 1.5,
              }}
            >
              Olevius delivers continuous, cuff-free blood pressure tracking
              through direct optical sensing. See real-time trends, detect
              subtle changes, and understand your heart’s rhythm with
              clinical-grade accuracy — all in one effortless glance.
            </Text>
          </Layout>
        </Layout>
      </Layout>
      <Layout>
        <Layout
          style={{
            position: "absolute",
            overflow: "visible",
            marginLeft: "15vw",
            width: "1px", // Changed from "100vw"
            height: "56.5vh",
            borderLeft: "1px solid black",
          }}
        />
        <Layout
          style={{
            position: "absolute",
            overflow: "visible",
            marginLeft: "78vw",
            width: "1px", // Changed from "100vw"
            height: "56.5vh",
            borderLeft: "1px solid black",
          }}
        />
        <Layout
          style={{
            width: "100vw",
            lineHeight: 0.7,
            padding: 0,
            whiteSpace: "nowrap",
            height: "15.4vw",
            borderBottom: "1px solid black",
            fontFamily: "Uber Move",
          }}
        />
      </Layout>
      <Layout
        style={{ flexDirection: "row", display: "flex", position: "absolute" }}
      >
        <Layout
          style={{
            overflow: "visible",
            marginLeft: "88.3vw",
            width: "1px", // Changed from "100vw"
            height: "135vh",
            borderLeft: "1px solid black",
          }}
        />
      </Layout> */}
    </Layout>
  )
);
