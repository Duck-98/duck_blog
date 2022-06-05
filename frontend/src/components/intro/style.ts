import styled from 'styled-components';

export const SubContainer = styled.div`
  display: flex;
  padding-top: 10rem;
  .title {
    font-size: 30px;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  .intro {
    h1 {
      color: #333;
      font-family: tahoma;
      font-size: 3rem;
      font-weight: 100;
      line-height: 1.5;
      text-transform: uppercase;
      white-space: nowrap;
      overflow: hidden;
      position: relative;
      width: 550px;
      span {
        font-size: 40px;
      }
      .message {
        background-color: yellow;
        color: #333;
        display: block;
        font-weight: 900;
        overflow: hidden;
        position: absolute;
        padding-left: 0.5rem;
        top: 0.2rem;
        left: 270px;
        animation: openclose 5s ease-in-out infinite;
        .word1,
        .word2,
        .word3 {
          font-family: tahoma;
        }
        @keyframes openclose {
          0% {
            top: 0.2rem;
            width: 0;
          }
          5% {
            width: 0;
          }
          15% {
            width: 230px;
          }
          30% {
            top: 0.2rem;
            width: 230px;
          }
          33% {
            top: 0.2rem;
            width: 0;
          }
          35% {
            top: 0.2rem;
            width: 0;
          }
          38% {
            top: -4.5rem;
          }
          48% {
            top: -4.5rem;
            width: 230px;
          }
          62% {
            top: -4.5rem;
            width: 230px;
          }
          66% {
            top: -4.5rem;
            width: 0;
            text-indent: 0;
          }
          71% {
            top: -9rem;
            width: 0;
            text-indent: 5px;
          }
          86% {
            top: -9rem;
            width: 285px;
          }
          95% {
            top: -9rem;
            width: 285px;
          }
          98% {
            top: -9rem;
            width: 0;
            text-indent: 5px;
          }
          100% {
            top: 0;
            width: 0;
            text-indent: 0;
          }
        }
      }
    }
  }
`;