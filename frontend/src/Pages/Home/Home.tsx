import "../../App.css";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { Layout } from "../../components/basics/defaults";

import { cssNumbers } from "../../theme/theme";

import {
  runIntroTimeline,
  runHeaderScrollTimeline,
  runTransitionTextScroll,
  runUpdProblemScroll,
  runUpdStatementScroll,
  runTeamTransitionScroll,
  runUpdTeamScroll,
} from "../../animations/homeAnimations";
import { useEffect, useRef } from "react";
import { TeamTransition } from "./TeamTransition";
import { Footer } from "./Footer";
import { Transition } from "./Transition";
import { UpdSummary } from "./updatedFigma/UpdSummary";
import { UpdProblem } from "./updatedFigma/UpdProblem";
import { UpdStatement } from "./updatedFigma/UpdStatement";
import { UpdPortable } from "./updatedFigma/UpdPortable";
import { UpdBody } from "./updatedFigma/UpdBody";
import { UpdPeople } from "./updatedFigma/UpdPeople";
import { UpdTeam } from "./updatedFigma/UpdTeam";
import { UpdFooter } from "./updatedFigma/UpdFooter";

export const Home = () => {
  const container = useRef(null);

  // const imagePathList: ImageMapProps = {
  //   levi: {
  //     src: leviImg,
  //   },
  //   jp: {
  //     src: jpImg,
  //   },
  //   matthew: {
  //     src: matthewImg,
  //   },
  //   andrew: {
  //     src: andrewImg,
  //   },
  // };

  useEffect(() => {
    document.documentElement.classList.add("cursor-hidden");
    return () => document.documentElement.classList.remove("cursor-hidden");
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (typeof document !== "undefined" && "fonts" in document) {
        await (document.fonts as FontFaceSet).ready;
      }
      if (cancelled) return;
      // run SplitText/ScrollTrigger timelines here AFTER fonts are ready
      runIntroTimeline(cssNumbers);
      runHeaderScrollTimeline(cssNumbers);
      runTransitionTextScroll(cssNumbers);
      runUpdProblemScroll(cssNumbers);
      runUpdStatementScroll(cssNumbers);
      runTeamTransitionScroll(cssNumbers);
      runUpdTeamScroll(cssNumbers);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Layout
      ref={container}
      style={{ overflow: "hidden", border: cssNumbers.testing.border }}
    >
      <NavBar className="nav-bar" />
      <Header className="header" />
      <Transition className="transition-title-box" />
      <UpdSummary className="upd-summary" style={{ zIndex: 1 }} />
      <UpdProblem className="upd-problem" style={{ zIndex: 2 }} />
      <Layout style={{ height: "100vh", backgroundColor: "white" }} />
      <UpdStatement className="upd-statement" style={{ zIndex: 3 }} />
      <UpdPortable className="upd-portable" />
      <UpdBody className="upd-body" />
      <UpdPeople className="upd-people" />
      <TeamTransition className="team"></TeamTransition>
      <UpdTeam className="upd-team" />
      <UpdFooter className="upd-footer" />
    </Layout>
  );
};
