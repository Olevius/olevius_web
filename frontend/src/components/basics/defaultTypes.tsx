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
  highlight?: CSSProperties;
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

export interface GridLayoutProps extends BaseProps {
  styleRow?: CSSProperties;
  styleColumn?: CSSProperties;
}

export interface TextBoxProps
  extends Omit<BaseProps, "children" | "className"> {
  key?: string;
  classNameTitle?: string;
  classNameContent?: string;
  value?: TextBoxConfig;
}

export type TextBoxConfig = {
  title: string;
  content: string;
};
