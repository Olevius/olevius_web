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
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      <Layout
        style={{
          padding: "2rem",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Text
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
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Layout
          style={{
            textAlign: "left",
            width: "40vw",
            paddingTop: "7vh",
            paddingLeft: "40vw",
          }}
        >
          <Text
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
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          flex: 1,
        }}
      >
        <Layout
          style={{
            textAlign: "left",
            width: "40vw",
            paddingBottom: "10vh",
            paddingLeft: "10vw",
          }}
        >
          <Text
            style={{
              fontFamily: "Uber Move Text",
              fontWeight: "lighter",
              fontSize: "2.2rem",
            }}
          >
            And in the daytime, capture it as you walk{" "}
            <Text style={{ color: "#4B6C44" }}>
              without cuffs and without a pharmacist?
            </Text>
          </Text>
        </Layout>
      </Layout>
    </Layout>
  )
);
