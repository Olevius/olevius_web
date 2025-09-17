// animations/homeAnimations.ts
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { cssNumbers } from "../theme/theme";
import type { CSSNumbers } from "../theme/themeTypes";

gsap.registerPlugin(ScrollTrigger, SplitText)

export const runIntroTimeline = (numbers: CSSNumbers = cssNumbers) => {
  return new Promise((resolve) => {
    const tl = gsap.timeline({ onComplete: resolve });

    tl.fromTo(
      ".title-header",
      { x: numbers.animation.titleStartX },
      {
        x: 0,
        duration: numbers.animation.introDuration,
        ease: numbers.animation.eases.power1Out,
      }
    )
      .fromTo(
        ".nav-bar",
        { y: numbers.animation.navStartY },
        {
          y: 0,
          duration: numbers.animation.introDuration,
          ease: numbers.animation.eases.power1Out,
        },
        `-=${numbers.animation.introDuration}`
      )
      .fromTo(
        ".subtitle-header",
        { y: numbers.animation.navStartY, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: numbers.animation.eases.power2Out,
        }
      );
  });
};

export const runHeaderScrollTimeline = (numbers: CSSNumbers = cssNumbers) => {
  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    gsap.set(".title-header", { clearProps: "fontSize" }); // avoid leftover inline

    mm.add(
      {
        xs: "(max-width: 639px)",
        sd: "(min-width: 640px)",
        md: "(min-width: 900px)",
        lg: "(min-width: 1024px)",
      },
      (mctx) => {
        const startFont =
          mctx.conditions?.lg ? numbers.layout.titleFontSize.l :
            mctx.conditions?.md ? numbers.layout.titleFontSize.m :
              mctx.conditions?.sd ? numbers.layout.titleFontSize.s :
                mctx.conditions?.xs ? numbers.layout.titleFontSize.xs :
                  numbers.layout.titleFontSize.xs;

        const endFont =
          mctx.conditions?.lg ? numbers.layout.scrubFontSize.l :
            mctx.conditions?.md ? numbers.layout.scrubFontSize.l :
              mctx.conditions?.sd ? numbers.layout.scrubFontSize.s :
                mctx.conditions?.xs ? numbers.layout.scrubFontSize.xs :
                  numbers.layout.scrubFontSize.m;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".header",
            start: "top top",
            end: `+=${numbers.animation.scrollEnd}`,
            pin: true,
            scrub: numbers.animation.scrubDuration,
            invalidateOnRefresh: true,
          },
        })
          .add("syncPoint")
          .fromTo(
            ".title-header",
            { fontSize: startFont },
            {
              fontSize: endFont,
              color: "white",
              opacity: 0,
              ease: numbers.animation.eases.power1In,
            },
            "syncPoint"
          )
          .to(".subtitle-header", {
            opacity: 0,
            duration: numbers.animation.colorChangeDuration,
            ease: numbers.animation.eases.power1In,
          }, "syncPoint")
          .to(".header", { backgroundColor: "white", ease: numbers.animation.eases.power1In }, "syncPoint")
          .to(".body-title-box", { backgroundColor: "white", ease: numbers.animation.eases.power1In })
          .to(".body", { backgroundColor: "white", ease: numbers.animation.eases.power1In });

        return () => tl.kill(); // cleanup when query stops matching
      }
    );
  });

  // if using a framework, return disposer:
  return () => ctx.revert();
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
        end: `+=${numbers.animation.overlapEnd}`,
        pin: true,
        scrub: numbers.animation.scrubDuration,
      },
    })
    .from(split.words, {
      y: numbers.animation.wordStart,
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
    x: numbers.animation.wordStart,
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
      offset: numbers.animation.bodySectionOffsetHow,
    },
    {
      title: ".what-title",
      content: ".what-content",
      offset: numbers.animation.bodySectionOffsetWhat,
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

  tl.fromTo(
    ".team-text-box",
    { xPercent: A.teamEnterXPercent, autoAlpha: 0 } as gsap.TweenVars,
    {
      xPercent: 0,
      autoAlpha: 1,
      duration: A.teamEnterDuration,
      ease: A.eases.none ?? "none",
      stagger: {
        each: A.teamStaggerEach,
        from: A.teamStaggerFrom,
        amount: A.teamStaggerAmount,
        grid: "auto",
      },
    } as gsap.TweenVars,
    `>+=${A.biosDelay}`
  );

  // ensure refresh after load (first view in prod)
  window.addEventListener("load", () => ScrollTrigger.refresh(), {
    once: true,
  });

  return tl;
};
