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
    titleStartX: string | number;
    navStartY: string | number;
    scrollEnd: string | number;
    overlapEnd: string | number;
    scrubScale: string | number;
    wordStart: string | number;
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
    teamEnterDuration: string | number;
    teamStaggerEach: string | number;
    teamStaggerFrom: "start" | "center" | "edges" | number;
    teamStaggerAmount: string | number;
    bodySectionOffsetHow: number;
    bodySectionOffsetWhat: number;
  };
  layout: {
    titleFontSize: MediaQuery;
    mediumFontSize: string | number;
    subtitleFontSize: string;
    bodyFontSize: string;
    textHeaderFontSize: string;
    scrubFontSize: MediaQuery;

    paddingSmall: number | string;
    paddingBody: number | string;
    paddingLeft: number | string;
    paddingRight: number | string;
    paddingTop: number | string;
    paddingBottom: number | string;

    fullHeight: string;
    doubleFullHeight: string;
    aboutHeight: string;

    textBoxMargin: string;

    marginSmallLeft: string;
    marginSmallRight: string;
    marginSmallTop: string;
    marginSmallBottom: string;

    marginExtraSmallLeft: string;
    marginExtraSmallRight: string;
    marginExtraSmallTop: string;
    marginExtraSmallBottom: string;
    teamImageMaxWidth: string;
    aboutFullWidth: string;
    aboutTitleWidth: string;
    aboutContentWidth: string;
    aboutContentPaddingTop: number | string;
    aboutContentHeight: string;
    aboutTitleSpeed: number;
    aboutContentSpeed: number;
    aboutParallaxDistance: MediaQuery;
    footerContactTranslateY: string;
    footerLinkMargin: string;
    footerLinkGap: string;
    footerSocialGap: string;
    footerSocialIconScale: number;

    // Extra small variant
    marginBottomXXs: string;
  };
  testing: {
    border: string;
  };
};


export type MediaQuery = {
  xs: string | number;
  s: string | number;
  m: string | number;
  l: string | number;
  xl: string | number
}