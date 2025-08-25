import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { useEffect } from "react";

function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to); // no back button loop
  }, [to]);
  return null;
}

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* this route goes to an external link */}
        <Route
          path="/aboutPage"
          element={
            <ExternalRedirect to="https://www.linkedin.com/company/olevius/posts/?feedView=all" />
          }
        />
        {/* mailto example */}
        <Route
          path="/contactPage"
          element={
            <ExternalRedirect to="https://outlook.office.com/mail/deeplink/compose?" />
          }
        />
      </Routes>
    </Router>
  );
};
