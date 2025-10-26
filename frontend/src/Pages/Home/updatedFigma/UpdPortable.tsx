import { Layout, Text } from "../../../components/basics/defaults";
import surfer from "../../../assets/surfer.png";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import { cssNumbers } from "../../../theme/theme";

export const UpdPortable = forRef<HTMLDivElement, Omit<BaseProps, "children">>(
  ({ style, className, ...rest }, ref) => {
    return (
      <Layout
        className={className}
        ref={ref}
        {...rest}
        style={{
          display: "flex",
          height: "130vh",
          overflow: "visible",
          justifyContent: "center",
          backgroundImage: `url(${surfer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: cssNumbers.testing.border,
          ...style,
        }}
      >
        <Layout
          style={{
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            overflow: "visible",
            zIndex: 1,
            border: cssNumbers.testing.border,
          }}
        >
          <Layout
            style={{
              display: "flex",
              flexDirection: "column",
              border: cssNumbers.testing.border,
            }}
          >
            <Text
              className="upd-portable-text1"
              style={{
                color: "white",
                lineHeight: 1,
                wordWrap: "revert-layer",
                border: cssNumbers.testing.border,
              }}
            >
              PORTABLE WEAR. PORTABLE WEAR. PORTABLE WEAR. PORTABLE WEAR.
              PORTABLE WEAR. PORTABLE WEAR.
            </Text>
            <Text
              className="upd-portable-text2"
              style={{
                lineHeight: 1,
                color: "white",
                border: cssNumbers.testing.border,
              }}
            >
              PORTABLE WEAR. PORTABLE WEAR. PORTABLE WEAR. PORTABLE WEAR.
              PORTABLE WEAR. PORTABLE WEAR.
            </Text>
            <Text
              className="upd-portable-text3"
              style={{
                lineHeight: 1,
                color: "white",
                border: cssNumbers.testing.border,
              }}
            >
              PORTABLE WEAR. PORTABLE WEAR. PORTABLE WEAR. PORTABLE WEAR.
              PORTABLE WEAR. PORTABLE WEAR.
            </Text>
          </Layout>
        </Layout>
      </Layout>
    );
  }
);
