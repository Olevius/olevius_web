import { Layout, Text, Image } from "../../../components/basics/defaults";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import { cssNumbers } from "../../../theme/theme";
import { UpdBody } from "./UpdBody";
import { UpdLine } from "./UpdLine";

export const UpdSummary = forRef<HTMLDivElement, Omit<BaseProps, "children">>(
  ({ style, className, ...rest }, ref) => (
    <Layout
      className={className}
      ref={ref}
      {...rest}
      style={{
        height: "100vh",
        backgroundColor: "white",
        border: cssNumbers.testing.border,
        display: "flex",
        position: "relative",
        flexDirection: "column",
        ...style,
      }}
    >
      <Layout
        className="upd-clinical-grade-section"
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "left",
          position: "relative",
        }}
      >
        <Text
          style={{
            width: "89vw",
            lineHeight: 0.7,
            paddingTop: "4rem",
            paddingLeft: "2.5rem",
            whiteSpace: "nowrap",
            fontSize: "5rem",
            fontFamily: "Uber Move Text",
          }}
        >
          Clinical Grade
        </Text>
        <Layout
          className="upd-clinical-grade-border"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "1px",
            backgroundColor: "black",
          }}
        />
      </Layout>
      <Layout
        className="upd-blood-pressure-section"
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "left",
        }}
      >
        <Text
          style={{
            width: "89vw",
            lineHeight: 0.7,
            paddingTop: "6rem",
            whiteSpace: "nowrap",
            fontSize: "5rem",
            marginLeft: "20vw",
            fontFamily: "Uber Move Text",
          }}
        >
          Blood Pressure
        </Text>
        <Layout
          className="upd-blood-pressure-border"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "1px",
            backgroundColor: "black",
          }}
        />
      </Layout>
      <Layout
        className="upd-for-everyone-section"
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "left",
        }}
      >
        <Text
          style={{
            width: "89vw",
            lineHeight: 0.7,
            paddingTop: "6rem",
            marginLeft: "40vw",
            whiteSpace: "nowrap",
            fontSize: "5rem",
            fontFamily: "Uber Move Text",
          }}
        >
          For Everyone.
        </Text>
        <Layout
          className="upd-everyone-border"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "1px",
            backgroundColor: "black",
          }}
        />
      </Layout>
      <Layout
        className="upd-wherever-section"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontFamily: "satoshi",
            fontSize: "3.7rem",
            padding: "1.5rem",
            fontWeight: "lighter",
          }}
        >
          Wherever you go.
        </Text>
      </Layout>
      <Layout
        className="upd-summary-circle"
        style={{
          position: "absolute",
          width: "13vw",
          height: "13vw",
          backgroundColor: "#D9D9D9",
          borderRadius: "50%",
          top: "40vh",
          left: "-4vw",
          zIndex: -1,
        }}
      />
      <Layout
        className="upd-summary-circle2"
        style={{
          position: "absolute",
          width: "13vw",
          height: "13vw",
          backgroundColor: "#D9D9D9",
          borderRadius: "50%",
          top: "63vh",
          left: "88vw",
          zIndex: -1,
        }}
      />
      <Layout
        className="upd-summary-circle3"
        style={{
          position: "absolute",
          width: "13vw",
          height: "13vw",
          backgroundColor: "#D9D9D9",
          borderRadius: "50%",
          top: "-6vh",
          left: "90vw",
          zIndex: -1,
        }}
      />
    </Layout>
  )
);
