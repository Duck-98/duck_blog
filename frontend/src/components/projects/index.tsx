import React from 'react';
import styled from 'styled-components';
import { Container, SubContainer } from '../intro/style';

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Projects = () => (
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
    <Card>
      <div className="img">이미지</div>
      <div className="content">
        <span className="title"> 제목</span>
        <span className="subTitle" />
      </div>
    </Card>
  </Container>
);

export default Projects;
