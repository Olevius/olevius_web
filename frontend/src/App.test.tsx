import { describe, it, vi } from "vitest";
import { render } from "@testing-library/react";
import { Page } from "./Page";
import { StrictMode } from "react";

describe("Front page tests", () => {
    vi.resetAllMocks(); // resets test mocks after each test

    it("renders the front page", async () => {
        vi.useFakeTimers();
        const app = render(
            <StrictMode>
                <Page />
            </StrictMode>
        );
        await vi.runAllTimersAsync();
        app.unmount();
    });
});
