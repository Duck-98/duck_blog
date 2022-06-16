import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  width: 100%;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .img {
    width: 200px;
    height: 200px;
    border: 1px solid black;
    border-radius: 50%;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 50px;
    .title {
      font-size: 25px;
      font-weight: bold;
    }
    .subTitle {
      font-size: 20px;
      font-weight: bold;
      padding-top: 1rem;
    }
  }
`;
