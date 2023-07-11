import { styled } from "styled-components";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;
export const SeeAllContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Root = styled(ToggleGroup.Root)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.3rem;
`;
type ButtonProps = ForwardRefExoticComponent<
  ToggleGroup.ToggleGroupItemProps &
    RefAttributes<HTMLButtonElement> & {
      $propsColor: string;
    }
>;

export const GroupItens = styled<ButtonProps>(ToggleGroup.ToggleGroupItem)`
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
