import { TypeStateProps } from "@/@types";
import { ReactNode, LiHTMLAttributes } from "react";

interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {
  state: number;
  children: ReactNode;
  isClicked: "active" | "disable";
}
export function Item({ state, children, isClicked, ...rest }: ItemProps) {
  return (
    <li {...rest} isClicked>
      <p>{children}</p>
      {state > 0 && <span>{state}</span>}
    </li>
  );
}
