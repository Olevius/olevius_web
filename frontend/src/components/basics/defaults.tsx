import type { BaseProps, LinkProps } from "./defaultTypes";
import React, { type ForwardedRef, type PropsWithoutRef } from "react";

export function forRef<T, P = {}>(
    render: (props: PropsWithoutRef<P>, ref: ForwardedRef<T>) => React.ReactNode
) {
    return React.forwardRef<T, P>(render);
}

export const Card = forRef<HTMLDivElement, BaseProps>(
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

export const Link = forRef<
    HTMLAnchorElement,
    LinkProps & { style?: React.CSSProperties }
>(({ children, style, link, ...rest }, ref) => {
    return (
        <a
            ref={ref}
            href={link}
            style={{ color: "#fff", textDecoration: "none", ...style }}
            {...rest}
        >
            {children}
        </a>
    );
});

export const Nav = forRef<
    HTMLSpanElement,
    BaseProps & { style?: React.CSSProperties }
>(({ children, style, ...rest }, ref) => {
    return (
        <nav
            ref={ref}
            style={{
                padding: "1rem",
                background: "#222",
                color: "#fff",
                ...style,
            }}
            {...rest}
        >
            {children}
        </nav>
    );
});

export const ListElement = forRef<
    HTMLLIElement,
    BaseProps & { style?: React.CSSProperties }
>(({ children, style, ...rest }, ref) => {
    return (
        <li ref={ref} style={{ marginRight: "1rem", ...style }} {...rest}>
            {children}
        </li>
    );
});

export const Text = forRef<HTMLSpanElement, BaseProps>(
    ({ children, ...rest }, ref) => {
        return (
            <span ref={ref} {...rest}>
                {children}
            </span>
        );
    }
);

export const UlContainer = forRef<
    HTMLUListElement,
    BaseProps & { style?: React.CSSProperties }
>(({ children, style, ...rest }, ref) => {
    return (
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
    );
});
