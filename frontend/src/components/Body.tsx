import React from "react";
import type { BaseProps } from "./basics/defaultTypes";
import { numbers } from "../theme/default";

export const Body = React.forwardRef<HTMLDivElement, BaseProps>(
  ({ children, style, className, ...rest }, ref) => (
    <div
      ref={ref}
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: numbers.layout.fullHeight,
        background: "white",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
);

Body.displayName = "Body";
