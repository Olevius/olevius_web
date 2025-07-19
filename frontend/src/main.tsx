import { createRoot } from "react-dom/client";
import "./index.css";
import "common/styles/fonts.css";
import { App } from "./App.tsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
