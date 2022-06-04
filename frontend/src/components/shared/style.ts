import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333333;
  padding: 8px 12px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 24px;
  }
  .navbar_logo {
    color: white;
    font-size: 40px;
    display: flex;
    align-items: center;
  }
  .navbar_menu {
    display: flex;
    list-style: none;
    padding-left: 0;
    li {
      padding: 8px 12px;
      @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
      }
    }
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
  .navbar_icons {
    list-style: none;
    color: white;
    display: flex;
    padding-left: 0;
    li {
      padding: 8px 12px;
    }
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }

  .navbar_btn {
    display: none;
    position: absolute;
    right: 32px;
    font-size: 30px;
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
`;

export const A = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    font-weight: bold;
    color: white;
  }
`;