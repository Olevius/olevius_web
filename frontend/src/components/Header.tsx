import React from "react";
import type { BaseProps } from "./basics/defaultTypes";

export const Header = React.forwardRef<HTMLHeadElement, BaseProps>(
    ({ children, style, className, ...rest }, ref) => (
        <header
            ref={ref}
            className={className}
            style={{ background: "black", ...style }}
            {...rest}
        >
            {children}
        </header>
    )
);

Header.displayName = "Header";
