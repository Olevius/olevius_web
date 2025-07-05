import type { BaseProps } from "./basics/defaultTypes";

export const Header = ({
    style,
    className,
    ...rest
}: Omit<BaseProps, "children"> & { style?: React.CSSProperties }) => {
    return (
        <header style={{ background: "black", ...style }} {...rest}></header>
    );
};
