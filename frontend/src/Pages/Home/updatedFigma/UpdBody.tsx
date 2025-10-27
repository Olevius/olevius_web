import { Layout, Text } from "../../../components/basics/defaults";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import { cssNumbers } from "../../../theme/theme";
import { UpdLine } from "./UpdLine";

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
        overflow: "visible",
        margin: 0,
        gap: 0,
        flexDirection: "column",
        textAlign: "left",
        ...style,
      }}
    >
      <Text
        style={{
          width: "100vw",
          lineHeight: 0.7,
          padding: 0,
          whiteSpace: "nowrap",
          fontSize: "22vw",
          borderTop: "1px solid black",

          fontFamily: "Uber Move",
        }}
      >
        OLEVIUS
      </Text>
      <Layout
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
            }}
          >
            <Text
              style={{
                textAlign: "left",
                fontFamily: "satoshi",
                fontSize: "2rem",
                fontWeight: "lighter",
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
            height: "135vh",
            borderLeft: "1px solid black",
          }}
        />
        <Layout
          style={{
            position: "absolute",
            overflow: "visible",
            marginLeft: "78vw",
            width: "1px", // Changed from "100vw"
            height: "135vh",
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
            marginLeft: "89vw",
            width: "1px", // Changed from "100vw"
            height: "135vh",
            borderLeft: "1px solid black",
          }}
        />
      </Layout>
    </Layout>
  )
);
