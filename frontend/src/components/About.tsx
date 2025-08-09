import React from "react";
import type { BaseProps } from "./basics/defaultTypes";
import { cssNumbers } from "../theme/theme";

/**
 * A React functional component that renders a flexible `div` container for the About page
 * with customizable styles and class names.
 * This component uses `React.forwardRef` to pass a `ref` to the underlying `div` element.
 *
 * @param {BaseProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the `div`.
 * @param {React.CSSProperties} [props.style] - Optional inline styles to apply to the `div`.
 * @param {string} [props.className] - Optional class name(s) to apply to the `div`.
 * @param {HTMLDivElement} ref - A forwarded ref to the `div` element.
 * @returns {JSX.Element} A `div` element with the specified styles, class names, and children.
 */
export const About = React.forwardRef<HTMLDivElement, BaseProps>(
  ({ children, style, className, ...rest }, ref) => (
    <div
      ref={ref}
      className={className}
      style={{
        display: "flex",
        height: cssNumbers.layout.aboutHeight, // renamed to aboutHeight
        background: "white",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
);

About.displayName = "About";
