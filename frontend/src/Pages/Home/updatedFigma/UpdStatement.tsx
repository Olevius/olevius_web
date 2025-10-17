import { Layout, Text } from "../../../components/basics/defaults";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";

export const UpdStatement = forRef<HTMLDivElement, Omit<BaseProps, "children">>(
  ({ style, className, ...rest }, ref) => (
    <Layout
      className={className}
      ref={ref}
      {...rest}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
        ...style,
      }}
    >
      <Text className="upd-statement-text">We're changing that.</Text>
    </Layout>
  )
);
