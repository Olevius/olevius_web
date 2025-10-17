import { Layout, Text } from "../../../components/basics/defaults";
import type { TeamBoxProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import { UpdLine } from "./UpdLine";

export const UpdTeamBox = forRef<HTMLDivElement, TeamBoxProps>(
  ({ style, children, bottomLine, className, ...rest }, ref) => (
    <Layout
      className={className}
      ref={ref}
      {...rest}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3vh",
        ...style,
      }}
    >
      <UpdLine />

      <Layout
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingLeft: "10rem",
          paddingRight: "10rem",
        }}
      >
        <Text
          style={{
            fontFamily: "satoshi",
            fontWeight: "lighter",
            fontSize: "3.125rem",
          }}
        >
          {children}
        </Text>
        <Text
          style={{
            fontFamily: "satoshi",
            fontWeight: "lighter",
            fontSize: "3.125rem",
          }}
        >
          +
        </Text>
      </Layout>
      <UpdLine
        className={bottomLine ? undefined : "upd-team-box-disable-bottom-line"}
      />
    </Layout>
  )
);
