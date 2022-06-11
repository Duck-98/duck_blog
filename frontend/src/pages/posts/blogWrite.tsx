import React from 'react';
import PostView from 'src/components/post/PostView';
import PostWrite from 'src/components/post/PostWrite';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const BlogWrite = () => (
  <Container>
    <PostWrite />
    <PostView />
  </Container>
);

export default BlogWrite;
