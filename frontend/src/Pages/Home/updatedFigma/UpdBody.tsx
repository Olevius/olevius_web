import { Layout, Text } from "../../../components/basics/defaults";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import { cssNumbers } from "../../../theme/theme";
import { UpdButton } from "./UpdButton";

export const UpdBody = forRef<HTMLDivElement, Omit<BaseProps, "children">>(
  ({ style, className, ...rest }, ref) => (
    <Layout
      className={className}
      ref={ref}
      {...rest}
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        border: cssNumbers.testing.border,
        ...style,
      }}
    >
      <Layout
        className="upd-body-text-container"
        style={{ border: cssNumbers.testing.border }}
      >
        <Text
          className="upd-body-text"
          style={{
            fontFamily: "satoshi",
            border: cssNumbers.testing.border,
          }}
        >
          Olevius delivers continuous, cuff-free blood pressure tracking through
          direct optical sensing. See real-time trends, detect subtle changes,
          and understand your heart's rhythm with clinical-grade accuracy - all
          in one effortless glance
        </Text>
      </Layout>
      <Layout
        className="upd-body-text-container"
        style={{ border: cssNumbers.testing.border }}
      >
        <Text
          className="upd-body-header"
          style={{
            fontFamily: "Uber Move Text",
            border: cssNumbers.testing.border,
          }}
        >
          Direct and <u>Accurate.</u>
        </Text>
      </Layout>
      <Layout
        className="upd-button-container"
        style={{ border: cssNumbers.testing.border }}
      >
        <UpdButton
          className="upd-button"
          style={{ border: cssNumbers.testing.border }}
        >
          See More
        </UpdButton>
      </Layout>
    </Layout>
  )
);
