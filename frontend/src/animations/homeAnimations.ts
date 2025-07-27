// animations/homeAnimations.ts
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import type { CSSNumbers } from "../theme/themeTypes";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const runIntroTimeline = (numbers: CSSNumbers) => {
  const tl = gsap.timeline();

  tl.fromTo(
    ".title-header",
    { x: numbers.animation.titleStartX },
    {
      x: 0,
      duration: numbers.animation.introDuration,
      ease: "power1.out",
    }
  )
    .fromTo(
      ".nav-bar",
      { y: numbers.animation.navStartY },
      {
        y: 0,
        duration: numbers.animation.introDuration,
        ease: "power1.out",
      },
      `-=${numbers.animation.introDuration}`
    )
    .fromTo(
      ".subtitle-header",
      { y: numbers.animation.navStartY, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
      }
    )
  return tl;
};

export const runHeaderScrollTimeline = (numbers: CSSNumbers) => {
  return gsap.timeline({
    scrollTrigger: {
      trigger: ".header",
      start: "top top",
      end: `+=${numbers.animation.scrollEnd}`,
      pin: true,
      scrub: 1,
      markers: true,
      onUpdate: (self) => {
        const scrollY = self.scroll();
        const end = self.end;

        const color = scrollY >= end ? "white" : "black";
        gsap.to(".subtitle-header", {
          color,
          duration: 0.2,
          ease: "power1.out"
        });
      },
    },
  })
    .add("syncPoint") // 🔑 all tweens anchor here
    .to(".title-header", {
      fontSize: numbers.layout.scrubFontSize,
      scale: numbers.animation.scrubScale,
      duration: numbers.animation.scrubDuration,
      color: "white",
      opacity: 0,
      ease: "power1.in",
    }, "syncPoint")
    .to(".header", {
      backgroundColor: "white",
      duration: numbers.animation.scrubDuration,
      ease: "power1.in",
    }, "syncPoint")
    .to(".padding", {
      backgroundColor: "white",
      duration: numbers.animation.scrubDuration,
      ease: "power1.in",
    }, "syncPoint")
    .to(".body-title-box", {
      backgroundColor: "white",
      duration: numbers.animation.scrubDuration,
      ease: "power1.in",
    }).to(".body", {
      backgroundColor: "white",
      duration: numbers.animation.scrubDuration,
      ease: "power1.in",
    });;

};

export const runBodyTextScroll = (numbers: CSSNumbers) => {
  const split = SplitText.create(".body-text", {
    type: "chars, words, lines",
    charsClass: "char"
  });

  return gsap.timeline({
    scrollTrigger: {
      trigger: ".body-title-box",
      start: "center center",
      end: `+=${numbers.animation.overlapEnd}`,
      pin: true,
      scrub: 1,
      markers: true,
    },
  }).from(split.words, {
    y: numbers.animation.wordStart,
    autoAlpha: 0,
    duration: numbers.animation.bodyHeaderDuration,
    stagger: 5,
  })
};
