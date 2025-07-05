import type { BaseProps } from "./basics/defaultTypes";

export const Header = ({
    children,
    style,
    className,
    ...rest
}: BaseProps & { style?: React.CSSProperties }) => {
    return (
        <header style={{ background: "black", ...style }} {...rest}>
            {children}
        </header>
    );
};
