import { styled } from "styled-components";

export const ContainerInputSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.gray200};
  align-items: center;
  margin: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: white;
  box-sizing: border-box;
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
