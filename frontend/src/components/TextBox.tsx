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
      value,
      styleTitle,
      styleContent,
      ...rest
    },
    ref
  ) => (
    <Layout
      ref={ref}
      className={className ? className : "default-text-box-layout"}
      {...rest}
      style={{
        overflow: "hidden",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        border: cssNumbers.testing.border,
        ...style,
      }}
    >
      <Text
        className={classNameTitle ? classNameTitle : "default-text-box-title"}
        style={{
          textAlign: "left",
          fontFamily: "Satoshi",
          color: "black",
          border: cssNumbers.testing.border,
          ...styleTitle,
        }}
      >
        {value ? value.title : undefined}
      </Text>
      <Text
        className={
          classNameContent ? classNameContent : "default-text-box-content"
        }
        style={{
          color: "black",
          textAlign: "left",
          border: cssNumbers.testing.border,
          minWidth: 0,
          ...styleContent,
        }}
      >
        {value ? value.content : undefined}
      </Text>
    </Layout>
  )
);
