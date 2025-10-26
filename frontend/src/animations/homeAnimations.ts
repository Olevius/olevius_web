// animations/homeAnimations.ts
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { cssNumbers } from "../theme/theme";
import type { CSSNumbers } from "../theme/themeTypes";

gsap.registerPlugin(ScrollTrigger, SplitText)

const mm = gsap.matchMedia();

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
          color: "white",
          duration: numbers.animation.colorChangeDuration,
          ease: numbers.animation.eases.power1In,
        }, "syncPoint")
        .to(".header", { backgroundColor: "white", ease: numbers.animation.eases.power1In }, "syncPoint")
        .to(".transition-title-box", { backgroundColor: "white", ease: numbers.animation.eases.power1In })
        .to(".body", { backgroundColor: "white", ease: numbers.animation.eases.power1In });

      return tl
    }
  )
};



export const runTransitionTextScroll = (numbers: CSSNumbers = cssNumbers) => {

  mm.add({
    xs: "(max-width: 639px)",
    sd: "(min-width: 640px)",
    md: "(min-width: 900px)",
    lg: "(min-width: 1024px)",
  },
    () => {
      const split = SplitText.create(".transition-text", {
        type: "chars, words, lines",
        charsClass: "char",
      });

      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".transition-title-box",
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

      return tl

    })
};

export const runUpdSummaryScroll = (numbers: CSSNumbers = cssNumbers): void => {
  mm.add({
    xs: "(max-width: 639px)",
    sd: "(min-width: 640px)",
    md: "(min-width: 900px)",
    lg: "(min-width: 1024px)",
  },
    () => {

    })
}

// Assumes: gsap.registerPlugin(ScrollTrigger) already done, and `mm = gsap.matchMedia()`

export const runUpdProblemScroll = (numbers: CSSNumbers = cssNumbers) => {
  return mm.add(
    {
      xs: "(max-width: 639px)",
      sd: "(min-width: 640px)",
      md: "(min-width: 900px)",
      lg: "(min-width: 1024px)",
    },
    () => {
      // .upd-summary is the pinned stage
      // .upd-next starts just below and scrolls up into place
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".upd-summary",
          start: "top top",
          end: "+=100%",   // one viewport of scroll
          scrub: true,
          pin: true,
          pinSpacing: false,
          // markers: true,
        },
      });

      // If your CSS sets .upd-next { transform: translateY(100%); }
      // you can simply animate to yPercent: 0. If not, use fromTo.
      tl.to(".upd-problem", { y: 0, ease: "none" }, 0);

      // OPTIONAL: if you want the current screen to be pushed away too, uncomment:
      // tl.to(".upd-current", { yPercent: -100, ease: "none" }, 0);

      return tl;
    }
  );
};

// 1) Position/stack only (no opacity changes here)
//    Ensures .upd-statement is overlapped and at y:0 while .upd-problem is pinned.
export const runUpdStatementScroll = (numbers: CSSNumbers = cssNumbers) => {
  mm.add(
    {
      xs: "(max-width: 639px)",
      sd: "(min-width: 640px)",
      md: "(min-width: 900px)",
      lg: "(min-width: 1024px)",
    },
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".upd-problem",
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
        defaults: { ease: "none" }
      });

      tl.add("stack")
        // make sure the statement is stacked and hidden but in place
        .set(".upd-statement-text", { y: 0, autoAlpha: 0 }, "stack") // overlap in place
        .to(".upd-problem-container", { opacity: 0, duration: 0.6, immediateRender: false }, "fadeOut")


      // NOTE: no opacity on .upd-problem here — that happens in function #2
      return tl;
    }
  );
};


// 2) Cross-fade with a gap while .upd-statement is pinned
export const runUpdStatementScrollFade = (numbers: CSSNumbers = cssNumbers) => {
  mm.add(
    {
      xs: "(max-width: 639px)",
      sd: "(min-width: 640px)",
      md: "(min-width: 900px)",
      lg: "(min-width: 1024px)",
    },
    () => {
      const gapBeforeFade = 0.5; // seconds of delay between fade out and fade in
      const gapAfterFade = 0.4;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".upd-statement",
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
          pinSpacing: true,  // keeps spacer in the flow under the pin
        },
        defaults: { ease: "none" }
      });

      tl.add("fadeOut")
        // fade current screen (problem) out
        // wait (gap)
        .to({}, { duration: gapBeforeFade })
        // fade the statement in
        .to(".upd-statement-text", { autoAlpha: 1, duration: 0.6, immediateRender: false }, ">")
        .to({}, { duration: gapAfterFade })


      return tl;
    }
  );
};


export const runUpdPortableScroll = (numbers: CSSNumbers = cssNumbers) => {
  mm.add({
    xs: "(max-width: 639px)",
    sd: "(min-width: 640px)",
    md: "(min-width: 900px)",
    lg: "(min-width: 1024px)",
  },
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".upd-portable",
          start: "top top+=65%",
          scrub: true,
        },
        defaults: { ease: "none" }
      });

      tl.add("scroll-sideways")
      tl.to(".upd-portable-text1", { translateX: "10%" }, "scroll-sideways")
      tl.to(".upd-portable-text2", { translateX: "-10%" }, "scroll-sideways")
      tl.to(".upd-portable-text3", { translateX: "10%" }, "scroll-sideways")

    })
}

export const runUpdInfoScroll = (numbers: CSSNumbers = cssNumbers) => {
  mm.add({
    xs: "(max-width: 639px)",
    sd: "(min-width: 640px)",
    md: "(min-width: 900px)",
    lg: "(min-width: 1024px)",
  },
    () => { })
}

export const runUpdPeopleScroll = (numbers: CSSNumbers = cssNumbers) => {
  mm.add({
    xs: "(max-width: 639px)",
    sd: "(min-width: 640px)",
    md: "(min-width: 900px)",
    lg: "(min-width: 1024px)",
  },
    () => { })
}

export const runUpdTeamScroll = (numbers: CSSNumbers = cssNumbers) => {
  mm.add({
    xs: "(max-width: 639px)",
    sd: "(min-width: 640px)",
    md: "(min-width: 900px)",
    lg: "(min-width: 1024px)",
  },
    () => {

    })
}

// export const createSplitScroll = (
//   selector: string,
//   offset: number,
//   numbers: CSSNumbers = cssNumbers
// ) => {
//   const split = SplitText.create(selector, {
//     type: "chars, words, lines",
//     charsClass: "char",
//   });

//   gsap.from(split.chars, {
//     x: numbers.animation.wordStart,
//     autoAlpha: 0,
//     stagger: numbers.animation.charStagger,
//     scrollTrigger: {
//       trigger: ".body",
//       start: offset ? `top center-=${offset}` : "top center",
//       end: `+=${numbers.animation.sectionScrollSpan}`,
//       scrub: 2,
//     },
//   });
// };

// export const runBodyScroll = (numbers: CSSNumbers = cssNumbers) => {
//   mm.add({
//     xs: "(max-width: 639px)",
//     sd: "(min-width: 640px)",
//     md: "(min-width: 900px)",
//     lg: "(min-width: 1024px)",
//   },
//     () => {
//       const sections = [
//         { title: ".why-title", content: ".why-content", offset: 0 },
//         {
//           title: ".how-title",
//           content: ".how-content",
//           offset: numbers.animation.bodySectionOffsetHow,
//         },
//         {
//           title: ".what-title",
//           content: ".what-content",
//           offset: numbers.animation.bodySectionOffsetWhat,
//         },
//       ];

//       sections.forEach(({ title, content, offset }) => {
//         createSplitScroll(title, offset, numbers);
//         createSplitScroll(content, offset, numbers);
//       });

//     })
// };

// export const runAboutScroll = (numbers: CSSNumbers = cssNumbers) => {

//   mm.add({
//     xs: "(max-width: 639px)",
//     sd: "(min-width: 640px)",
//     md: "(min-width: 900px)",
//     lg: "(min-width: 1024px)",
//   }, (mctx) => {
//     const parallaxDistance =
//       mctx.conditions?.lg
//         ? numbers.layout.aboutParallaxDistance.l
//         : mctx.conditions?.md
//           ? numbers.layout.aboutParallaxDistance.m
//           : mctx.conditions?.sd
//             ? numbers.layout.aboutParallaxDistance.s
//             : mctx.conditions?.xs
//               ? numbers.layout.aboutParallaxDistance.xs
//               : numbers.layout.aboutParallaxDistance.xs; // fallback

//     const tl = gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: ".about",
//           start: "top center",
//           end: `bottom top`,
//           scrub: true,
//         },
//       })
//       .add("sync-point")
//       .from(
//         ".about-content",
//         {
//           y: parallaxDistance,
//         },
//         "sync-point"
//       )
//       .from(
//         ".about-title",
//         {
//           y: parallaxDistance,
//         },
//         "sync-point"
//       );
//     return tl
//   })

// };


export const runTeamTransitionScroll = (numbers: CSSNumbers = cssNumbers) => {

  mm.add({
    xs: "(max-width: 639px)",
    sd: "(min-width: 640px)",
    md: "(min-width: 900px)",
    lg: "(min-width: 1024px)",
  },
    () => {

      const split = SplitText.create(".team-title", {
        type: "chars, words, lines",
        charsClass: "char",
      });

      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".team",
            start: "top top",
            pin: true,
            pinSpacing: false,
            scrub: numbers.animation.scrubDuration,
          },
        }).add("cover")
        .from(split.words, {
          y: numbers.animation.wordStart,
          autoAlpha: 0,
          duration: 10,
          stagger: 20,
        }, "cover")
        .to(".upd-team", {
          y: 0, duration: numbers.animation.bodyHeaderDuration,
        }, "cover")
        .to(".team", { duration: 80 }, "cover")
        .to(".team", { maxHeight: 0, duration: 40 });

      return tl

    })


};

// export const runTeamTextScroll = (numbers: CSSNumbers = cssNumbers) => {
//   mm.add({
//     xs: "(max-width: 639px)",
//     sd: "(min-width: 640px)",
//     md: "(min-width: 900px)",
//     lg: "(min-width: 1024px)",
//   },
//     (mctx) => {
//       const textStartOffset =
//         mctx.conditions?.lg ? numbers.animation.textOffset.l :
//           mctx.conditions?.md ? numbers.animation.textOffset :
//             mctx.conditions?.sd ? numbers.animation.textOffset.s :
//               mctx.conditions?.xs ? numbers.animation.textOffset.xs :
//                 numbers.animation.textOffset.xs;


//       const tl = gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: ".team-container",
//             start: `bottom center+=${textStartOffset}`,
//             scrub: numbers.animation.scrubDuration,
//           },
//         })
//       tl.fromTo(
//         ".team-text-box",
//         { xPercent: numbers.animation.teamEnterXPercent, autoAlpha: 0 } as gsap.TweenVars,
//         {
//           xPercent: 0,
//           autoAlpha: 1,
//           duration: numbers.animation.teamEnterDuration,
//           ease: numbers.animation.eases.none ?? "none",
//           stagger: {
//             each: numbers.animation.teamStaggerEach,
//             from: numbers.animation.teamStaggerFrom,
//             amount: numbers.animation.teamStaggerAmount,
//             grid: "auto",
//           },
//         } as gsap.TweenVars,
//         `>+=${numbers.animation.biosDelay}`
//       );

//       return tl


//     })
// };


// export const runTeamScroll = (numbers: CSSNumbers = cssNumbers) => {
//   mm.add({
//     xs: "(max-width: 639px)",
//     sd: "(min-width: 640px)",
//     md: "(min-width: 900px)",
//     lg: "(min-width: 1024px)",
//   }, () => {
//     const A = numbers.animation;

//     const tl = gsap.timeline({
//       defaults: { ease: A.eases.none ?? "none" },
//       scrollTrigger: {
//         trigger: ".team",
//         start: "top top",
//         end: () => {
//           const el = document.querySelector(
//             ".image-wrapper"
//           ) as HTMLElement | null;
//           const h = el?.getBoundingClientRect().height ?? 0;
//           return "+=" + h * A.endMultiplier;
//         },
//         pin: true,
//         pinSpacing: false,
//         scrub: A.scrub,
//       },
//     });

//     tl.add("start")
//       .to(".scroll-rect1", { y: 0, duration: A.scrollRectDuration }, "start")
//       .to(
//         ".images",
//         { opacity: A.imagesOpacity, duration: A.imagesFadeDuration },
//         `start+=${A.imagesFadeOffset}`
//       )
//       .add("sync-point", `+=${A.syncPointOffset}`)
//       .to(
//         ".team-title",
//         { autoAlpha: 0, duration: A.titleFadeDuration },
//         "sync-point"
//       )
//       .add("bios", `>-=${A.biosOverlapBack}`);

//     tl.fromTo(
//       ".team-text-box",
//       { xPercent: A.teamEnterXPercent, autoAlpha: 0 } as gsap.TweenVars,
//       {
//         xPercent: 0,
//         autoAlpha: 1,
//         duration: A.teamEnterDuration,
//         ease: A.eases.none ?? "none",
//         stagger: {
//           each: A.teamStaggerEach,
//           from: A.teamStaggerFrom,
//           amount: A.teamStaggerAmount,
//           grid: "auto",
//         },
//       } as gsap.TweenVars,
//       `>+=${A.biosDelay}`
//     );

//     // ensure refresh after load (first view in prod)
//     window.addEventListener("load", () => ScrollTrigger.refresh(), {
//       once: true,
//     });

//     return tl
//   });
// };
