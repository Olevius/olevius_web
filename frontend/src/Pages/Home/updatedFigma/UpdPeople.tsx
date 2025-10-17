import { Layout, Text } from "../../../components/basics/defaults";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import { palette } from "../../../theme/colors";
import { UpdAvatar } from "./UpdAvatar";
import avatar1 from "../../../assets/avatar1.png";
import avatar2 from "../../../assets/avatar2.png";
import avatar3 from "../../../assets/avatar3.png";
import avatar4 from "../../../assets/avatar4.png";
import avatar5 from "../../../assets/avatar5.png";
import avatar6 from "../../../assets/avatar6.png";
import avatar7 from "../../../assets/avatar7.png";

import { cssNumbers } from "../../../theme/theme";

export const UpdPeople = forRef<HTMLDivElement, Omit<BaseProps, "children">>(
  ({ style, className, ...rest }, ref) => (
    <Layout
      className={className}
      ref={ref}
      {...rest}
      style={{
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      <Layout
        style={{
          height: "100vh",
          border: cssNumbers.testing.border,
          backgroundColor: palette.secondary.light,
          position: "relative", // key: create positioning context
          overflow: "hidden",
        }}
      >
        {/* Centered text overlay */}
        <Layout
          className="upd-people-text-container"
          style={{
            position: "absolute",
            inset: 0, // top/right/bottom/left: 0
            display: "flex",
            justifyContent: "center",
            zIndex: 1_000_000, // above bg, below/above avatars as you prefer
            pointerEvents: "none", // text doesn't block avatar clicks
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <Text
            className="upd-people-header-text1"
            style={{ fontFamily: "Vujahday Script", color: "white" }}
          >
            60%
          </Text>
          <Layout
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Text
              className="upd-people-content-text1"
              style={{
                fontFamily: "satoshi",
                fontWeight: 1,
              }}
            >
              of strokes can be prevented through consistent BP control.
            </Text>
          </Layout>
        </Layout>

        {/* Avatars can be absolutely placed or whatever you already have */}
        <UpdAvatar
          className="upd-avatar1"
          src={avatar1}
          style={{ zIndex: 1_000_001 }}
        />
        <UpdAvatar
          className="upd-avatar2"
          src={avatar2}
          style={{ zIndex: 1_000_001 }}
        />
        <UpdAvatar
          className="upd-avatar3"
          src={avatar3}
          style={{ zIndex: 1_000_001 }}
        />
      </Layout>

      <Layout
        style={{
          height: "100vh",
          backgroundColor: palette.secondary.light,
          border: cssNumbers.testing.border,
          position: "relative", // key: create positioning context
          overflow: "hidden",
        }}
      >
        {/* Centered text overlay */}
        <Layout
          className="upd-people-text-container"
          style={{
            position: "absolute",
            inset: 0, // top/right/bottom/left: 0
            display: "flex",
            justifyContent: "center",
            zIndex: 1_000_000, // above bg, below/above avatars as you prefer
            pointerEvents: "none", // text doesn't block avatar clicks
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <Text
            className="upd-people-header-text1"
            style={{ fontFamily: "Vujahday Script", color: "white" }}
          >
            13%
          </Text>
          <Layout
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Text
              className="upd-people-content-text1"
              style={{
                fontFamily: "satoshi",
                fontWeight: 1,
              }}
            >
              reduction in heart events when nighttime blood pressure is closely
              observed.
            </Text>
          </Layout>
        </Layout>
        <UpdAvatar
          className="upd-avatar4"
          src={avatar4}
          style={{ zIndex: 100000, border: cssNumbers.testing.border }}
        />
        <UpdAvatar
          className="upd-avatar5"
          src={avatar5}
          style={{ zIndex: 100000, border: cssNumbers.testing.border }}
        />
        <UpdAvatar
          className="upd-avatar6"
          src={avatar6}
          style={{ zIndex: 100000, border: cssNumbers.testing.border }}
        />
        <UpdAvatar
          className="upd-avatar7"
          src={avatar7}
          style={{ zIndex: 100000, border: cssNumbers.testing.border }}
        />
      </Layout>
    </Layout>
  )
);
