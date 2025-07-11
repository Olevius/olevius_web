import React from "react";
import type { BaseProps } from "./basics/defaultTypes";

export const Header = React.forwardRef<HTMLHeadElement, BaseProps>(
  ({ children, style, className, ...rest }, ref) => (
    <header
      ref={ref}
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        ...style,
      }}
      {...rest}
    >
      {children}
    </header>
  )
);

Header.displayName = "Header";
