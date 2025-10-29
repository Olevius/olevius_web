import { Layout, Text } from "../../../components/basics/defaults";
import type { TeamBoxProps } from "../../../components/basics/defaultTypes";
import { forRef } from "../../../components/basics/refHelper";
import { UpdButton } from "./UpdButton";
import { UpdLine } from "./UpdLine";
import { useState } from "react";

export const UpdTeamBox = forRef<HTMLDivElement, TeamBoxProps>(
  ({ style, children, title, bottomLine, className, ...rest }, ref) => {
    const [isRotated, setIsRotated] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const getTransform = () => {
      if (isRotated) {
        return isHovered ? "scale(1.5) rotate(45deg)" : "rotate(45deg)";
      }
      return isHovered ? "scale(1.5)" : "scale(1)";
    };

    const handleClick = () => {
      setIsExpanded(!isExpanded);
      setIsRotated(!isRotated);
    };

    return (
      <>
        <Layout
          className={className}
          ref={ref}
          {...rest}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3vh",
            ...style,
          }}
        >
          <UpdLine
            className={
              bottomLine ? undefined : "upd-team-box-disable-bottom-line"
            }
          />

          <Layout
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingLeft: "10rem",
              paddingRight: "10rem",
            }}
          >
            <Text
              style={{
                fontFamily: "satoshi",
                fontWeight: "lighter",
                fontSize: "3.125rem",
              }}
            >
              {title}
            </Text>
            <UpdButton
              onClick={handleClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                fontFamily: "satoshi",
                fontWeight: "lighter",
                fontSize: "3.125rem",
                background: "transparent",
                transform: getTransform(),
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
            >
              +
            </UpdButton>
          </Layout>

          <UpdLine />

          {/* Expandable content - NOW UNDERNEATH the bottom line */}
        </Layout>
        <Layout
          style={{
            maxHeight: isExpanded ? "500px" : "0",
            overflow: "hidden",
            textAlign: "left",
            transition: "max-height 1s ease-out",
          }}
        >
          <Layout
            style={{
              marginTop: "5vh",
              paddingLeft: "13rem",
              paddingRight: "13rem",
              marginBottom: "0.5rem",
            }}
          >
            <Text
              style={{
                fontFamily: "satoshi",
                fontSize: "1.5rem",
              }}
            >
              {children}
            </Text>
          </Layout>
        </Layout>
      </>
    );
  }
);
