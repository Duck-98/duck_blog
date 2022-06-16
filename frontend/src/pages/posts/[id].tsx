import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const PostView = dynamic(() => import('src/components/post/PostView'), { ssr: false });

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 7rem;
  justify-content: center;
  width: 100%;
`;
const BlogView = (): JSX.Element => (
  <Container>
    <PostView />
  </Container>
);

export default BlogView;
