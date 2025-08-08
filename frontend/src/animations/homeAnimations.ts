// animations/homeAnimations.ts
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import type { CSSNumbers } from "../theme/themeTypes";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const runIntroTimeline = (numbers: CSSNumbers) => {
  return new Promise((resolve) => {
    const tl = gsap.timeline({ onComplete: resolve });

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
  })
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
      color: "white",
      opacity: 0,
      ease: "power1.in",
    }, "syncPoint")
    .to(".header", {
      backgroundColor: "white",
      ease: "power1.in",
    }, "syncPoint")
    .to(".body-title-box", {
      backgroundColor: "white",
      ease: "power1.in",
    }).to(".body", {
      backgroundColor: "white",
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
      onUpdate: (self) => {
        const scrollY = self.scroll();
        const end = self.end;

        const opacity = scrollY >= end ? 0 : 1;
        gsap.to(".subtitle-header", {
          opacity,
          duration: 0.2,
          ease: "power1.out"
        });
      },
    },
  }).from(split.words, {
    y: numbers.animation.wordStart,
    autoAlpha: 0,
    duration: numbers.animation.bodyHeaderDuration,
    stagger: 5,
  })
};

export const runBodyScroll = (numbers: CSSNumbers) => {
  const elements = document.querySelectorAll(".text-box-title");

  elements.forEach((el) => {
    console.log(el)
    const split = SplitText.create(el, {
      type: "chars, words, lines",
      charsClass: "char"
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "center center",
        end: `+=${numbers.animation.overlapEnd}`,
        scrub: 1,
        markers: true,
      },
    }).from(split.chars, {
      y: numbers.animation.wordStart,
      autoAlpha: 0,
      duration: numbers.animation.bodyHeaderDuration,
      stagger: 0.05,
    });
  });
};
