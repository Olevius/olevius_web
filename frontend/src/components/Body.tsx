import React from "react";
import type { BaseProps } from "./basics/defaultTypes";

export const Body = React.forwardRef<HTMLDivElement, BaseProps>(
  ({ children, style, className, ...rest }, ref) => (
    <div
      ref={ref}
      className={className}
      style={{
        position: "relative",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
);

Body.displayName = "Body";
