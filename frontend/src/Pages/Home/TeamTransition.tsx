// Team.tsx
import { Layout, GridLayout, Text } from "../../components/basics/defaults";
import type { BaseProps } from "../../components/basics/defaultTypes";
import { forRef } from "../../components/basics/refHelper";
import { cssNumbers } from "../../theme/theme";

/**
 * A React functional component that renders a flexible `div` container for the Team page
 * with customizable styles and class names. Uses `forwardRef` to pass a ref to the underlying `div`.
 */
export const TeamTransition = forRef<HTMLDivElement, BaseProps>(
  ({ children, style, className, ...rest }, ref) => (
    <div
      ref={ref}
      className={className}
      style={{
        position: "relative",
        height: "100vh",
        border: cssNumbers.testing.border,
        backgroundColor: "white",
        background: "white",
        ...style,
      }}
      {...rest}
    >
      <Layout style={{ display: "flex", flexDirection: "column" }}>
        <GridLayout
          style={{
            backgroundColor: "white",
            border: cssNumbers.testing.border,
            zIndex: 2,
          }}
          className="team-container"
        >
          <Text
            className="team-title"
            style={{
              color: "black",
              border: cssNumbers.testing.border,
            }}
          >
            Our Team
          </Text>{" "}
        </GridLayout>
        {/* <Layout className="image-container" style={{ display: "flex" }}>
            {Object.entries(imagePathList).map(([key, value]) => (
              <Layout
                className="image-wrapper"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  height: "auto",
                }}
                key={key}
              >
                <Image
                  id="view_img"
                  className="images"
                  style={{ pointerEvents: "none" }}
                  key={key}
                  src={value.src}
                />
              </Layout>
            ))}
          </Layout> */}
      </Layout>

      {/* <Layout
        className="scroll-rect1"
        style={{
          backgroundColor: "white",
          border: cssNumbers.testing.border,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      > */}
      {children}
    </div>
  )
);

TeamTransition.displayName = "Team";
