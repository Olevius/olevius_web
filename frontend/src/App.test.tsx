import { render } from "@testing-library/react";
import { App } from "./App";
import { StrictMode } from "react";
import { describe, it } from "vitest";

describe("Front page tests", () => {
    it("renders the front page", () => {
        const app = render(
            <StrictMode>
                <App />
            </StrictMode>
        );
        app.unmount();
    });
});
