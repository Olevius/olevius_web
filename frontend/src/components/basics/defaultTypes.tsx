import type { ReactNode } from "react";

interface Base {
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export type BaseProps = Base & { style?: React.CSSProperties };

export interface LinkProps extends BaseProps {
    link: string;
}

export type TextProps = React.ForwardRefExoticComponent<
    BaseProps & React.RefAttributes<HTMLSpanElement>
>;
