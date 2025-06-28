import React from "react";

const NavBar: React.FC = () => {
    return (
        <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
            <ul
                style={{
                    display: "flex",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                }}
            >
                <li style={{ marginRight: "1rem" }}>
                    <a
                        href="/"
                        style={{ color: "#fff", textDecoration: "none" }}
                    >
                        Home
                    </a>
                </li>
                <li style={{ marginRight: "1rem" }}>
                    <a
                        href="/about"
                        style={{ color: "#fff", textDecoration: "none" }}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="/contact"
                        style={{ color: "#fff", textDecoration: "none" }}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
