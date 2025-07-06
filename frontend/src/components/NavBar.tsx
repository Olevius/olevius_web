import React from "react";
import { Nav, ListElement, Link, UlContainer } from "./basics/defaults";
import type { BaseProps } from "./basics/defaultTypes";

export const NavBar = React.forwardRef<
    HTMLSpanElement,
    BaseProps & { style?: React.CSSProperties }
>(({ children, style, className, ...rest }, ref) => {
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
