import { styled } from "styled-components";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 0.5rem;
`;
interface ButtonProps {
  colorProps: string;
}
export const GroupItens = styled<ButtonProps>(ToggleGroup.ToggleGroupItem)`
  border: 1px solid black;
  background: transparent;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.colorProps === "fire" ? "yellow" : "")};
`;
