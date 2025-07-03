import { Nav, ListElement, Link, UlContainer } from "./basics/defaults";

const NavBar = () => {
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
