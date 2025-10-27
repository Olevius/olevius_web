import { Layout, Text } from "../../../components/basics/defaults";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import { cssNumbers } from "../../../theme/theme";

export const UpdProblem = forRef<HTMLDivElement, Omit<BaseProps, "children">>(
  ({ style, className, ...rest }, ref) => (
    <Layout
      className={className}
      ref={ref}
      {...rest}
      style={{
        height: "100vh",
        backgroundColor: "white",
        border: cssNumbers.testing.border,
        ...style,
      }}
    >
      <Layout
        className="upd-problem-container"
        style={{
          display: "flex",
          border: "1px solid black",
          justifyContent: "center",
          alignItems: "center", // Changed from alignContent
          height: "100vh", // Added to fill parent
        }}
      >
        <Text
          style={{
            position: "absolute",
            top: -2,
            right: -40,
            left: -30,
            margin: 0,
            padding: 0,
            lineHeight: 1,
            zIndex: 2,
            whiteSpace: "nowrap",
            fontSize: "23vw",
            fontFamily: "Uber Move",
            transform: "translateY(-0.15em)",
          }}
        >
          PROBLEM.
        </Text>
        <Layout
          style={{
            backgroundColor: "#FFC0C0",
            height: "85vh",
            width: "45vw",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
            overflow: "visible",
          }}
        >
          <Text
            style={{
              fontSize: "30px",
              marginTop: "5vh",
              padding: 20,
              textAlign: "center",
              zIndex: 2,
              fontFamily: "Uber Move Text",
            }}
          >
            Current blood pressure monitoring is either intermittent (cuffs) or
            inaccurate (PPG/pressure watches), but neither provides direct,
            real-time arterial pressure data.
          </Text>
        </Layout>
      </Layout>
    </Layout>
  )
);
