// components/Text.tsx
import React, { type ReactNode } from "react";

interface TextProps {
    children: ReactNode; // 👈 this is the magic
    className?: string; // optional styling hook
    style?: React.CSSProperties; // optional inline styles
}

export const Text = ({ children, ...rest }: TextProps) => {
    return <span {...rest}>{children}</span>;
};
