import type { BaseProps } from "../../components/basics/defaultTypes";
import { cssNumbers } from "../../theme/theme";
import { forRef } from "../../components/basics/refHelper";
import { Layout, Text } from "../../components/basics/defaults";

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
      <Layout
        style={{
          display: "flex",
          flexDirection: "column",
          border: cssNumbers.testing.border,
        }}
      >
        <Text
          className="title-header"
          style={{
            color: "black",
            zIndex: 0,
            border: cssNumbers.testing.border,
          }}
        >
          OLEVIUS
        </Text>
        <Text
          className="subtitle-header"
          style={{
            color: "black",
            opacity: 1,
            border: cssNumbers.testing.border,
            zIndex: 0,
          }}
        >
          Accuracy. Unmatched.
        </Text>
      </Layout>
    </header>
  )
);

Header.displayName = "Header";
