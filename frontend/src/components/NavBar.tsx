import { Nav, ListElement, Link, UlContainer, forRef } from "./basics/defaults";
import type { BaseProps } from "./basics/defaultTypes";

// This is a navigation bar component
export const NavBar = forRef<HTMLSpanElement, BaseProps>((props, ref) => {
    // These are the links for the navigation bar
    const navLinks = {
        "/": "Home",
        "/about": "About",
        "/contact": "Contact",
    };

    // Render the navigation bar
    return (
        <Nav ref={ref} {...props}>
            <UlContainer>
                {/* Go through each link and show it */}
                {Object.entries(navLinks).map(([path, name]) => (
                    <ListElement key={path}>
                        <Link link={path}>{name}</Link>
                    </ListElement>
                ))}
            </UlContainer>
        </Nav>
    );
});
