import { cssNumbers } from "../theme/theme";
import { Layout, Text } from "./basics/defaults";
import type { TextBoxProps } from "./basics/defaultTypes";
import { forRef } from "./basics/refHelper";

export const TextBox = forRef<HTMLDivElement, TextBoxProps>(
  ({ classNameTitle, classNameContent, style, key, value, ...rest }, ref) => (
    <Layout
      key={key}
      ref={ref}
      {...rest}
      style={{
        overflow: "hidden",
        backgroundColor: "white",
        display: "flex",
        marginBottom: cssNumbers.layout.marginBottomXs,
        width: "70vw", // Changed from maxWidth: "80vw" to width: "80%"
        wordWrap: "break-word",
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
        }}
      >
        {value ? value.content : undefined}
      </Text>
    </Layout>
  )
);
