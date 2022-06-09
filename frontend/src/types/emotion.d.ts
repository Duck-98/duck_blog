import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    HDPC: string;
    PC: string;
    NOTEBOOK: string;
    TABLET: string;
    MOBILE: string;
    Open: boolean;
    BACKGROUND_COLOR: string;
    LINE_WHITE_COLOR: string;
  }
}
