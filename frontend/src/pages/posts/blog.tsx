import React from 'react';
import Post from 'src/components/post/Post';
import PostList from 'src/components/post/PostList';
import PostTag from 'src/components/post/PostTag';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .tag {
    width: 20%;
  }
  .list {
    width: 70%;
  }
`;

const Blog = () => (
  <Container>
    <div className="tag">
      <PostTag />
    </div>
    <div className="list">
      <PostList />
    </div>
  </Container>
);

export default Blog;
