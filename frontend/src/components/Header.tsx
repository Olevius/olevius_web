import type { BaseProps } from "./basics/defaultTypes";
import { cssNumbers } from "../theme/theme";
import { forRef } from "./basics/refHelper";

/**
 * A React functional component that renders a header element with customizable styles and properties.
 * This component uses `React.forwardRef` to pass a ref to the underlying `<header>` element.
 *
 * @param {BaseProps} props - The props for the Header component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the header.
 * @param {React.CSSProperties} [props.style] - Optional inline styles to apply to the header.
 * @param {string} [props.className] - Optional CSS class name to apply to the header.
 * @param {React.Ref<HTMLHeadElement>} ref - A ref to the underlying `<header>` element.
 * @returns {JSX.Element} The rendered header component.
 */
export const Header = forRef<HTMLHeadElement, BaseProps>(
  ({ children, style, className, ...rest }, ref) => (
    <header
      ref={ref}
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: cssNumbers.layout.fullHeight,
        ...style,
      }}
      {...rest}
    >
      {children}
    </header>
  )
);

Header.displayName = "Header";
