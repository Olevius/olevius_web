import type { TextBoxConfig, TextBoxProps } from "./TextBoxConfigTypes";

export interface AboutCardProps
  extends Omit<TextBoxProps, "value" | "classNameContent"> {
  value?: Readonly<AboutCardConfig>;
  $footerFontSize?: number | string;
}

export interface AboutCardConfig
  extends Omit<TextBoxConfig, "content" | "classNameContent"> {
  content: Readonly<AboutContentProps[]>;
  classNameTitle?: string;
}

type AboutContentProps = Readonly<{
  text: string;
  classNameContent?: string;
  link: string;
}>;
