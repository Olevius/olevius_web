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
import { Team } from "./Team";
import { Footer } from "./Footer";
import { Transition } from "./Transition";

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
      <Team className="team"></Team>
      <Footer className="footer" />
    </Layout>
  );
};
