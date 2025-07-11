import React from "react";
import type { BaseProps } from "./basics/defaultTypes";

export const Header = React.forwardRef<HTMLHeadElement, BaseProps>(
  ({ children, style, className, ...rest }, ref) => (
    <header
      ref={ref}
      className={className}
      style={{
<<<<<<< Updated upstream
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        overflowX: "hidden",
        position: "relative",
=======
        position: "absolute",
        height: "100vh",
        top: "50%",
        left: "25%",
>>>>>>> Stashed changes
        ...style,
      }}
      {...rest}
    >
      {children}
    </header>
  )
);

Header.displayName = "Header";
