import * as Progress from "@radix-ui/react-progress";
import { styled } from "styled-components";

export const ProgressProgress = styled(Progress.Progress)`
  position: relative;
  overflow: hidden;
  background: #d2d4d6;
  border-radius: 99999px;
  width: 100%;
  height: 10px;
  transform: translateZ(0);
`;

export const ContainerStatic = styled.ul`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  list-style: none;
  & > p {
    font-size: 0.81rem;
    color: ${(props) => props.theme.colors.gray200};
  }
`;
export const Indicator = styled(Progress.Indicator)`
  background-color: ${(props) => props.theme.colors.yellow};
  width: 100%;
  height: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
`;
export const ItemStatic = styled.li`
  display: grid;
  grid-template-columns: 50px 300px 50px;
  justify-content: center;
  align-items: center;
  p {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  span {
    display: flex;
    justify-content: center;
  }
`;
