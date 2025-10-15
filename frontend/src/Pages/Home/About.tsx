import React from "react";
import type { BaseProps } from "../../components/basics/defaultTypes";
import { Layout, Text } from "../../components/basics/defaults";
import { cssNumbers } from "../../theme/theme";

/**
 * A React functional component that renders a flexible `div` container for the About page
 * with customizable styles and class names.
 * This component uses `React.forwardRef` to pass a `ref` to the underlying `div` element.
 *
 * @param {BaseProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the `div`.
 * @param {React.CSSProperties} [props.style] - Optional inline styles to apply to the `div`.
 * @param {string} [props.className] - Optional class name(s) to apply to the `div`.
 * @param {HTMLDivElement} ref - A forwarded ref to the `div` element.
 * @returns {JSX.Element} A `div` element with the specified styles, class names, and children.
 */
export const About = React.forwardRef<
  HTMLDivElement,
  Omit<BaseProps, "children">
>(({ style, className, ...rest }, ref) => (
  <div
    ref={ref}
    className={className}
    style={{
      overflow: "hidden",
      border: cssNumbers.testing.border,
      backgroundImage:
        "linear-gradient(135deg, #D1F2D5 0%, #A2E5C1 50%, #7AD7C4 100%)",
      backgroundColor: "transparent",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "row",
      ...style,
    }}
    {...rest}
  >
    <Layout
      className="about-container"
      style={{
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <Layout
        className="about-title-container"
        style={{
          display: "flex",
          border: cssNumbers.testing.border,
        }}
      >
        <Text
          data-speed={cssNumbers.layout.aboutTitleSpeed}
          className="about-title"
          style={{
            border: cssNumbers.testing.border,
          }}
        >
          About Olevius
        </Text>
      </Layout>

      <Layout
        className="about-content-container"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          border: cssNumbers.testing.border,
        }}
      >
        <Text
          className="about-content"
          data-speed={cssNumbers.layout.aboutContentSpeed}
          style={{
            textAlign: "left",
            border: cssNumbers.testing.border,
          }}
        >
          Olevius is a wearable health-tech initiative focused on continuous,
          cuff-free blood pressure monitoring. Hypertension affects ~1.39
          billion people, yet current options force a trade-off: bulky,
          intermittent cuffs vs. smartwatch PTT methods that require frequent
          recalibration and lack clinical accuracy. <br /> <br />
          Our approach uses a compact optical-fiber sensor inside a fluid-filled
          PDMS pouch. Pulse pressure subtly changes light transmission at an
          air-core fiber union; those waveforms are processed on-device and with
          ML to estimate systolic and diastolic BP, targeting ±5 mmHg accuracy.
          <br /> <br />
          Designed for everyday wear, the band targets ≤7 mm thickness, ≤30 g
          weight, ≥24 h battery life, and secure Bluetooth/NFC syncing—while
          keeping unit cost under $100 to maximize accessibility.
        </Text>
      </Layout>
    </Layout>
  </div>
));

About.displayName = "About";
