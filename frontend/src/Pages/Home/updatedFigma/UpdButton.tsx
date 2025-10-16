import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import { customColors } from "../../../theme/colors";

export const UpdButton = forRef<HTMLButtonElement, BaseProps>(
  ({ style, children, className, ...rest }, ref) => (
    <button
      ref={ref}
      style={{
        backgroundColor: customColors.softHighlight,
        color: "black",
        boxShadow: "-2px 5px 3px rgba(0, 0, 0, 0.3)", // Added box shadow
        ...style,
      }}
      className={className}
      {...rest}
    >
      {children}
    </button>
  )
);
