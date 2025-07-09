import type { BaseProps, LinkProps } from "./defaultTypes";
import { forRef } from "./refHelper";

// Layout component
export const Layout = forRef<HTMLDivElement, BaseProps>(
    ({ children, className, style, ...rest }, ref) => (
        <div
            ref={ref}
            className={`rounded-lg shadow-md bg-white p-6 ${className}`}
            style={style}
            {...rest}
        >
            {children}
        </div>
    )
);

// Link component
export const Link = forRef<HTMLAnchorElement, LinkProps>(
    ({ children, style, link, ...rest }, ref) => (
        <a
            ref={ref}
            href={link}
            style={{ color: "#fff", textDecoration: "none", ...style }}
            {...rest}
        >
            {children}
        </a>
    )
);

// Nav component
export const Nav = forRef<HTMLSpanElement, BaseProps>(
    ({ children, style, ...rest }, ref) => (
        <nav
            ref={ref}
            style={{
                padding: "1rem",
                ...style,
            }}
            {...rest}
        >
            {children}
        </nav>
    )
);

// ListElement component
export const ListElement = forRef<HTMLLIElement, BaseProps>(
    ({ children, style, ...rest }, ref) => (
        <li ref={ref} style={{ marginRight: "1rem", ...style }} {...rest}>
            {children}
        </li>
    )
);

// Text component
export const Text = forRef<HTMLSpanElement, BaseProps>(
    ({ children, style, ...rest }, ref) => (
        <span ref={ref} {...rest} style={{ color: "black", ...style }}>
            {children}
        </span>
    )
);

// UlContainer component
export const UlContainer = forRef<HTMLUListElement, BaseProps>(
    ({ children, style, ...rest }, ref) => (
        <ul
            ref={ref}
            style={{
                display: "flex",
                listStyle: "none",
                margin: 0,
                padding: 0,
                ...style,
            }}
            {...rest}
        >
            {children}
        </ul>
    )
);
