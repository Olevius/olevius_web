import { cssNumbers } from "../theme/theme";
import { AnchoredText, Layout, Text } from "./basics/defaults";
import type { AboutCardProps } from "./basics/AboutConfigTypes";
import { forRef } from "./basics/refHelper";

export const AboutCard = forRef<HTMLDivElement, AboutCardProps>(
  ({ classNameTitle, className, style, value, ...rest }, ref) => (
    <Layout
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5dvh",
        ...style,
      }}
      ref={ref}
      {...rest}
    >
      <Text
        className={classNameTitle}
        style={{
          fontSize: cssNumbers.layout.footerFontSize,
          fontFamily: "Satoshi",
          marginBottom: "0.5dvh",
        }}
      >
        {value?.title}
      </Text>
      {value?.content.map((value, i) => (
        <AnchoredText
          link={value.link}
          key={i}
          className={className}
          style={{
            fontSize: cssNumbers.layout.footerFontSize,
            fontFamily: "Satoshi",
            marginTop: "0.5dvh",
          }}
        >
          {value.text}
        </AnchoredText>
      ))}
    </Layout>
  )
);
