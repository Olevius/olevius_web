import React from "react";
import type { PaddingProps } from "./basics/defaultTypes";

export const Padding = React.forwardRef<HTMLDivElement, PaddingProps>(
  ({ size, className, style }, ref) => (
    <div
      ref={ref}
      className={className}
      style={{ padding: size, ...style }}
    ></div>
  )
);

Padding.displayName = "Padding";
