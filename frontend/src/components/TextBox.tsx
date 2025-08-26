import { cssNumbers } from "../theme/theme";
import { Layout, Text } from "./basics/defaults";
import type { TextBoxProps } from "./basics/TextBoxConfigTypes";
import { forRef } from "./basics/refHelper";

export const TextBox = forRef<HTMLDivElement, TextBoxProps>(
  (
    {
      classNameTitle,
      classNameContent,
      className,
      style,
      key,
      value,
      styleTitle,
      styleContent,
      ...rest
    },
    ref
  ) => (
    <Layout
      key={key}
      ref={ref}
      className={className}
      {...rest}
      style={{
        overflow: "hidden",
        backgroundColor: "white",
        display: "flex",
        marginBottom: cssNumbers.layout.marginBottomXs,
        width: "70vw",
        marginRight: cssNumbers.layout.marginSmallRight,
        flexDirection: "column",
        justifyContent: "flex-start",
        border: cssNumbers.testing.border,
        ...style,
      }}
    >
      <Text
        className={classNameTitle}
        style={{
          textAlign: "left",
          fontSize: cssNumbers.layout.mediumFontSize,
          fontFamily: "Satoshi",
          color: "black",
          border: cssNumbers.testing.border,
          ...styleTitle,
        }}
      >
        {value ? value.title : undefined}
      </Text>
      <Text
        className={classNameContent}
        style={{
          fontSize: cssNumbers.layout.bodyFontSize,
          color: "black",
          textAlign: "left",
          border: cssNumbers.testing.border,
          minWidth: 0,
          wordWrap: "normal",
          ...styleContent,
        }}
      >
        {value ? value.content : undefined}
      </Text>
    </Layout>
  )
);
