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
    fontSize: "1rem",
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
    introDuration: 1.5,
    subtitleDuration: 2,
    bodyHeaderDuration: 3,
    wordStagger: 5,
    charStagger: 0.05,
    scrubDuration: 1,
    sectionScrollSpan: 200,
    hideDuration: 3,
    colorChangeDuration: 0.2,
    endMultiplier: 1.3,
    scrub: 1.5,
    scrollRectDuration: 1.2,
    imagesOpacity: 0.7,
    imagesFadeDuration: 0.9,
    imagesFadeOffset: 0.15,
    syncPointOffset: 0.2,
    titleFadeDuration: 0.8,
    biosOverlapBack: 0.1,
    biosDelay: 0.25,

    teamStaggerFrom: "center" as const,
  },

  layout: {
    scrubFontSize: "312.5rem",

    // not typed as MediaQuery in your types; keeping as-is
    paddingTransitionText: "5rem",
    paddingTeam: "5.625rem",

    // not MediaQuery in your types (half/threeQuarters), keep as-is
    halfHeight: "50dvh",
    threeQuartersHeight: "75dvh",

    bodySectionOffsetHow: 300,
    bodySectionOffsetWhat: 1000,

    aboutTitleSpeed: 0.75,
    aboutContentSpeed: 1,

    teamImageMaxWidth: "25dvw",

    fullHeight: "100dvh",
    doubleFullHeight: "200dvh",

    footerSocialIconScale: 1.5,
  },

  testing: {
    border: "",
  },
};
