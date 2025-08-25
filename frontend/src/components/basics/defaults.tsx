import { cssNumbers } from "../../theme/theme";
import type {
  BaseProps,
  GridLayoutProps,
  LinkProps,
  PaddingProps,
} from "./defaultTypes";
import type { ImageProps } from "./ImagePropTypes";
import { forRef } from "./refHelper";

/**
 * Layout
 * ----------
 * Generic rounded container with padding and shadow.
 *
 * @generic T - HTMLElement you want the ref to point to (HTMLDivElement here).
 * @param props.children  React nodes rendered inside.
 * @param props.className Extra classNames appended to the default styles.
 * @param props.style     Inline style overrides.
 * @returns A div wrapped with `forRef`, forwarding the ref.
 *
 * @example
 * ```tsx
 * <Layout className="bg-white">Content</Layout>
 * ```
 */
export const Layout = forRef<HTMLDivElement, BaseProps>(
  ({ children, className, style, id, ...rest }, ref) => (
    <div
      id={id}
      ref={ref}
      className={`rounded-lg shadow-md #dcffcf p-6 ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  )
);

export const Image = forRef<HTMLImageElement, ImageProps>(
  ({ className, children, style, src, id, ...rest }, ref) => (
    <img
      className={className}
      ref={ref}
      id={id}
      style={style}
      src={src}
      {...rest}
    >
      {children}
    </img>
  )
);

export const AnchoredImage = forRef<HTMLImageElement, ImageProps>(
  ({ className, style, src, id, link, ...rest }, ref) => (
    <a href={link}>
      <img
        className={className}
        ref={ref}
        id={id}
        style={style}
        src={src}
        {...rest}
      />
    </a>
  )
);

/**
 * GridLayout
 * -------------
 * Convenience wrapper that gives you a flex **row -> column** structure:
 * outer `<div>` → row Layout → inner column Layout → children.
 *
 * @param props.children     React nodes placed in the column Layout.
 * @param props.className    Extra classNames for the outer wrapper.
 * @param props.style        Inline styles for the outer wrapper.
 * @param props.styleRow     Styles merged into the row Layout (`display:flex; flexDirection:"row"` by default).
 * @param props.styleColumn  Styles merged into the column Layout (`display:flex; flexDirection:"column"` by default).
 * @returns A ref-forwarding div containing nested Layouts.
 *
 * @example
 * ```tsx
 * <GridLayout styleRow={{ gap: 16 }} styleColumn={{ gap: 8 }}>
 *   <ItemA />
 *   <ItemB />
 * </GridLayout>
 * ```
 */
export const GridLayout = forRef<HTMLDivElement, GridLayoutProps>(
  ({ children, className, style, styleRow, styleColumn, ...rest }, ref) => (
    <div
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
      <Layout style={{ display: "flex", flexDirection: "row", ...styleRow }}>
        <Layout
          style={{ display: "flex", flexDirection: "column", ...styleColumn }}
        >
          {children}
        </Layout>
      </Layout>
    </div>
  )
);

/**
 * Nav
 * -----
 * Simple nav wrapper with padding.
 *
 * @param props.children React nodes inside the `<nav>`.
 * @param props.style    Inline style overrides.
 * @returns A ref-forwarding `<nav>` element.
 */
export const Nav = forRef<HTMLSpanElement, BaseProps>(
  ({ children, style, ...rest }, ref) => (
    <nav
      ref={ref}
      style={{
        padding: "1rem",
        ...style,
      }}
      {...rest}
    >
      {children}
    </nav>
  )
);
/**
 * ListElement
 * -------------
 * `<li>` with a default right margin, meant for horizontal lists.
 *
 * @param props.children React nodes inside the `<li>`.
 * @param props.style    Inline style overrides.
 * @returns A ref-forwarding `<li>`.
 */
export const ListElement = forRef<HTMLLIElement, BaseProps>(
  ({ children, style, ...rest }, ref) => (
    <li ref={ref} style={{ marginRight: "1rem", ...style }} {...rest}>
      {children}
    </li>
  )
);

/**
 * Text
 * ------
 * Span wrapper for inline text with ref forwarding.
 *
 * @param props.children Inline content.
 * @param props.style    Inline style overrides.
 * @returns A ref-forwarding `<span>`.
 */
export const AnchoredText = forRef<HTMLSpanElement, LinkProps>(
  ({ children, style, link, ...rest }, ref) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ position: "relative", pointerEvents: "auto" }}
      {...rest}
    >
      <span
        ref={ref}
        style={{
          fontSize: cssNumbers.layout.subtitleFontSize,
          color: "black",
          display: "inline",
          ...style,
        }}
      >
        {children}
      </span>
    </a>
  )
);

/**
 * Text
 * ------
 * Span wrapper for inline text with ref forwarding.
 *
 * @param props.children Inline content.
 * @param props.style    Inline style overrides.
 * @returns A ref-forwarding `<span>`.
 */
export const Text = forRef<HTMLSpanElement, BaseProps>(
  ({ children, style, ...rest }, ref) => (
    <span
      ref={ref}
      {...rest}
      style={{
        fontSize: cssNumbers.layout.subtitleFontSize,
        color: "black",
        display: "inline",
        ...style,
      }}
    >
      {children}
    </span>
  )
);

/**
 * UlContainer
 * --------------
 * Horizontal flex UL reset (no bullets, no margins).
 *
 * @param props.children `<li>` children (or anything really).
 * @param props.style    Inline style overrides.
 * @returns A ref-forwarding `<ul>`.
 *
 * @example
 * ```tsx
 * <UlContainer>
 *   <ListElement>One</ListElement>
 *   <ListElement>Two</ListElement>
 * </UlContainer>
 * ```
 */
export const UlContainer = forRef<HTMLUListElement, BaseProps>(
  ({ children, style, ...rest }, ref) => (
    <ul
      ref={ref}
      style={{
        display: "flex",
        listStyle: "none",
        margin: 0,
        padding: 0,
        ...style,
      }}
      {...rest}
    >
      {children}
    </ul>
  )
);

/**
 * A React component that renders a `<div>` element with customizable padding.
 *
 * @template HTMLDivElement - The type of the HTML element being referenced.
 * @template PaddingProps - The props type for the Padding component.
 *
 * @param {PaddingProps} props - The properties passed to the component.
 * @param {string | number} props.size - The padding size to apply to the `<div>`.
 * Can be a string (e.g., "10px") or a number (e.g., 10).
 * @param {string} [props.className] - Optional CSS class name(s) to apply to the `<div>`.
 * @param {React.CSSProperties} [props.style] - Optional inline styles to apply to the `<div>`.
 * @param {React.Ref<HTMLDivElement>} ref - A ref object for the `<div>` element.
 *
 * @returns {JSX.Element} A `<div>` element with the specified padding, class name, and styles.
 */
export const Padding = forRef<HTMLDivElement, PaddingProps>(
  ({ size, className, style }, ref) => (
    <div ref={ref} className={className} style={{ padding: size, ...style }} />
  )
);

Padding.displayName = "Padding";
