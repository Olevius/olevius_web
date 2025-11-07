import React from "react";
import { GridLayout, Text, Layout } from "../../../components/basics/defaults";
import type { BaseProps } from "../../../components/basics/defaultTypes";
import { cssNumbers } from "../../../theme/theme";

export const UpdIssue = React.forwardRef<HTMLDivElement, BaseProps>(
  ({ className, children, style, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          border: cssNumbers.testing.border,
          backgroundColor: "white",
          overflow: "hidden",
          borderBottom: "1px solid black",
          ...style,
        }}
        {...rest}
      >
        <Layout style={{ display: "flex", flexDirection: "column" }}>
          <GridLayout
            style={{
              border: cssNumbers.testing.border,
              zIndex: 2,
            }}
            className="upd-issue-container"
          >
            <Text
              className="upd-issue-text"
              style={{
                color: "black",
                border: cssNumbers.testing.border,
              }}
            >
              Our Vision
            </Text>{" "}
          </GridLayout>
          {/* <Layout className="image-container" style={{ display: "flex" }}>
               {Object.entries(imagePathList).map(([key, value]) => (
                 <Layout
                   className="image-wrapper"
                   style={{
                     display: "flex",
                     flexWrap: "wrap",
                     height: "auto",
                   }}
                   key={key}
                 >
                   <Image
                     id="view_img"
                     className="images"
                     style={{ pointerEvents: "none" }}
                     key={key}
                     src={value.src}
                   />
                 </Layout>
               ))}
             </Layout> */}
        </Layout>

        {/* <Layout
           className="scroll-rect1"
           style={{
             backgroundColor: "white",
             border: cssNumbers.testing.border,
             display: "flex",
             justifyContent: "flex-start",
             alignItems: "flex-start",
           }}
         > */}
        {children}
      </div>
    );
  }
);
