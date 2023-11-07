"use client";
import {
  Root,
  ToggleGroupItem,
  ToggleGroupItemProps,
} from "@radix-ui/react-toggle-group";
import { ForwardRefExoticComponent } from "react";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
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
  padding: ${({ $padding }) => $padding}rem;
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

export const GroupItems = styled<ButtonProps>(ToggleGroupItem)`
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
