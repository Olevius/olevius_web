import React from "react";
import type { BaseProps } from "../../components/basics/defaultTypes";
import { Layout } from "../../components/basics/defaults";
import { cssNumbers } from "../../theme/theme";
import { TextBox } from "../../components/TextBox";
import { bodyTextMap } from "../../text-maps/bodyTextMap";
import { customColors } from "../../theme/colors";

/**
 * A React functional component that renders a flexible `div` container with customizable styles and class names.
 * This component uses `React.forwardRef` to pass a `ref` to the underlying `div` element.
 *
 * @param {BaseProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the `div`.
 * @param {React.CSSProperties} [props.style] - Optional inline styles to apply to the `div`.
 * @param {string} [props.className] - Optional class name(s) to apply to the `div`.
 * @param {HTMLDivElement} ref - A forwarded ref to the `div` element.
 * @returns {JSX.Element} A `div` element with the specified styles, class names, and children.
 */
export const Body = React.forwardRef<
  HTMLDivElement,
  Omit<BaseProps, "children">
>(({ className, style, ...rest }, ref) => (
  <div
    ref={ref}
    className={className}
    style={{
      display: "flex",
      background: "white",
      overflow: "hidden",
      backgroundColor: customColors.highlight,
      border: cssNumbers.testing.border,
      zIndex: 3,
      ...style,
    }}
    {...rest}
  >
    <Layout
      className="body-text-container"
      style={{
        display: "flex",
        flexDirection: "column",
        border: cssNumbers.testing.border,
      }}
    >
      <Layout
        style={{
          overflow: "hidden",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          border: cssNumbers.testing.border,
        }}
      >
        {Object.entries(bodyTextMap).map(([key, value], idx) => {
          return (
            <TextBox
              className={idx !== 0 ? "body-text-box" : undefined}
              classNameTitle={value.classNameTitle}
              classNameContent={value.classNameContent}
              styleContent={{
                textAlign: "left",
                border: cssNumbers.testing.border,
                whiteSpace: "no-wrap",
              }}
              key={key}
              value={value}
            />
          );
        })}
      </Layout>
    </Layout>
  </div>
));

Body.displayName = "Body";
