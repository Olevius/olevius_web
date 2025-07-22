import React from "react";
import type { BaseProps } from "./basics/defaultTypes";
import { numbers } from "../theme/default";

export const Header = React.forwardRef<HTMLHeadElement, BaseProps>(
  ({ children, style, className, ...rest }, ref) => (
    <header
      ref={ref}
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: numbers.layout.fullHeight,
        ...style,
      }}
      {...rest}
    >
      {children}
    </header>
  )
);

Header.displayName = "Header";
