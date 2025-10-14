// Footer.tsx
import { AnchoredImage, Layout, Text } from "../../components/basics/defaults";
import type { BaseProps } from "../../components/basics/defaultTypes";
import { forRef } from "../../components/basics/refHelper";
import { FooterCard } from "../../components/FooterCard";
import { footerTextMap } from "../../text-maps/footerTextMap";
import githubImg from "../../assets/logos/github.svg";
import linkedinImg from "../../assets/logos/linkedin.svg";

/**
 * A React functional component that renders a flexible `div` container for the Team page
 * with customizable styles and class names. Uses `forwardRef` to pass a ref to the underlying `div`.
 */
export const Footer = forRef<HTMLDivElement, BaseProps>(
  ({ children, style, className, ...rest }, ref) => (
    <div
      ref={ref}
      className={className}
      style={{
        background: "white",
        ...style,
      }}
      {...rest}
    >
      <Layout
        className="footer-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text className="footer-contact-us">Contact us</Text>
        <Layout className="footer-link-layout">
          {Object.entries(footerTextMap).map(([key, value]) => (
            <FooterCard
              classNameContent="footer-card-content"
              classNameTitle="footer-card-title"
              key={key}
              value={value}
            />
          ))}
        </Layout>
        <Layout
          className="footer-image-container"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <AnchoredImage
            className="footer-linkedin-icon"
            link="https://www.linkedin.com/company/olevius/posts/?feedView=all"
            src={linkedinImg}
          />
          <AnchoredImage
            className="footer-github-icon"
            link="https://github.com/Olevius"
            src={githubImg}
          />
        </Layout>
      </Layout>
    </div>
  )
);

Footer.displayName = "Footer";
