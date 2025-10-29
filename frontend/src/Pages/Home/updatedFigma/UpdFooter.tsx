import {
  AnchoredText,
  Layout,
  Text,
} from "../../../components/basics/defaults";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import { cssNumbers } from "../../../theme/theme";

export const UpdFooter = forRef<HTMLDivElement, Omit<BaseProps, "children">>(
  ({ style, className, ...rest }, ref) => (
    <Layout
      {...rest}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        padding: cssNumbers.layout.paddingSmall,
        alignItems: "center",
        border: "1px solid black",
        backgroundColor: "white",
        ...style,
      }}
      ref={ref}
    >
      <AnchoredText
        className="upd-footer-text"
        link=""
        style={{
          display: "inline-block",
          fontFamily: "Uber Move",
          zIndex: 1,
        }}
      >
        Contact Us
      </AnchoredText>
      <Layout
        style={{
          position: "absolute",
          bottom: 0,
          width: "85vw",
          backgroundColor: "white",
          zIndex: 2,
          height: "calc(50% - 3.5em)", // Cuts off at consistent point relative to text
          borderTop: "1px solid black",
        }}
      />
    </Layout>
  )
);
