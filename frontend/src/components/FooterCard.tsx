import { AnchoredText, Layout, Text } from "./basics/defaults";
import type { AboutCardProps } from "./basics/AboutConfigTypes";
import { forRef } from "./basics/refHelper";

export const FooterCard = forRef<HTMLDivElement, AboutCardProps>(
  ({ classNameTitle, classNameContent, style, value, ...rest }, ref) => (
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
          fontFamily: "Satoshi",
          marginBottom: "0.5dvh",
        }}
      >
        {value?.title}
      </Text>
      {value?.content.map((value) => (
        <AnchoredText
          link={value.link}
          className={classNameContent}
          style={{
            fontFamily: "Satoshi",
            marginTop: "0.5dvh",
          }}
        >
          {value?.text}
        </AnchoredText>
      ))}
    </Layout>
  )
);
