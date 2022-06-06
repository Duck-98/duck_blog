import React from 'react';
import Layout from 'src/components/shared/Layout';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Project = () => (
  <>
    <Layout />
    <Container>
      <Card>
        <div className="img">
          <img src="#" />
        </div>
        <div className="content">
          <span className="title" />
          <span className="subTitle" />
        </div>
      </Card>
    </Container>
  </>
);

export default Project;
