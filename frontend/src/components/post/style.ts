import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 10rem;
  justify-content: space-around;
`;
export const Tag = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  .btn {
    border-radius: 10px;
    border: none;
    width: 100px;
    height: 30px;
    font-weight: bold;
    font-size: 15px;
    background-color: ${(props) => props.theme.BUTTON_COLOR};
    color: ${(props) => props.theme.LINE_WHITE_COLOR};
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.BUTTON_COLOR_HOVER};
    }
  }
  .tag-title {
    font-weight: bold;
  }
  .tag-container {
    height: 280px;
    border-top: 1px solid black;
  }
  .tag-content {
    padding-top: 1rem;
    list-style: none;
    li {
      cursor: pointer;
      &:hover {
        color: ${(props) => props.theme.CURSOR_COLOR};
      }
    }
  }
`;
export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  .post-img {
    border: 1px solid black;
    width: 500px;
    height: 300px;
  }
  .post-content {
    display: flex;
    flex-direction: column;
    width: 500px;
    padding-top: 1rem;
    .post-title {
      font-size: 20px;
      font-weight: bold;
      padding-bottom: 1rem;
    }
  }

  .tag-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 1rem;
    .tag {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 20px;
      border-radius: 5px;
      background-color: ${(props) => props.theme.BACKGROUND_COLOR};
      font-size: 15px;
      color: ${(props) => props.theme.LINE_WHITE_COLOR};
    }
  }
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;
  background-color: #0070c9;
  background: linear-gradient(#42a1ec, #0070c9);
  color: ${(props) => props.theme.LINE_WHITE_COLOR};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.GRAY_COLOR};
  font-size: 18px;
  font-weight; bold;
  margin: 0 auto;
  margin-top: 2rem;
  cursor: pointer;
`;

export const PostCon = styled(Container)`
  flex-direction: column;
`;
