import { TypeStateProps } from "@/@types";
import { ReactNode, LiHTMLAttributes } from "react";
import { ItemContainer } from "./style";

interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {
  numberFavorite?: number;
  isClicked: "active" | "disable";
  text: string;
}
export function Item({
  numberFavorite = 0,
  text = "",
  isClicked,
  ...rest
}: ItemProps) {
  return (
    <ItemContainer {...rest} isCliked={isClicked}>
      <p>{text}</p>
      {numberFavorite > 0 && <span>{numberFavorite}</span>}
    </ItemContainer>
  );
}
