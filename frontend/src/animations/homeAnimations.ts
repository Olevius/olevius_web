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

export const runTransitionTextScroll = (numbers: CSSNumbers) => {
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
  const splitWhyTitle = SplitText.create(".why-title", {
    type: "chars, words, lines",
    charsClass: "char"
  });

  const splitHowTitle = SplitText.create(".how-title", {
    type: "chars, words, lines",
    charsClass: "char"
  });

  const splitWhatTitle = SplitText.create(".what-title", {
    type: "chars, words, lines",
    charsClass: "char"
  });

  const splitWhyContent = SplitText.create(".why-content", {
    type: "chars, words, lines",
    charsClass: "char"
  });

  const splitHowContent = SplitText.create(".how-content", {
    type: "chars, words, lines",
    charsClass: "char"
  });

  const splitWhatContent = SplitText.create(".what-content", {
    type: "chars, words, lines",
    charsClass: "char"
  });

  // pin the section across the whole sequence
  ScrollTrigger.create({
    trigger: ".body",
    start: "top top",
    end: `+=${numbers.layout.bodyHeight}`,       // whatever span you need
    markers: true,
  });

  // now each tween has its own trigger & start
  gsap.from(splitWhyTitle.chars, {
    x: numbers.animation.wordStart,
    autoAlpha: 0,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".body",
      start: "top center",   // top of .body hits viewport center + 2000px later
      end: "+=200",
      scrub: 1,
      markers: true,
    },
  });

  gsap.from(splitHowTitle.chars, {
    x: numbers.animation.wordStart,
    autoAlpha: 0,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".body",
      start: `top center-=${300}`,  // later start
      end: "+=200",
      scrub: 1,
      markers: true,
    },
  });

  gsap.from(splitWhatTitle.chars, {
    x: numbers.animation.wordStart,
    autoAlpha: 0,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".body",
      start: `top center-=${1000}`,  // even later
      end: "+=200",
      scrub: 1,
      markers: true,
    },
  });

  // =====================

  // now each tween has its own trigger & start
  gsap.from(splitWhyContent.chars, {
    x: numbers.animation.wordStart,
    autoAlpha: 0,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".body",
      start: "top center",   // top of .body hits viewport center + 2000px later
      end: "+=200",
      scrub: 1,
      markers: true,
    },
  });

  gsap.from(splitHowContent.chars, {
    x: numbers.animation.wordStart,
    autoAlpha: 0,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".body",
      start: `top center-=${300}`,  // later start
      end: "+=200",
      scrub: 1,
      markers: true,
    },
  });

  gsap.from(splitWhatContent.chars, {
    x: numbers.animation.wordStart,
    autoAlpha: 0,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".body",
      start: `top center-=${1000}`,  // even later
      end: "+=200",
      scrub: 1,
      markers: true,
    },
  });
};
