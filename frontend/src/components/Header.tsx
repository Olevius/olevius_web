import React from "react";
import type { BaseProps } from "./basics/defaultTypes";

export const Header = React.forwardRef<
    HTMLHeadElement,
    BaseProps & { style?: React.CSSProperties }
>(({ children, style, className, ...rest }, ref) => {
    return (
        <header ref={ref} style={{ background: "black", ...style }} {...rest}>
            {children}
        </header>
    );
});
