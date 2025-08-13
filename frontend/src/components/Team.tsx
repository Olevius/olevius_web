// Team.tsx
import React from "react";
import type { BaseProps } from "./basics/defaultTypes";
import { cssNumbers } from "../theme/theme";

/**
 * A React functional component that renders a flexible `div` container for the Team page
 * with customizable styles and class names. Uses `forwardRef` to pass a ref to the underlying `div`.
 */
export const Team = React.forwardRef<HTMLDivElement, BaseProps>(
  ({ children, style, className, ...rest }, ref) => (
    <div
      ref={ref}
      className={className}
      style={{
        display: "flex",
        height: cssNumbers.layout.aboutHeight, // reuse your configured section height
        background: "white",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
);

Team.displayName = "Team";
