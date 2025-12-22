import { Layout } from "../../components/basics/defaults";
import type { BaseProps } from "../../components/basics/defaultTypes";
import { forRef } from "../../components/basics/refHelper";
import { TextBox } from "../../components/TextBox";
import { teamTextMap } from "../../text-maps/teamMap";
import { cssNumbers } from "../../theme/theme";

/**
 * A React functional component that renders a flexible `div` container for the Team page
 * with customizable styles and class names. Uses `forwardRef` to pass a ref to the underlying `div`.
 */
export const TeamInfo = forRef<HTMLDivElement, Omit<BaseProps, "children">>(
  ({ style, className, ...rest }, ref) => (
    <Layout className={className} ref={ref} {...rest}>
      <Layout
        className="team-text-box-container"
        style={{
          padding: cssNumbers.layout.paddingBody,
          backgroundColor: "white",
          ...style,
        }}
      >
        {Object.entries(teamTextMap).map(([key, value]) => (
          <TextBox
            key={key}
            value={value}
            className="team-text-box"
            classNameContent="team-text-box-content"
            style={{
              opacity: 0,
            }}
          />
        ))}
      </Layout>
    </Layout>
  )
);
