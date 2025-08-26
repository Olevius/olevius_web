import { useRef } from "react";
import { Layout } from "../components/basics/defaults";
import { NavBar } from "../components/NavBar";
import { customColors } from "../theme/colors";

export const AboutPage = () => {
  const container = useRef(null);

  return (
    <Layout ref={container} style={{ overflow: "hidden" }}>
      <NavBar
        className="nav-bar"
        style={{
          backgroundColor: customColors.highlight,
        }}
      />
    </Layout>
  );
};
