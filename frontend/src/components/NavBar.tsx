import React from "react";
import { Nav, ListElement, Link } from "./basics/defaults";

const UlContainer: React.FC<React.PropsWithChildren> = ({ children }) => (
    <ul
        style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
        }}
    >
        {children}
    </ul>
);

const NavBar: React.FC = () => {
    return (
        <Nav>
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
};

export default NavBar;
