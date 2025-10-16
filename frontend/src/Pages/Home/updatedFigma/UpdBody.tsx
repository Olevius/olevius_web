import { Layout, Text } from "../../../components/basics/defaults";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import { UpdButton } from "./UpdButton";

export const UpdBody = forRef<HTMLDivElement, Omit<BaseProps, "children">>(
  ({ style, className, ...rest }, ref) => (
    <Layout
      className={className}
      ref={ref}
      {...rest}
      style={{
        backgroundColor: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        ...style,
      }}
    >
      <Layout className="upd-body-text-container">
        <Text className="upd-body-text" style={{ fontFamily: "satoshi" }}>
          Olevius delivers continuous, cuff-free blood pressure tracking through
          direct optical sensing. See real-time trends, detect subtle changes,
          and understand your heart's rhythm with clinical-grade accuracy - all
          in one effortless glance
        </Text>
      </Layout>
      <Layout className="upd-body-text-container">
        <Text
          className="upd-body-header"
          style={{ fontFamily: "Uber Move Text" }}
        >
          Direct and <u>Accurate.</u>
        </Text>
      </Layout>
      <Layout className="upd-button-container">
        <UpdButton className="upd-button">See More</UpdButton>
      </Layout>
    </Layout>
  )
);
