// ThemeVars.tsx
import { useLayoutEffect } from "react";
import { cssNumbers } from "./theme";

function setVars(obj: any, path: string[] = []) {
  Object.entries(obj).forEach(([k, v]) => {
    if (v && typeof v === "object")
      setVars(v, [...path, k]); // recursively goes into each property
    else
      document.documentElement.style.setProperty(
        `--${[...path, k].join("-")}`, // makes this accessible in css
        String(v)
      );
  });
}

export function ThemeVars() {
  useLayoutEffect(() => {
    setVars(cssNumbers);
  }, []);
  return null;
}
