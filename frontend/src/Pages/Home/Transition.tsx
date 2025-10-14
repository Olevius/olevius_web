import React from "react";
import { GridLayout, Text } from "../../components/basics/defaults";
import type { BaseProps } from "../../components/basics/defaultTypes";
import { customColors } from "../../theme/colors";
import { cssNumbers } from "../../theme/theme";

export const Transition = React.forwardRef<
  HTMLDivElement,
  Omit<BaseProps, "children">
>(({ className, style, ...rest }, ref) => {
  return (
    <GridLayout
      className={className}
      ref={ref}
      style={{
        backgroundColor: customColors.highlight,
        border: cssNumbers.testing.border,
        zIndex: 2,
        ...style,
      }}
      {...rest}
    >
      <Text
        className="transition-text"
        style={{
          color: "black",
          border: cssNumbers.testing.border,
        }}
      >
        What is Olevius?
      </Text>
    </GridLayout>
  );
});
