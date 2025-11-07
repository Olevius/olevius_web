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
  runUpdStatementScrollFade,
  runUpdPortableScroll,
  runFooterScroll,
  runUpdPeopleScroll,
  runUpdPeople2Scroll,
  runIssueTextScroll,
  runUpdSummaryScroll,
} from "../../animations/homeAnimations";
import { useEffect, useRef } from "react";
import { TeamTransition } from "./TeamTransition";
import { Transition } from "./Transition";
import { UpdSummary } from "./updatedFigma/UpdSummary";
import { UpdProblem } from "./updatedFigma/UpdProblem";
import { UpdStatement } from "./updatedFigma/UpdStatement";
import { UpdPortable } from "./updatedFigma/UpdPortable";
import { UpdBody } from "./updatedFigma/UpdBody";
import { UpdPeople } from "./updatedFigma/UpdPeople";
import { UpdTeam } from "./updatedFigma/UpdTeam";
import { UpdFooter } from "./updatedFigma/UpdFooter";
import { UpdPeople2 } from "./updatedFigma/UpdPeople2";
import { UpdIssue } from "./updatedFigma/UpdIssue";

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

      // Run all animation timelines
      runIntroTimeline(cssNumbers);
      runHeaderScrollTimeline(cssNumbers);
      runIssueTextScroll(cssNumbers);
      runUpdSummaryScroll(cssNumbers);
      runUpdProblemScroll(cssNumbers);
      runUpdPortableScroll(cssNumbers);
      runTransitionTextScroll(cssNumbers);
      runTeamTransitionScroll(cssNumbers);
      runUpdPeopleScroll(cssNumbers);
      runUpdPeople2Scroll(cssNumbers);
      runFooterScroll(cssNumbers);

      // Global refresh after all animations are initialized
      ScrollTrigger.refresh();
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
      <Layout style={{ backgroundColor: "white" }}>
        <UpdIssue className="upd-issue" style={{ zIndex: 2 }} />
        <UpdSummary className="upd-summary" style={{ zIndex: 1 }} />
      </Layout>
      <Layout style={{ height: "50vh", backgroundColor: "white" }} />
      <UpdProblem className="upd-problem" style={{ zIndex: 2 }} />
      <UpdStatement className="upd-statement" style={{ zIndex: 1 }} />
      <UpdPortable className="upd-portable" style={{ zIndex: 4 }} />
      <Layout style={{ backgroundColor: "white" }}>
        <Transition className="transition-title-box" style={{ zIndex: 6 }} />
        <UpdBody className="upd-body" style={{ zIndex: 5 }} />
      </Layout>
      <UpdPeople className="upd-people" style={{ zIndex: 6 }} />
      <UpdPeople2 className="upd-people2" style={{ zIndex: 6 }} />
      <Layout style={{ backgroundColor: "white" }}>
        <TeamTransition
          className="team"
          style={{ zIndex: 8, borderBottom: "1px solid black" }}
        />
        <UpdTeam className="upd-team" style={{ zIndex: 7 }} />
      </Layout>
      <UpdFooter className="upd-footer" style={{ zIndex: 9 }} />
    </Layout>
  );
};
