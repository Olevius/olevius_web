// animations/homeAnimations.ts
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { cssNumbers } from "../theme/theme";
import type { CSSNumbers } from "../theme/themeTypes";
import { teamTextMap } from "../text-maps/teamMap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const runIntroTimeline = (numbers: CSSNumbers = cssNumbers) => {
  return new Promise((resolve) => {
    const tl = gsap.timeline({ onComplete: resolve });

    tl.fromTo(
      ".title-header",
      { x: numbers.animation.titleStartX.m }, // MediaQuery -> .m
      {
        x: 0,
        duration: numbers.animation.introDuration,
        ease: numbers.animation.eases.power1Out,
      }
    )
      .fromTo(
        ".nav-bar",
        { y: numbers.animation.navStartY.m }, // MediaQuery -> .m
        {
          y: 0,
          duration: numbers.animation.introDuration,
          ease: numbers.animation.eases.power1Out,
        },
        `-=${numbers.animation.introDuration}`
      )
      .fromTo(
        ".subtitle-header",
        { y: numbers.animation.navStartY.m, opacity: 0 }, // MediaQuery -> .m
        {
          y: 0,
          opacity: 1,
          ease: numbers.animation.eases.power2Out,
        }
      );
  });
};

export const runHeaderScrollTimeline = (numbers: CSSNumbers = cssNumbers) => {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end: `+=${numbers.animation.scrollEnd.m}`, // MediaQuery -> .m
        pin: true,
        scrub: numbers.animation.scrubDuration,
      },
    })
    .add("syncPoint")
    .to(
      ".title-header",
      {
        fontSize: numbers.layout.scrubFontSize,
        // MediaQuery -> .m (ensure number for GSAP scale)
        scale: +numbers.animation.scrubScale.m,
        color: "white",
        opacity: 0,
        ease: numbers.animation.eases.power1In,
      },
      "syncPoint"
    )
    .to(
      ".subtitle-header",
      {
        color: "white",
        duration: numbers.animation.colorChangeDuration,
        ease: numbers.animation.eases.power1Out,
      },
      "sync-point"
    )
    .to(
      ".header",
      {
        backgroundColor: "white",
        ease: numbers.animation.eases.power1In,
      },
      "syncPoint"
    )
    .to(".body-title-box", {
      backgroundColor: "white",
      ease: numbers.animation.eases.power1In,
    })
    .to(".body", {
      backgroundColor: "white",
      ease: numbers.animation.eases.power1In,
    });
};

export const runTransitionTextScroll = (numbers: CSSNumbers = cssNumbers) => {
  const split = SplitText.create(".body-text", {
    type: "chars, words, lines",
    charsClass: "char",
  });

  return gsap
    .timeline({
      scrollTrigger: {
        trigger: ".body-title-box",
        start: "center center",
        end: `+=${numbers.animation.overlapEnd.m}`, // MediaQuery -> .m
        pin: true,
        scrub: numbers.animation.scrubDuration,
      },
    })
    .from(split.words, {
      y: numbers.animation.wordStart.m, // MediaQuery -> .m
      autoAlpha: 0,
      duration: numbers.animation.bodyHeaderDuration,
      stagger: numbers.animation.wordStagger,
    });
};

export const createSplitScroll = (
  selector: string,
  offset: number,
  numbers: CSSNumbers = cssNumbers
) => {
  const split = SplitText.create(selector, {
    type: "chars, words, lines",
    charsClass: "char",
  });

  gsap.from(split.chars, {
    x: numbers.animation.wordStart.m, // MediaQuery -> .m
    autoAlpha: 0,
    stagger: numbers.animation.charStagger,
    scrollTrigger: {
      trigger: ".body",
      start: offset ? `top center-=${offset}` : "top center",
      end: `+=${numbers.animation.sectionScrollSpan}`,
      scrub: 2,
    },
  });
};

export const runBodyScroll = (numbers: CSSNumbers = cssNumbers) => {
  const sections = [
    { title: ".why-title", content: ".why-content", offset: 0 },
    {
      title: ".how-title",
      content: ".how-content",
      offset: numbers.layout.bodySectionOffsetHow,
    },
    {
      title: ".what-title",
      content: ".what-content",
      offset: numbers.layout.bodySectionOffsetWhat,
    },
  ];

  sections.forEach(({ title, content, offset }) => {
    createSplitScroll(title, offset, numbers);
    createSplitScroll(content, offset, numbers);
  });
};

export const runAboutScroll = () => {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: `bottom top`,
        scrub: true,
      },
    })
    .add("sync-point")
    .from(
      ".about-content",
      {
        y: "30dvh",
      },
      "sync-point"
    )
    .from(
      ".about-title",
      {
        y: "30dvh",
      },
      "sync-point"
    );
};

export const runTeamScroll = (numbers: CSSNumbers = cssNumbers) => {
  const A = numbers.animation;

  const tl = gsap.timeline({
    defaults: { ease: A.eases.none ?? "none" },
    scrollTrigger: {
      trigger: ".team",
      start: "top top",
      end: () => {
        const el = document.querySelector(
          ".image-wrapper"
        ) as HTMLElement | null;
        const h = el?.getBoundingClientRect().height ?? 0;
        return "+=" + h * A.endMultiplier;
      },
      pin: true,
      pinSpacing: false,
      scrub: A.scrub,
      invalidateOnRefresh: true,
    },
  });

  tl.add("start")
    .to(".scroll-rect1", { y: 0, duration: A.scrollRectDuration }, "start")
    .to(
      ".images",
      { opacity: A.imagesOpacity, duration: A.imagesFadeDuration },
      `start+=${A.imagesFadeOffset}`
    )
    .add("sync-point", `+=${A.syncPointOffset}`)
    .to(
      ".team-title",
      { autoAlpha: 0, duration: A.titleFadeDuration },
      "sync-point"
    )
    .add("bios", `>-=${A.biosOverlapBack}`);

  const teamEls = gsap.utils.toArray<HTMLElement>(
    Object.values(teamTextMap)
      .map((v) => `.${v.className}`)
      .join(", ")
  );

  tl.fromTo(
    teamEls,
    { xPercent: +A.teamEnterXPercent.m, autoAlpha: 0 }, // MediaQuery -> .m (number)
    {
      xPercent: 0,
      autoAlpha: 1,
      duration: +A.teamEnterDuration.m, // MediaQuery -> .m (number)
      ease: A.eases.none ?? "none",
      stagger: {
        each: +A.teamStaggerEach.m, // MediaQuery -> .m (number)
        from: A.teamStaggerFrom,
        amount: +A.teamStaggerAmount.m, // MediaQuery -> .m (number)
        grid: "auto",
      },
    },
    `bios+=${A.biosDelay}`
  );

  window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });

  return tl;
};
