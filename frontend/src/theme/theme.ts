import type { CSSNumbers } from "./themeTypes";

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

const buildLayout = (width: number) => {
  const base = {
    footerFontSize: '13px',
    teamFontSize: '15px',
    paddingSmall: 10,
    paddingTransitionText: 80,
    paddingBody: 50,
    paddingTeam: 90,
    halfHeight: '50dvh',
    threeQuartersHeight: '75dvh',
    fullHeight: '100dvh',
    oneAndHalfHeight: '150dvh',
    oneAndThreeQuartersHeight: '175dvh',
    doubleFullHeight: '200dvh',
    bodySectionOffsetHow: 300,
    bodySectionOffsetWhat: 1000,
    aboutHeight: '120dvh',
    teamHeight: '150dvh',
    textBoxMargin: '500px',
    marginSmallLeft: '20px',
    marginSmallRight: '20px',
    marginSmallTop: '20px',
    marginSmallBottom: '20px',
    marginExtraSmallLeft: '10px',
    marginExtraSmallRight: '10px',
    marginExtraSmallTop: '10px',
    marginExtraSmallBottom: '10px',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    aboutFullWidth: '100dvw',
    aboutTitleWidth: '50dvw',
    aboutContentWidth: '41dvw',
    aboutContentPaddingTop: 20,
    aboutContentHeight: '100',
    aboutTitleSpeed: 0.75,
    aboutContentSpeed: 1,
    footerContactTranslateY: '-6dvh',
    footerLinkMargin: '40px',
    footerLinkGap: '40px',
    footerSocialGap: '16px',
    footerSocialIconScale: 1.5,
    fullWidthPercent: '100%',
    marginBottomXs: '20px',
    teamImageMaxWidth: '25dvw',
  } as const;

  if (width < 600) {
    return {
      ...base,
      titleFontSize: '80px',
      mediumFontSize: '48px',
      subtitleFontSize: '24px',
      bodyFontSize: '16px',
      textHeaderFontSize: '14px',
      scrubFontSize: '3000px',
      teamImageMaxWidth: '80dvw',
    };
  }

  if (width < 1024) {
    return {
      ...base,
      titleFontSize: '150px',
      mediumFontSize: '80px',
      subtitleFontSize: '40px',
      bodyFontSize: '20px',
      textHeaderFontSize: '16px',
      scrubFontSize: '4000px',
      teamImageMaxWidth: '40dvw',
    };
  }

  return {
    ...base,
    titleFontSize: '200px',
    mediumFontSize: '100px',
    subtitleFontSize: '50px',
    bodyFontSize: '25px',
    textHeaderFontSize: '20px',
    scrubFontSize: '5000px',
  };
};

export const createCssNumbers = (width: number): CSSNumbers => ({
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
    titleStartX: 750,
    navStartY: -70,
    scrollEnd: 1000,
    overlapEnd: 1500,
    scrubScale: 10,
    wordStart: 100,
    eases: {
      power1Out: 'power1.out',
      power1In: 'power1.in',
      power2Out: 'power2.out',
      none: 'none',
      expoOut: 'expo.out',
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
    teamEnterXPercent: 12,
    teamEnterDuration: 1.2,
    teamStaggerEach: 0.22,
    teamStaggerFrom: 'center' as const,
    teamStaggerAmount: 0.9,
  },
  layout: buildLayout(width),
  testing: {
    border: '',
  },
});

export const cssNumbers = createCssNumbers(
  typeof window !== 'undefined' ? window.innerWidth : 1920
);

