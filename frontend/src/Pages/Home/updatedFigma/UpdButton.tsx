import type { ButtonHTMLAttributes } from "react";
import type {
  BaseProps,
  ButtonProps,
} from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import { customColors } from "../../../theme/colors";

export const UpdButton = forRef<HTMLButtonElement, ButtonProps>(
  ({ style, children, className, ...rest }, ref) => (
    <button
      ref={ref}
      style={{
        backgroundColor: customColors.softHighlight,
        color: "black",
        border: "none",
        outline: "none",
        pointerEvents: "auto",
        ...style,
      }}
      className={className}
      {...rest}
    >
      {children}
    </button>
  )
);
