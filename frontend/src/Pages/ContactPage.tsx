import { useRef } from "react";
import { Layout } from "../components/basics/defaults";
import { NavBar } from "./Home/NavBar";
import { customColors } from "../theme/colors";

export const ContactPage = () => {
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
