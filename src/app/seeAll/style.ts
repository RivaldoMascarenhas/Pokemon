import { styled } from "styled-components";
import {
  Root,
  ToggleGroupItem,
  ToggleGroupItemProps,
} from "@radix-ui/react-toggle-group";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;
interface SeeAllContainerProps {
  $marginTop?: number;
}
export const SeeAllContainer = styled.div<SeeAllContainerProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-gap: 1rem;
  justify-content: center;
  margin-top: ${(p) => p.$marginTop}rem;
  @media (max-width: 386px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
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
