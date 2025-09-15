export type MediaQuery = {
  xs: string;
  sm: string;
  m: string;
  l: string;
  xl: string;
};

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
    titleStartX: MediaQuery;
    navStartY: MediaQuery;
    scrollEnd: MediaQuery;
    overlapEnd: MediaQuery;
    scrubScale: MediaQuery;
    wordStart: MediaQuery;
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
    teamEnterXPercent: MediaQuery;
    teamEnterDuration: MediaQuery;
    teamStaggerEach: MediaQuery;
    teamStaggerFrom: "start" | "center" | "edges" | number;
    teamStaggerAmount: MediaQuery;
  };
  layout: {
    titleFontSize: MediaQuery;
    mediumFontSize: MediaQuery;
    subtitleFontSize: MediaQuery;
    bodyFontSize: MediaQuery;
    textHeaderFontSize: MediaQuery;
    scrubFontSize: string;

    paddingSmall: MediaQuery;
    paddingBody: MediaQuery;
    paddingLeft: MediaQuery;
    paddingRight: MediaQuery;
    paddingTop: MediaQuery;
    paddingBottom: MediaQuery;

    fullHeight: MediaQuery;
    doubleFullHeight: MediaQuery;
    aboutHeight: MediaQuery;
    teamHeight: MediaQuery;

    bodySectionOffsetHow: number;
    bodySectionOffsetWhat: number;

    textBoxMargin: MediaQuery;

    marginSmallLeft: MediaQuery;
    marginSmallRight: MediaQuery;
    marginSmallTop: MediaQuery;
    marginSmallBottom: MediaQuery;

    marginExtraSmallLeft: MediaQuery;
    marginExtraSmallRight: MediaQuery;
    marginExtraSmallTop: MediaQuery;
    marginExtraSmallBottom: MediaQuery;
    teamImageMaxWidth: MediaQuery;
    aboutFullWidth: MediaQuery;
    aboutTitleWidth: MediaQuery;
    aboutContentWidth: MediaQuery;
    aboutContentPaddingTop: MediaQuery;
    aboutContentHeight: MediaQuery;
    aboutTitleSpeed: number;
    aboutContentSpeed: number;
    footerContactTranslateY: MediaQuery;
    footerLinkMargin: MediaQuery;
    footerLinkGap: MediaQuery;
    footerSocialGap: MediaQuery;
    footerSocialIconScale: number;
    fullWidthPercent: MediaQuery;

    // Extra small variant
    marginBottomXs: MediaQuery;
  };
  testing: {
    border: string;
  };
};
