import type {
  CSSProperties,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";
import type { BaseProps } from "./defaultTypes";

export interface TextBoxConfig {
  title: string;
  content: string;
  classNameTitle?: string;
  classNameContent?: string;
}

// Type for text components with forward ref support
export type TextProps = ForwardRefExoticComponent<
  BaseProps & RefAttributes<HTMLSpanElement>
>;

export interface TextBoxProps
  extends Omit<BaseProps, "children" | "className"> {
  key?: string;
  styleTitle?: CSSProperties;
  styleContent?: CSSProperties;
  className?: string;
  classNameTitle?: string;
  classNameContent?: string;
  value?: TextBoxConfig;
}
