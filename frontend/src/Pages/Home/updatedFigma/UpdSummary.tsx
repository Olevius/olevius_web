import { Layout, Text, Image } from "../../../components/basics/defaults";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import { cssNumbers } from "../../../theme/theme";
import papamama from "../../../assets/papamama.png";

export const UpdSummary = forRef<HTMLDivElement, Omit<BaseProps, "children">>(
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
        className="upd-summary-container"
        style={{
          display: "flex",
          flexDirection: "column",
          border: cssNumbers.testing.border,
        }}
      >
        <Layout
          className="upd-summary-text-box"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            border: cssNumbers.testing.border,
          }}
        >
          <Text
            className="upd-summary-text"
            style={{
              textAlign: "left",
              fontWeight: "lighter",
              fontFamily: "satoshi",
              border: cssNumbers.testing.border,
            }}
          >
            Tibi, matri tuae, et ceteris curatum
          </Text>
        </Layout>
        <Layout
          className="upd-summary-image-container"
          style={{
            display: "flex",
            justifyContent: "center",
            border: cssNumbers.testing.border,
          }}
        >
          <Image
            className="upd-summary-image"
            src={papamama}
            style={{
              zIndex: 11,
              height: "100%",
              width: "80%",
              border: cssNumbers.testing.border,
            }}
          />
        </Layout>
      </Layout>
    </Layout>
  )
);
