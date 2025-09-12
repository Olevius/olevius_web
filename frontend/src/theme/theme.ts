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

    // MediaQuery fields
    titleStartX: {
      xs: "46.875rem",
      sm: "46.875rem",
      m: "46.875rem",
      l: "46.875rem",
      xl: "46.875rem",
    },
    navStartY: {
      xs: "-4.375rem",
      sm: "-4.375rem",
      m: "-4.375rem",
      l: "-4.375rem",
      xl: "-4.375rem",
    },
    scrollEnd: {
      xs: "1000",
      sm: "1000",
      m: "1000",
      l: "1000",
      xl: "1000",
    },
    overlapEnd: {
      xs: "1500",
      sm: "1500",
      m: "1500",
      l: "1500",
      xl: "1500",
    },
    scrubScale: {
      xs: "10",
      sm: "10",
      m: "10",
      l: "10",
      xl: "10",
    },
    wordStart: {
      xs: "100",
      sm: "100",
      m: "100",
      l: "100",
      xl: "100",
    },

    eases: {
      power1Out: "power1.out",
      power1In: "power1.in",
      power2Out: "power2.out",
      none: "none",
      expoOut: "expo.out",
    },
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

    // MediaQuery fields
    teamEnterXPercent: {
      xs: "12",
      sm: "12",
      m: "12",
      l: "12",
      xl: "12",
    },
    teamEnterDuration: {
      xs: "1.2",
      sm: "1.2",
      m: "1.2",
      l: "1.2",
      xl: "1.2",
    },
    teamStaggerEach: {
      xs: "0.22",
      sm: "0.22",
      m: "0.22",
      l: "0.22",
      xl: "0.22",
    },
    teamStaggerFrom: "center" as const,
    teamStaggerAmount: {
      xs: "0.9",
      sm: "0.9",
      m: "0.9",
      l: "0.9",
      xl: "0.9",
    },
  },

  layout: {
    titleFontSize: "12.5rem",
    mediumFontSize: "6.25rem",
    subtitleFontSize: "3.125rem",
    footerFontSize: "0.8125rem",
    teamFontSize: "0.9375rem",
    bodyFontSize: "1.5625rem",
    textHeaderFontSize: "1.25rem",
    scrubFontSize: "312.5rem",

    // MediaQuery fields
    paddingSmall: {
      xs: "0.625rem",
      sm: "0.625rem",
      m: "0.625rem",
      l: "0.625rem",
      xl: "0.625rem",
    },
    paddingBody: {
      xs: "3.125rem",
      sm: "3.125rem",
      m: "3.125rem",
      l: "3.125rem",
      xl: "3.125rem",
    },

    // not typed as MediaQuery in your types; keeping as-is
    paddingTransitionText: "5rem",
    paddingTeam: "5.625rem",

    // not MediaQuery in your types (half/threeQuarters), keep as-is
    halfHeight: "50dvh",
    threeQuartersHeight: "75dvh",

    // MediaQuery fields
    fullHeight: {
      xs: "100dvh",
      sm: "100dvh",
      m: "100dvh",
      l: "100dvh",
      xl: "100dvh",
    },
    doubleFullHeight: {
      xs: "200dvh",
      sm: "200dvh",
      m: "200dvh",
      l: "200dvh",
      xl: "200dvh",
    },
    aboutHeight: {
      xs: "130dvh",
      sm: "130dvh",
      m: "130dvh",
      l: "130dvh",
      xl: "130dvh",
    },
    teamHeight: {
      xs: "130dvh",
      sm: "50dvh",
      m: "200dvh",
      l: "10dvh",
      xl: "50dvh",
    },

    bodySectionOffsetHow: 300,
    bodySectionOffsetWhat: 1000,

    // MediaQuery fields
    textBoxMargin: {
      xs: "500px",
      sm: "500px",
      m: "500px",
      l: "500px",
      xl: "500px",
    },

    marginSmallLeft: {
      xs: "2dvw",
      sm: "2dvw",
      m: "2dvw",
      l: "2dvw",
      xl: "2dvw",
    },
    marginSmallRight: {
      xs: "2dvw",
      sm: "2dvw",
      m: "2dvw",
      l: "2dvw",
      xl: "2dvw",
    },
    marginSmallTop: {
      xs: "20dvh",
      sm: "20dvh",
      m: "20dvh",
      l: "20dvh",
      xl: "20dvh",
    },
    marginSmallBottom: {
      xs: "2dvh",
      sm: "2dvh",
      m: "2dvh",
      l: "2dvh",
      xl: "2dvh",
    },

    marginExtraSmallLeft: {
      xs: "5dvh",
      sm: "5dvh",
      m: "5dvh",
      l: "5dvh",
      xl: "5dvh",
    },
    marginExtraSmallRight: {
      xs: "5dvh",
      sm: "5dvh",
      m: "5dvh",
      l: "5dvh",
      xl: "5dvh",
    },
    marginExtraSmallTop: {
      xs: "5dvh",
      sm: "5dvh",
      m: "5dvh",
      l: "5dvh",
      xl: "5dvh",
    },
    marginExtraSmallBottom: {
      xs: "5dvh",
      sm: "5dvh",
      m: "5dvh",
      l: "5dvh",
      xl: "5dvh",
    },

    paddingLeft: {
      xs: "0.625rem",
      sm: "0.625rem",
      m: "0.625rem",
      l: "0.625rem",
      xl: "0.625rem",
    },
    paddingRight: {
      xs: "0.625rem",
      sm: "0.625rem",
      m: "0.625rem",
      l: "0.625rem",
      xl: "0.625rem",
    },
    paddingTop: {
      xs: "0.625rem",
      sm: "0.625rem",
      m: "0.625rem",
      l: "0.625rem",
      xl: "0.625rem",
    },
    paddingBottom: {
      xs: "0.625rem",
      sm: "0.625rem",
      m: "0.625rem",
      l: "0.625rem",
      xl: "0.625rem",
    },

    teamImageMaxWidth: {
      xs: "25dvw",
      sm: "25dvw",
      m: "25dvw",
      l: "25dvw",
      xl: "25dvw",
    },
    aboutFullWidth: {
      xs: "100dvw",
      sm: "100dvw",
      m: "100dvw",
      l: "100dvw",
      xl: "100dvw",
    },
    aboutTitleWidth: {
      xs: "50dvw",
      sm: "50dvw",
      m: "50dvw",
      l: "50dvw",
      xl: "50dvw",
    },
    aboutContentWidth: {
      xs: "41dvw",
      sm: "41dvw",
      m: "41dvw",
      l: "41dvw",
      xl: "41dvw",
    },
    aboutContentPaddingTop: {
      xs: "2dvh",
      sm: "2dvh",
      m: "2dvh",
      l: "2dvh",
      xl: "2dvh",
    },
    aboutContentHeight: {
      xs: "100",
      sm: "100",
      m: "100",
      l: "100",
      xl: "100",
    },

    aboutTitleSpeed: 0.75,
    aboutContentSpeed: 1,

    footerContactTranslateY: {
      xs: "-6dvh",
      sm: "-6dvh",
      m: "-6dvh",
      l: "-6dvh",
      xl: "-6dvh",
    },
    footerLinkMargin: {
      xs: "5dvw",
      sm: "5dvw",
      m: "5dvw",
      l: "5dvw",
      xl: "5dvw",
    },
    footerLinkGap: {
      xs: "5dvw",
      sm: "5dvw",
      m: "5dvw",
      l: "5dvw",
      xl: "5dvw",
    },
    footerSocialGap: {
      xs: "2dvw",
      sm: "2dvw",
      m: "2dvw",
      l: "2dvw",
      xl: "2dvw",
    },

    footerSocialIconScale: 1.5,

    fullWidthPercent: {
      xs: "100%",
      sm: "100%",
      m: "100%",
      l: "100%",
      xl: "100%",
    },

    // Extra small variant
    marginBottomXs: {
      xs: "2dvh",
      sm: "2dvh",
      m: "2dvh",
      l: "2dvh",
      xl: "2dvh",
    },
  },

  testing: {
    border: "",
  },
};
