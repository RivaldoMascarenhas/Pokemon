import { styled } from "styled-components";

export const ContainerInputSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.gray200};
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: white;
  &:focus-within {
    border: ${(props) => props.theme.colors.yellow} 1px solid;
    outline: ${(props) => props.theme.colors.yellow} 1px solid;
  }
  input {
    width: 100%;
    border: none;
    height: 2rem;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
  }
`;
export const DivFixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.gray100};
`;
