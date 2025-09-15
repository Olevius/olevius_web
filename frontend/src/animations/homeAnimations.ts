// animations/homeAnimations.ts
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { cssNumbers } from "../theme/theme";
import { teamTextMap } from "../text-maps/teamMap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const runIntroTimeline = () => {
  return new Promise((resolve) => {
    const tl = gsap.timeline({ onComplete: resolve });

    tl.fromTo(
      ".title-header",
      { x: "var(--animation-titleStartX)" },
      {
        x: 0,
        duration: cssNumbers.animation.introDuration,
        ease: "power1.out",
      }
    )
      .fromTo(
        ".nav-bar",
        { y: "var(--animation-navStartY)" },
        {
          y: 0,
          duration: cssNumbers.animation.introDuration,
          ease: "power1.out",
        },
        `-=${cssNumbers.animation.introDuration}`
      )
      .fromTo(
        ".subtitle-header",
        { y: "var(--animation-navStartY)", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
        }
      );
  });
};

export const runHeaderScrollTimeline = () => {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end: `+=${"var(--animation-scrollEnd)"}`,
        pin: true,
        scrub: cssNumbers.animation.scrubDuration,
      },
    })
    .add("syncPoint")
    .to(
      ".title-header",
      {
        fontSize: cssNumbers.layout.scrubFontSize,
        scale: +"var(--animation-scrubScale)",
        color: "white",
        opacity: 0,
        ease: "power1.in",
      },
      "syncPoint"
    )
    .to(
      ".subtitle-header",
      {
        color: "white",
        duration: cssNumbers.animation.colorChangeDuration,
        ease: "power1.out",
      },
      "sync-point"
    )
    .to(
      ".header",
      {
        backgroundColor: "white",
        ease: "power1.in",
      },
      "syncPoint"
    )
    .to(".body-title-box", {
      backgroundColor: "white",
      ease: "power1.in",
    })
    .to(".body", {
      backgroundColor: "white",
      ease: "power1.in",
    });
};

export const runTransitionTextScroll = () => {
  const split = SplitText.create(".body-text", {
    type: "chars, words, lines",
    charsClass: "char",
  });

  return gsap
    .timeline({
      scrollTrigger: {
        trigger: ".body-title-box",
        start: "center center",
        end: `+=${"var(--animation-overlapEnd)"}`,
        pin: true,
        scrub: cssNumbers.animation.scrubDuration,
      },
    })
    .from(split.words, {
      y: "var(--animation-wordStart)",
      autoAlpha: 0,
      duration: cssNumbers.animation.bodyHeaderDuration,
      stagger: cssNumbers.animation.wordStagger,
      ease: "power1.out",
    });
};

export const createSplitScroll = (
  selector: string,
  offset: number,
) => {
  const split = SplitText.create(selector, {
    type: "chars, words, lines",
    charsClass: "char",
  });

  gsap.from(split.chars, {
    x: "var(--animation-wordStart)",
    autoAlpha: 0,
    stagger: cssNumbers.animation.charStagger,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".body",
      start: offset ? `top center-=${offset}` : "top center",
      end: `+=${cssNumbers.animation.sectionScrollSpan}`,
      scrub: 2,
    },
  });
};

export const runBodyScroll = () => {
  const sections = [
    { title: ".why-title", content: ".why-content", offset: 0 },
    {
      title: ".how-title",
      content: ".how-content",
      offset: cssNumbers.layout.bodySectionOffsetHow,
    },
    {
      title: ".what-title",
      content: ".what-content",
      offset: cssNumbers.layout.bodySectionOffsetWhat,
    },
  ];

  sections.forEach(({ title, content, offset }) => {
    createSplitScroll(title, offset);
    createSplitScroll(content, offset);
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
        ease: "power1.out",
      },
      "sync-point"
    )
    .from(
      ".about-title",
      {
        y: "30dvh",
        ease: "power1.out",
      },
      "sync-point"
    );
};

export const runTeamScroll = () => {
  const A = cssNumbers.animation;

  const tl = gsap.timeline({
    defaults: { ease: "none" },
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
      { opacity: A.imagesOpacity, duration: A.imagesFadeDuration, ease: "power1.out" },
      `start+=${A.imagesFadeOffset}`
    )
    .add("sync-point", `+=${A.syncPointOffset}`)
    .to(
      ".team-title",
      { autoAlpha: 0, duration: A.titleFadeDuration, ease: "power1.in" },
      "sync-point"
    )
    .add("bios", `>-=${A.biosOverlapBack}`);

  tl.fromTo(
    ".team-shared-text-box",
    { xPercent: +"var(--animation-teamEnterXPercent)", autoAlpha: 0 },
    {
      xPercent: 0,
      autoAlpha: 1,
      duration: +"var(--animation-teamEnterDuration)",
      ease: "none",
      stagger: {
        each: +"var(--animation-teamStaggerEach)",
        from: A.teamStaggerFrom,
        amount: +"var(--animation-teamStaggerAmount)",
        grid: "auto",
      },
    },
    `bios+=${A.biosDelay}`
  );

  window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });

  return tl;
};
