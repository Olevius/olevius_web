// TeamCard.tsx
import type { BaseProps } from "./basics/defaultTypes";
import { forRef } from "./basics/refHelper";

/**
 * A React functional component that renders a flexible `div` container for the Team page
 * with customizable styles and class names. Uses `forwardRef` to pass a ref to the underlying `div`.
 */
export const TeamCard = forRef<HTMLDivElement, BaseProps>(
  ({ children, style, className, ...rest }, ref) => (
    <div
      ref={ref}
      className={className}
      style={{
        background: "white",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
);

TeamCard.displayName = "TeamCard";
