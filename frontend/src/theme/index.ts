const URL = 'http://localhost:3000';

const responsiveView = {
  HDPC: '1536px',
  PC: '1280px',
  NOTEBOOK: '1024px',
  TABLET: '768px',
  MOBILE: '640px',
};

export const lightTheme = {
  HDPC: `(min-width: ${responsiveView.HDPC})`,
  PC: `(min-width: ${responsiveView.PC})`,
  NOTEBOOK: `(min-width: ${responsiveView.NOTEBOOK})`,
  TABLET: `(min-width: ${responsiveView.TABLET})`,
  MOBILE: `(min-width: ${responsiveView.MOBILE})`,
};

export type ThemeType = typeof lightTheme;