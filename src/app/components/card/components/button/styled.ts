import { styled } from "styled-components";

interface ButtonProps {
  $favorite?: "$favorite";
  remove?: boolean;
}
export const Button = styled.button<ButtonProps>`
  display: ${(props) => (props.$favorite ? "flex" : "block")};
  padding: ${(props) => (props.$favorite ? "1rem 2rem" : "0.5rem 1rem")};
  gap: ${(props) => (props.$favorite ? "1rem" : "")};
  justify-content: ${(props) => (props.$favorite ? "center" : "")};
  flex-direction: ${(props) => (props.$favorite ? "row" : "")};

  color: ${(p) => p.theme.colorText};
  background-color: ${(p) => (p.remove ? "red" : p.theme.backgroundYellow)};
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.remove ? "#A30000" : "#bea514")};
  }
`;
