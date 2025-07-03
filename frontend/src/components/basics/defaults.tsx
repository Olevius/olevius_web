import type { BaseProps, LinkProps } from "./defaultTypes";

export const Card = ({ children, className = "", style }: BaseProps) => (
    <div
        className={`rounded-lg shadow-md bg-white p-6 ${className}`}
        style={style}
    >
        {children}
    </div>
);

export const Link = ({
    children,
    style,
    link,
    ...rest
}: LinkProps & { style?: React.CSSProperties }) => {
    return (
        <a
            href={link}
            style={{ color: "#fff", textDecoration: "none", ...style }}
            {...rest}
        >
            {children}
        </a>
    );
};

export const Nav = ({
    children,
    style,
    ...rest
}: BaseProps & { style?: React.CSSProperties }) => {
    return (
        <nav
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
};

export const ListElement = ({
    children,
    style,
    ...rest
}: BaseProps & { style?: React.CSSProperties }) => {
    return (
        <li style={{ marginRight: "1rem", ...style }} {...rest}>
            {children}
        </li>
    );
};

export const Text = ({ children, ...rest }: BaseProps) => {
    return <span {...rest}>{children}</span>;
};

export const UlContainer = ({
    children,
    style,
    ...rest
}: BaseProps & { style?: React.CSSProperties }) => {
    return (
        <ul
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
};
