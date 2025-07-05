import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "common/styles/fonts.css";
import { NavBar } from "./components/NavBar.tsx";
import { Header } from "./components/Header.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <NavBar />
        <Header children={undefined} />
    </StrictMode>
);
