import { Layout, Padding, Text } from "../../../components/basics/defaults";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";

export const UpdPeople = forRef<HTMLDivElement, Omit<BaseProps, "children">>(
  ({ style, className, ...rest }, ref) => (
    <Layout
      className={className}
      ref={ref}
      {...rest}
      style={{
        backgroundColor: "white",
        display: "flex",
        padding: 0,
        overflow: "hidden",
        margin: 0,
        gap: 0,
        flexDirection: "column",
        textAlign: "left",
        ...style,
      }}
    >
      <Layout
        style={{
          display: "flex",
          height: "60vh",
          flexDirection: "row",
          borderTop: "1px solid black",
        }}
      >
        <Layout style={{ width: "50vw", borderRight: "1px solid black" }} />
        <Layout style={{ width: "50vw" }} />
      </Layout>
      <Layout
        style={{
          display: "flex",
          height: "40vh",
          flexDirection: "row",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        <Layout style={{ width: "50vw", borderRight: "1px solid black" }} />
        <Layout style={{ width: "50vw" }} />
      </Layout>
    </Layout>
  )
);
