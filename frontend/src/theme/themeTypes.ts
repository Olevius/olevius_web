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
    };
  };
  layout: {
    titleFontSize: string;
    subtitleFontSize: string;
    scrubFontSize: string;
    paddingSmall: number;
    fullHeight: string;
    doubleFullHeight: string;
    bodyHeight: string;
    bodySectionOffsetHow: number;
    bodySectionOffsetWhat: number;
  };
};