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
      className={className ? className : "text-box-default-layout"}
      {...rest}
      style={{
        overflow: "hidden",
        backgroundColor: "white",
        display: "flex",
        width: "70vw",
        flexDirection: "column",
        justifyContent: "flex-start",
        border: cssNumbers.testing.border,
        ...style,
      }}
    >
      <Text
        className={classNameTitle ? classNameTitle : "text-box-default-title"}
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
          classNameContent ? classNameContent : "text-box-default-content"
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
