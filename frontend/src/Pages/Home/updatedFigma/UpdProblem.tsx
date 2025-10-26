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
          flexDirection: "column",
          border: cssNumbers.testing.border,
        }}
      >
        <Layout
          className="upd-problem-container-white"
          style={{
            width: "100vw",
            height: "50vh",
            justifyContent: "left",
            border: cssNumbers.testing.border,
          }}
        >
          <Layout
            className="upd-problem-text-box"
            style={{
              display: "flex",
              border: cssNumbers.testing.border,
            }}
          >
            <Text
              className="upd-problem-text"
              style={{
                textAlign: "left",
                fontFamily: "Uber Move Text",
                border: cssNumbers.testing.border,
              }}
            >
              THE PROBLEM:
            </Text>
          </Layout>
        </Layout>
        <Layout
          className="upd-problem-container-black"
          style={{
            backgroundColor: "black",
            width: "100vw",
            height: "50vh",
            textAlign: "left",
            display: "flex",
            justifyContent: "center",
            border: cssNumbers.testing.border,
          }}
        >
          <Text
            className="upd-problem-content-text"
            style={{
              fontFamily: "satoshi",
              fontWeight: 1,
              color: "white",
              border: cssNumbers.testing.border,
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
