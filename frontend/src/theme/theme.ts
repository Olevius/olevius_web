export const defaultTheme = {
  colors: {
    primary: '#1976d2',
    secondary: '#424242',
    background: '#f5f5f5',
    surface: '#ffffff',
    error: '#d32f2f',
    warning: '#ffa000',
    info: '#0288d1',
    success: '#388e3c',
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#bdbdbd',
    },
  },
  spacing: (factor: number) => `${factor * 8}px`,
  typography: {
    fontFamily: '"Roboto Thin", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    h1: { fontSize: '2.5rem', fontWeight: 100 },
    h2: { fontSize: '2rem', fontWeight: 100 },
    h3: { fontSize: '1.75rem', fontWeight: 100 },
    h4: { fontSize: '1.5rem', fontWeight: 100 },
    h5: { fontSize: '1.25rem', fontWeight: 100 },
  },
};

export const cssNumbers = {
  animation: {
    // --- your existing keys ---
    introDuration: 1.5,
    subtitleDuration: 2,
    bodyHeaderDuration: 3,
    wordStagger: 5,
    charStagger: 0.05,
    scrubDuration: 1,
    sectionScrollSpan: 200,
    hideDuration: 3,
    colorChangeDuration: 0.2,
    titleStartX: 750,
    navStartY: -70,
    scrollEnd: 1000,
    overlapEnd: 1500,
    scrubScale: 10,
    wordStart: 100,
    eases: {
      power1Out: "power1.out",
      power1In: "power1.in",
      power2Out: "power2.out",
      none: "none",
      expoOut: "expo.out",
    },

    // --- added for runTeamScroll ---
    endMultiplier: 1.3,          // "+=" + height * endMultiplier
    scrub: 1.5,                   // ScrollTrigger scrub
    scrollRectDuration: 1.2,      // ".scroll-rect1" slide
    imagesOpacity: 0.7,           // ".images" fade target
    imagesFadeDuration: 0.9,      // ".images" fade duration
    imagesFadeOffset: 0.15,       // start offset after "start"
    syncPointOffset: 0.2,         // gap before title fade
    titleFadeDuration: 0.8,       // ".team-title" fade out
    biosOverlapBack: 0.1,         // overlap with previous beat (">-=x")
    biosDelay: 0.25,              // delay before bios enter starts
    teamEnterXPercent: 12,        // from xPercent
    teamEnterDuration: 1.2,       // enter tween duration
    teamStaggerEach: 0.22,        // stagger cadence
    teamStaggerFrom: "center" as const,
    teamStaggerAmount: 0.9,       // spread across group
  },
  layout: {
    titleFontSize: '200px',
    mediumFontSize: '100px',
    subtitleFontSize: '50px',
    footerFontSize: '13px',
    teamFontSize: "15px",
    bodyFontSize: '25px',
    textHeaderFontSize: '20px',
    scrubFontSize: '5000px',
    paddingSmall: 10,
    paddingTransitionText: 80,
    paddingBody: 50,
    paddingTeam: 90,
    halfHeight: '50vh',
    threeQuartersHeight: '75vh',
    fullHeight: '100vh',
    oneAndHalfHeight: '150vh',
    oneAndThreeQuartersHeight: '175vh',
    doubleFullHeight: '200vh',
    bodySectionOffsetHow: 300,
    bodySectionOffsetWhat: 1000,
    aboutHeight: '120vh',
    teamHeight: '185vh',
    textBoxMargin: "500px",
    marginSmallLeft: '20px',
    marginSmallRight: '20px',
    marginSmallTop: '20vh',
    marginSmallBottom: '20px',
    marginExtraSmallLeft: '5vh',
    marginExtraSmallRight: '5vh',
    marginExtraSmallTop: '5vh',
    marginExtraSmallBottom: '5vh',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    teamImageMaxWidth: '25vw',
    aboutFullWidth: '100vw',
    aboutTitleWidth: '50vw',
    aboutContentWidth: '41vw',
    aboutContentPaddingTop: 20,
    aboutContentHeight: '100',
    aboutTitleSpeed: 0.75,
    aboutContentSpeed: 1,
    footerContactTranslateY: '-6vh',
    footerLinkMargin: '5vw',
    footerLinkGap: '5vw',
    footerSocialGap: '2vw',
    footerSocialIconScale: 1.5,
    fullWidthPercent: '100%',
    // Extra small variant
    marginBottomXs: '20px',
  },
  testing: {
    border: ""
  }
};