import styled from "styled-components";

interface ButtonProps {
  favorite: "remove" | "favorite";
}
export const ButtonPortal = styled.button<ButtonProps>`
  display: ${(props) => (props.favorite === "favorite" ? "flex" : "block")};
  padding: 1rem 2rem;
  gap: ${(props) => (props.favorite === "favorite" ? "1rem" : "0")};
  justify-content: ${(props) =>
    props.favorite === "favorite" ? "center" : "center"};
  flex-direction: ${(props) => (props.favorite === "favorite" ? "row" : "row")};

  color: ${(p) => p.theme.colorText};
  background-color: ${(p) =>
    p.favorite === "remove" ? "red" : p.theme.backgroundYellow};
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.favorite === "remove" ? "#A30000" : "#bea514"};
  }
`;
