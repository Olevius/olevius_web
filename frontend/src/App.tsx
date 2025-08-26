import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to); // replaces history entry
  }, [to]);
  return null;
}

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* external link */}
        <Route
          path="/aboutPage"
          element={
            <ExternalRedirect to="https://www.linkedin.com/company/olevius/posts/?feedView=all" />
          }
        />

        {/* Outlook compose example (add params as needed) */}
        <Route
          path="/contactPage"
          element={
            <ExternalRedirect
              to={
                "https://outlook.office.com/mail/deeplink/compose?" +
                new URLSearchParams({
                  to: "j29mak@uwaterloo.ca",
                  subject: "Olevius inquiry",
                  body: "Hey team,%0A%0A",
                }).toString()
              }
            />
          }
        />
      </Routes>

      {/* Load analytics (optionally gate by PROD) */}
      <Analytics />
    </Router>
  );
};
