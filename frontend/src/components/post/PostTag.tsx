import React from 'react';
import { Container, Tag } from './style';

const PostTag = () => (
  <Container>
    <Tag>
      <span className="tag-title"> 태그 리스트 </span>
      <div className="tag-container">
        <ul className="tag-content">
          <li>리액트</li>
        </ul>
      </div>
      <div className="btn-container">
        <button className="btn">글쓰기</button>
      </div>
    </Tag>
  </Container>
);

export default PostTag;
