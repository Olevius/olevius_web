// animations/homeAnimations.ts
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { cssNumbers } from "../theme/theme";
import type { CSSNumbers } from "../theme/themeTypes";

gsap.registerPlugin(ScrollTrigger, SplitText);

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
      )
  })
};

export const runHeaderScrollTimeline = (numbers: CSSNumbers = cssNumbers) => {
  return gsap.timeline({
    scrollTrigger: {
      trigger: ".header",
      start: "top top",
      end: `+=${numbers.animation.scrollEnd}`,
      pin: true,
      scrub: numbers.animation.scrubDuration,
      markers: true,
      onUpdate: (self) => {
        const scrollY = self.scroll();
        const end = self.end;

        const color = scrollY >= end ? "white" : "black";
        gsap.to(".subtitle-header", {
          color,
          duration: numbers.animation.colorChangeDuration,
          ease: numbers.animation.eases.power1Out
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
      ease: numbers.animation.eases.power1In,
    }, "syncPoint")
    .to(".header", {
      backgroundColor: "white",
      ease: numbers.animation.eases.power1In,
    }, "syncPoint")
    .to(".body-title-box", {
      backgroundColor: "white",
      ease: numbers.animation.eases.power1In,
    }).to(".body", {
      backgroundColor: "white",
      ease: numbers.animation.eases.power1In,
    });

};

export const runTransitionTextScroll = (numbers: CSSNumbers = cssNumbers) => {
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
      scrub: numbers.animation.scrubDuration,
      markers: true,
      onUpdate: (self) => {
        const scrollY = self.scroll();
        const end = self.end;

        const opacity = scrollY >= end ? 0 : 1;
        gsap.to(".subtitle-header", {
          opacity,
          duration: numbers.animation.colorChangeDuration,
          ease: numbers.animation.eases.power1Out
        });
      },
    },
  }).from(split.words, {
    y: numbers.animation.wordStart,
    autoAlpha: 0,
    duration: numbers.animation.bodyHeaderDuration,
    stagger: numbers.animation.wordStagger,
  })
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
    ease: numbers.animation.eases.power2Out,
    scrollTrigger: {
      trigger: ".body",
      start: offset ? `top center-=${offset}` : "top center",
      end: `+=${numbers.animation.sectionScrollSpan}`,
      scrub: numbers.animation.scrubDuration,
      markers: true,
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
  // create the scrollSmoother before your scrollTriggers
  return gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top center",
      end: `bottom top`,
      scrub: true,
      markers: true
    }
  }).add("sync-point")
    .from(".about-content", {
      y: "20vh", ease: "power2.out"
    }, "sync-point").from(".about-title", {
      y: "20vh", ease: "power1.out"
    }, "sync-point")
}

export const runTeamScroll = () => {
  const imageWrapper = document.querySelector(".image-wrapper") as HTMLElement;

  gsap.timeline({
    scrollTrigger: {
      trigger: ".team",
      start: "top top",
      end: () => "+=" + imageWrapper.getBoundingClientRect().height * 1.01,
      pin: true,
      pinSpacing: false,
      scrub: 5,
      markers: true,
      invalidateOnRefresh: true,
    }
  })
    .to(".scroll-rect1", { y: 0 })
    .add("sync-point")
    .to(".team-title", { autoAlpha: 0 }, "sync-point")
    // slide IN from the right
    .fromTo(".team-content",
      { xPercent: 110, autoAlpha: 0 },   // start off canvas
      { xPercent: 0, autoAlpha: 1, ease: "power2.out" },
      "sync-point"                       // align with the label (or "+=0.2")
    );

};
