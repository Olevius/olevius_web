import type {
  ReactNode,
  CSSProperties,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";

// Basic props shared by most components
export interface BaseProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

// Props for link components
export interface LinkProps extends BaseProps {
  link: string;
}

// Type for text components with forward ref support
export type TextProps = ForwardRefExoticComponent<
  BaseProps & RefAttributes<HTMLSpanElement>
>;

export interface PaddingProps extends BaseProps {
  size: number;
}
