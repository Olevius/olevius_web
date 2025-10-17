import { Layout, Text } from "../../../components/basics/defaults";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import { UpdTeamBox } from "./UpdTeamBox";

export const UpdTeam = forRef<HTMLDivElement, Omit<BaseProps, "children">>(
  ({ style, className, ...rest }, ref) => (
    <Layout
      ref={ref}
      {...rest}
      style={{
        display: "flex",
        height: "150vh",
        background: "#fff",
        flexDirection: "column",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Header area becomes the positioning context */}
      <Layout
        style={{ height: "30vh", position: "relative", padding: 0, margin: 0 }}
      >
        <Text
          style={{
            position: "absolute",
            top: -5,
            right: -40, // hug right edge
            margin: 0,
            padding: 0,
            lineHeight: 1,
            whiteSpace: "nowrap",
            fontSize: "25vw",
            fontFamily: "Uber Move Text, sans-serif",
            transform: "translateY(-0.15em)", // trims font’s top bearing
            // optional micro-inset to guarantee no horizontal overflow:
            // right: "0.02em",
          }}
        >
          TEAM
        </Text>
      </Layout>

      <Layout
        style={{
          height: "70vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Layout
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20vh",
          }}
        >
          <UpdTeamBox bottomLine={false}>Levi</UpdTeamBox>
          <UpdTeamBox bottomLine={false}>Andrew</UpdTeamBox>
          <UpdTeamBox bottomLine={false}>Matthew</UpdTeamBox>
          <UpdTeamBox bottomLine={true}>Justin</UpdTeamBox>
        </Layout>
      </Layout>
    </Layout>
  )
);
