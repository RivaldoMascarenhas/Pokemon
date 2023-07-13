import { styled } from "styled-components";
import * as Dailog from "@radix-ui/react-dialog";

export const Content = styled(Dailog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 90vh;
  max-width: 450px;
  max-height: 70vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;
export const ContentContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
`;
export const ImageContainerModal = styled.div`
  display: flex;
  gap: 1rem;
  :first-child {
    border-radius: 8px;
    width: 79.52px;
    height: 84px;
    background-color: ${(props) => props.theme.colors.gray100};
  }
`;
export const Title = styled.div`
  font-size: 1rem;
  border-bottom: 1px solid gray;
  height: 1.8rem;
  margin-bottom: 1rem;
`;
export const WeightHeightContainer = styled.div`
  display: flex;
  gap: 2rem;
  font-weight: bold;
`;
export const Overlay = styled(Dailog.Overlay)`
  background-color: ${(props) => props.theme.colors.gray300};
  position: fixed;
  inset: 0;
  opacity: 0.7;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;
interface ButtonProps {
  $favorite?: "$favorite";
  $remove?: "remove";
}
export const ButtonPortal = styled.button<ButtonProps>`
  display: ${(props) => (props.$favorite ? "flex" : "block")};
  padding: ${(props) => (props.$favorite ? "1rem 2rem" : "1rem 2rem")};
  gap: ${(props) => (props.$favorite ? "1rem" : "0")};
  justify-content: ${(props) => (props.$favorite ? "center" : "center")};
  flex-direction: ${(props) => (props.$favorite ? "row" : "row")};

  color: ${(p) => p.theme.colorText};
  background-color: ${(p) => (p.$remove ? "red" : p.theme.backgroundYellow)};
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.$remove ? "#A30000" : "#bea514")};
  }
`;
