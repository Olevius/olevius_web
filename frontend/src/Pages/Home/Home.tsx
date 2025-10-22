import "../../App.css";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { Layout } from "../../components/basics/defaults";

import { cssNumbers } from "../../theme/theme";

import {
  runIntroTimeline,
  runHeaderScrollTimeline,
  runTransitionTextScroll,
  runBodyScroll,
  runAboutScroll,
  runTeamTextScroll,
  runTeamTransitionScroll,
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
      runBodyScroll(cssNumbers);
      runAboutScroll(cssNumbers);
      runTeamTransitionScroll(cssNumbers);
      runTeamTextScroll(cssNumbers);
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
      <UpdSummary className="upd-summary" />
      <UpdProblem className="upd-problem" />
      <UpdStatement className="upd-statement" />
      <UpdPortable className="upd-portable" />
      <UpdBody className="upd-body" />
      <UpdPeople className="upd-people" />
      <TeamTransition className="team"></TeamTransition>
      <UpdTeam className="upd-team" />
      <Footer className="footer" />
    </Layout>
  );
};
