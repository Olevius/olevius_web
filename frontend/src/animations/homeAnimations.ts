// animations/homeAnimations.ts
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const runIntroTimeline = () => {
  return new Promise((resolve) => {
    const tl = gsap.timeline({ onComplete: resolve });

    tl.fromTo(
      ".title-header",
      { x: "46.875rem" }, // --animation-titleStartX
      {
        x: 0,
        duration: 1, // <-- replace with your intended introDuration if you had it in vars
        ease: "power1.out",
      }
    )
      .fromTo(
        ".nav-bar",
        { y: "-4.375rem" }, // --animation-navStartY
        {
          y: 0,
          duration: 1, // introDuration
          ease: "power1.out",
        },
        `-=1`
      )
      .fromTo(
        ".subtitle-header",
        { y: "-4.375rem", opacity: 0 }, // --animation-navStartY
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
        end: "+=1000", // --animation-scrollEnd
        pin: true,
        scrub: 2, // scrubDuration (not in your var list, left as is)
      },
    })
    .add("syncPoint")
    .to(
      ".title-header",
      {
        fontSize: "var(--layout-scrubFontSize)", // not in your list, left as CSS var
        scale: 10, // --animation-scrubScale
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
        duration: 1, // colorChangeDuration (not in your list)
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
        end: "+=1500", // --animation-overlapEnd
        pin: true,
        scrub: 2,
      },
    })
    .from(split.words, {
      y: 100, // --animation-wordStart
      autoAlpha: 0,
      duration: 1, // bodyHeaderDuration (not in list)
      stagger: 0.1, // wordStagger (not in list)
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
    x: 100, // --animation-wordStart
    autoAlpha: 0,
    stagger: 0.05, // charStagger (not in list)
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".body",
      start: offset ? `top center-=${offset}` : "top center",
      end: "+=1000", // sectionScrollSpan (guessing)
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
      offset: 0, // TODO: bodySectionOffsetHow (not in CSS var list)
    },
    {
      title: ".what-title",
      content: ".what-content",
      offset: 0, // TODO: bodySectionOffsetWhat (not in CSS var list)
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
        return "+=" + h * 3; // endMultiplier not in your list, assuming 3
      },
      pin: true,
      pinSpacing: false,
      scrub: 2,
      invalidateOnRefresh: true,
    },
  });

  tl.add("start")
    .to(".scroll-rect1", { y: 0, duration: 1 }, "start")
    .to(
      ".images",
      { opacity: 1, duration: 1, ease: "power1.out" },
      `start+=0.5`
    )
    .add("sync-point", `+=0.5`)
    .to(
      ".team-title",
      { autoAlpha: 0, duration: 1, ease: "power1.in" },
      "sync-point"
    )
    .add("bios", `-=0.2`);

  tl.fromTo(
    "text-box-default-layout",
    { xPercent: 12, autoAlpha: 0 }, // --animation-teamEnterXPercent
    {
      xPercent: 0,
      autoAlpha: 1,
      duration: 1.2, // --animation-teamEnterDuration
      ease: "none",
      stagger: {
        each: 0.22, // --animation-teamStaggerEach
        from: "start",
        amount: 0.9, // --animation-teamStaggerAmount
        grid: "auto",
      },
    },
    `bios+=0.3`
  );

  window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });

  return tl;
};
