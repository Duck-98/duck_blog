import React from 'react';
import PostView from 'src/components/post/PostView';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const PostWrite = dynamic(() => import('src/components/post/PostWrite'), { ssr: false });

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 7rem;
  justify-content: center;
`;
const BlogWrite = (): JSX.Element => (
  <Container>
    <PostWrite />
  </Container>
);

export default BlogWrite;
