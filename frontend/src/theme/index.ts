const URL = 'http://localhost:3000';

const responsiveView = {
  HDPC: '1536px',
  PC: '1280px',
  NOTEBOOK: '1024px',
  TABLET: '768px',
  MOBILE: '640px',
};

export const lightTheme = {
  MOBILE: `(max-width: ${responsiveView.MOBILE})`,
  TABLET: `(max-width: ${responsiveView.TABLET})`,
  PC: `(max-width: ${responsiveView.PC})`,
  HDPC: `(max-width: ${responsiveView.HDPC})`,
};

export type ThemeType = typeof lightTheme;
