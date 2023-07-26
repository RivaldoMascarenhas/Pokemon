import { styled } from "styled-components";
import {
  Root,
  ToggleGroupItem,
  ToggleGroupItemProps,
} from "@radix-ui/react-toggle-group";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem;
  & > div {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
`;
interface SeeAllContainerProps {
  $padding?: number;
}
export const SeeAllContainer = styled.div<SeeAllContainerProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 180px));
  grid-template-rows: repeat(auto-fill, minmax(240px, 240px));
  grid-gap: 1rem;
  width: 100%;
  height: 720px;
  padding: ${({ $padding }) => $padding}rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ContainerRoot = styled(Root)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.3rem;
`;
type ButtonProps = ForwardRefExoticComponent<
  {
    $propsColor: string;
  } & ToggleGroupItemProps
>;

export const GroupItens = styled<ButtonProps>(ToggleGroupItem)`
  border: ${(props) =>
    props.$propsColor === props.value
      ? "none"
      : `1px solid ${props.theme.colors.gray300}`};

  color: ${(props) =>
    props.$propsColor === props.value ? "black" : props.theme.colors.gray300};
  background: transparent;
  width: 9rem;
  height: 2.625rem;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.$propsColor === props.value
      ? props.theme.backgroundYellow
      : "transparente"};
`;
