import { styled } from "styled-components";
export const Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: #ffcb05;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 70%;
  height: 100px;
  padding: 0 1rem;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  & > nav > ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }
  & > button {
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const Main = styled.main`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
