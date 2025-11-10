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
        height: "175vh",
        backgroundColor: "white",
        border: cssNumbers.testing.border,
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      <Layout
        className="upd-problem-header"
        style={{
          padding: "2rem",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Text
          className="upd-problem-title"
          style={{
            fontFamily: "Uber Move Text",
            fontWeight: "lighter",
            fontSize: "5.5rem",
          }}
        >
          What if..
        </Text>
      </Layout>

      <Layout
        className="upd-problem-content-wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Layout
          className="upd-problem-content"
          style={{
            textAlign: "left",
            width: "40vw",
            paddingTop: "30vh",
            paddingLeft: "40vw",
          }}
        >
          <Text
            className="upd-problem-description"
            style={{
              fontFamily: "Uber Move Text",
              fontWeight: "lighter",
              fontSize: "2.2rem",
            }}
          >
            you could get clinical grade blood-pressure data thats comfortable
            and automatic, without the bulky ambulatory cuff that disrupts rest?{" "}
          </Text>
        </Layout>
      </Layout>
      <Layout
        className="upd-problem-footer-wrapper"
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "flex-start",
        }}
      >
        <Layout
          className="upd-problem-footer"
          style={{
            textAlign: "left",
            width: "40vw",
            paddingTop: "60vh",
            paddingLeft: "10vw",
          }}
        >
          <Text
            className="upd-problem-footer-text"
            style={{
              fontFamily: "Uber Move Text",
              fontWeight: "lighter",
              fontSize: "2.2rem",
            }}
          >
            And in the daytime, capture it as you walk{" "}
            <Text
              className="upd-problem-highlight"
              style={{ color: "#4B6C44" }}
            >
              without cuffs and without a pharmacist?
            </Text>
          </Text>
        </Layout>
      </Layout>
    </Layout>
  )
);
