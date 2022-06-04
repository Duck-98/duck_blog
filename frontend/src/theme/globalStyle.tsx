import { Global, css } from '@emotion/react';
import reset from 'emotion-reset';
import React from 'react';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset} html, body, #__next {
        margin: 0;
        padding: 0;
        height: 100%;
      }
      * {
        box-sizing: border-box;
      }
      body {
        overflow-x: hidden;
        width: 100%;
        font-family: 'Noto Sans KR', NanumSquare, notokr, 'Nanum Gothic', 'Malgun Gothic', sans-serif;
        box-sizing: border-box;
      }
      a {
        text-decoration: none;
        outline: none;
        color: #fff;
      }
      button {
        border: 1px solid #000;
      }
    `}
  />
);

export default GlobalStyle;
