import React from 'react';
import Layout from 'src/components/shared/Layout';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Contact = () => (
  <Container>
    <Layout />
    <div>
      <span>contact</span>
    </div>
  </Container>
);

export default Contact;
