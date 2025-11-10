import { Layout, Text } from "../../../components/basics/defaults";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import { teamTextMap } from "../../../text-maps/teamMap";
import { UpdTeamBox } from "./UpdTeamBox";

export const UpdTeam = forRef<HTMLDivElement, Omit<BaseProps, "children">>(
  ({ style, className, ...rest }, ref) => (
    <Layout
      ref={ref}
      {...rest}
      style={{
        position: "relative",
        display: "flex",
        paddingBottom: "30vh",
        background: "#fff",
        flexDirection: "column",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Header area becomes the positioning context */}
      <Layout
        style={{
          height: "30vh",
          position: "relative",
          padding: 0,
          margin: 0,
        }}
      >
        <Text
          style={{
            position: "absolute",
            top: 54,
            right: -40, // hug right edge
            margin: 0,
            padding: 0,
            lineHeight: 0.7,
            borderBottom: "1px solid black",
            textAlign: "right",
            width: "120vw",
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
        <Layout
          style={{
            position: "absolute",
            width: "100vw",
            borderBottom: "1px solid black",

            height: "1px",
          }}
        />
      </Layout>

      <Layout
        style={{
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
          <UpdTeamBox bottomLine={true} title={teamTextMap.levi.title}>
            {teamTextMap.levi.content}
          </UpdTeamBox>
          <UpdTeamBox bottomLine={false} title={teamTextMap.andrew.title}>
            {teamTextMap.andrew.content}
          </UpdTeamBox>
          <UpdTeamBox bottomLine={false} title={teamTextMap.matthew.title}>
            {teamTextMap.matthew.content}
          </UpdTeamBox>
          <UpdTeamBox bottomLine={false} title={teamTextMap.jp.title}>
            {teamTextMap.jp.content}
          </UpdTeamBox>
        </Layout>
      </Layout>
    </Layout>
  )
);
