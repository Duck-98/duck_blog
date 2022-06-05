import React from 'react';
import { Container, SubContainer } from './style';

const Intro = () => (
  <Container>
    <div className="intro">
      <h1>
        <span>always be</span>
        <div className="message">
          <div className="word1">steady</div>
          <div className="word2">coding</div>
          <div className="word3">creating</div>
        </div>
      </h1>
    </div>
    <SubContainer>
      <div className="img">
        <img src="img/profile.png" alt="profile" width="300" height="400" />
      </div>
      <div className="content">
        <span className="title">안녕하세요 나덕경입니다 &#x1F680;</span>
      </div>
    </SubContainer>
  </Container>
);

export default Intro;
