import { Nav, ListElement, UlContainer } from "./basics/defaults";
import type { BaseProps } from "./basics/defaultTypes";
import { forRef } from "./basics/refHelper";
import { Link } from "react-router-dom";

// This is a navigation bar component
/**
 * NavBar component renders a navigation bar with links to different pages.
 *
 * @template HTMLSpanElement - The type of the ref forwarded to the Nav component.
 * @param props - The base properties passed to the Nav component.
 * @param ref - A forwarded ref to the Nav component.
 *
 * The navigation bar includes links to the following pages:
 * - Home: "/"
 * - About: "/about"
 * - Contact: "/contact"
 *
 * Each link is styled with black text color and rendered within a list element.
 *
 * @returns A JSX element representing the navigation bar.
 */
export const NavBar = forRef<HTMLSpanElement, BaseProps>((props, ref) => {
  // These are the links for the navigation bar
  const navLinks = {
    "/": "Home",
    "/aboutPage": "About",
    "/contactPage": "Contact",
  };

  // Render the navigation bar
  return (
    <Nav ref={ref} {...props}>
      <UlContainer>
        {/* Go through each link and show it */}
        {Object.entries(navLinks).map(([path, name]) => (
          <ListElement key={path}>
            <Link to={path} style={{ color: "black" }}>
              {name}
            </Link>
          </ListElement>
        ))}
      </UlContainer>
    </Nav>
  );
});
