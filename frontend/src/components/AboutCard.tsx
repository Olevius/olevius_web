import { AnchoredText, Layout, Text } from "./basics/defaults";
import type { AboutCardProps } from "./basics/AboutConfigTypes";
import { forRef } from "./basics/refHelper";

export const AboutCard = forRef<HTMLDivElement, AboutCardProps>(
  ({ classNameTitle, style, value, $footerFontSize, ...rest }, ref) => (
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
        className={classNameTitle ? classNameTitle : "about-card-default-title"}
        style={{
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
          className={
            value.classNameContent
              ? value.classNameContent
              : "about-card-default-content"
          }
          style={{
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
