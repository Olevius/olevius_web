export type DefaultTheme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    error: string;
    warning: string;
    info: string;
    success: string;
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
  };
  spacing: (factor: number) => string;
  typography: {
    fontFamily: string;
    fontSize: number;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    h1: { fontSize: string; fontWeight: number };
    h2: { fontSize: string; fontWeight: number };
    h3: { fontSize: string; fontWeight: number };
    h4: { fontSize: string; fontWeight: number };
    h5: { fontSize: string; fontWeight: number };
  };
};

export type CSSNumbers = {
  animation: {
    introDuration: number;
    subtitleDuration: number;
    bodyHeaderDuration: number;
    wordStagger: number;
    charStagger: number;
    scrubDuration: number;
    sectionScrollSpan: number;
    hideDuration: number;
    colorChangeDuration: number;
    titleStartX: number;
    navStartY: number;
    scrollEnd: number;
    overlapEnd: number;
    scrubScale: number;
    wordStart: number;
    eases: {
      power1Out: string;
      power1In: string;
      power2Out: string;
      none: string;
      expoOut: string;
    };
    endMultiplier: number;
    scrub: number;
    scrollRectDuration: number;
    imagesOpacity: number;
    imagesFadeDuration: number;
    imagesFadeOffset: number;
    syncPointOffset: number;
    titleFadeDuration: number;
    biosOverlapBack: number;
    biosDelay: number;
    teamEnterXPercent: number;
    teamEnterDuration: number;
    teamStaggerEach: number;
    teamStaggerFrom: "start" | "center" | "edges" | number;
    teamStaggerAmount: number;
  };
  layout: {
    titleFontSize: string;
    mediumFontSize: string;
    subtitleFontSize: string;
    bodyFontSize: string;
    textHeaderFontSize: string;
    scrubFontSize: string;

    paddingSmall: number;
    paddingBody: number;
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;

    fullHeight: string;
    doubleFullHeight: string;
    aboutHeight: string;

    bodySectionOffsetHow: number;
    bodySectionOffsetWhat: number;

    textBoxMargin: string;

    marginSmallLeft: string;
    marginSmallRight: string;
    marginSmallTop: string;
    marginSmallBottom: string;

    marginExtraSmallLeft: string;
    marginExtraSmallRight: string;
    marginExtraSmallTop: string;
    marginExtraSmallBottom: string;

    // Extra small variant
    marginBottomXs: string;
  };
  testing: {
    border: string;
  };
};
