// Mocking window.matchMedia
window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addEventListener: function () { },
    removeEventListener: function () { },
  };
};