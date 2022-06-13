import React from 'react';
import styled from 'styled-components';
import { Container, Tag, PostContainer } from './style';

const PostList = () => (
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
    <PostContainer>
      <div className="post-img">
        <img />
      </div>
      <div className="post-content">
        <span className="post-title">블로그 제목</span>
        <p className="post-writing">
          리액트 컴포넌트는 내장된 상태 객체를 갖고 있다.작은 규모의 프로젝트는 상태 전달이 미미하지만, 큰 규모의
          프로젝트에서는복잡하고 방대한 상태 전달이 발생한다. 위와 같은 문제를 해결하기 위해 우리는 상태관리
          라이브러리를 사용한다. Api, 동작 등을 최대한 리액트스럽게 유
        </p>
        <div className="tag-container">
          <div className="tag">리액트</div>
        </div>
      </div>
    </PostContainer>
  </Container>
);

export default PostList;