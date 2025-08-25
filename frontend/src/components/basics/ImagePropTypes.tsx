import type { CSSProperties } from "react";
import type { BaseProps } from "./defaultTypes";

type ImageMapValueProps = {
  src: string;
  style?: CSSProperties;
};

export type ImageMapProps = {
  levi: ImageMapValueProps;
  jp: ImageMapValueProps;
  matthew: ImageMapValueProps;
  andrew: ImageMapValueProps;
};

export interface ImageProps extends BaseProps {
  src?: string;
  link?: string;
}
