import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  z-index: 1000;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Projects = () => (
  <Container>
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
