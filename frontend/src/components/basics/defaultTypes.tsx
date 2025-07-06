import type { ReactNode } from "react";

export interface BaseProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export interface LinkProps extends BaseProps {
    link: string;
}

export type TextProps = React.ForwardRefExoticComponent<
    BaseProps & React.RefAttributes<HTMLSpanElement>
>;
