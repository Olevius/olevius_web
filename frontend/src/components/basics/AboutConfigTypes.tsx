import type { TextBoxConfig, TextBoxProps } from "./TextBoxConfigTypes";

export interface AboutCardProps
  extends Omit<TextBoxProps, "value" | "classNameContent"> {
  value?: Readonly<AboutCardConfig>;
}

export interface AboutCardConfig
  extends Omit<TextBoxConfig, "content" | "classNameContent"> {
  content: Readonly<AboutContentProps[]>;
  classNameTitle?: string;
}

type AboutContentProps = Readonly<{
  text: string;
  className: string;
  link: string;
}>;
