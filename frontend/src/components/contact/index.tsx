import styled from 'styled-components';
import React from 'react';
import { Container, Card } from './style';

const ContactComponent = () => (
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

export default ContactComponent;
