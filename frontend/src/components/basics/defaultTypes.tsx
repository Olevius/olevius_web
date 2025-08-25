import type { ReactNode, CSSProperties } from "react";

// Basic props shared by most components
export interface BaseProps {
  children?: ReactNode;
  id?: string;
  className?: string;
  style?: CSSProperties;
  highlight?: CSSProperties;
}

// Props for link components
export interface LinkProps extends BaseProps {
  link: string;
}

export interface PaddingProps extends BaseProps {
  size: number;
}

export interface GridLayoutProps extends BaseProps {
  styleRow?: CSSProperties;
  styleColumn?: CSSProperties;
}
