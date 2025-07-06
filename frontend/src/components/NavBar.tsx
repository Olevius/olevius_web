import { Nav, ListElement, Link, UlContainer, forRef } from "./basics/defaults";
import type { BaseProps } from "./basics/defaultTypes";

export const NavBar = forRef<HTMLSpanElement, BaseProps>((ref) => {
    return (
        <Nav ref={ref}>
            <UlContainer>
                <ListElement>
                    <Link link="/">Home</Link>
                </ListElement>
                <ListElement>
                    <Link link="/about">About</Link>
                </ListElement>
                <ListElement>
                    <Link link="/contact">Contact</Link>
                </ListElement>
            </UlContainer>
        </Nav>
    );
});
