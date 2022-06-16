import React from 'react';
import Post from 'src/components/post/Post';
import PostList from 'src/components/post/PostList';
import PostTag from 'src/components/post/PostTag';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const Blog = () => (
  <Container>
    <PostTag />
    <PostList />;
  </Container>
);

export default Blog;
