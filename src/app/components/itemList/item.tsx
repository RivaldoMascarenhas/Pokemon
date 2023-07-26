import { TypeStateProps } from "@/@types";
import { ReactNode, LiHTMLAttributes } from "react";
import { ItemContainer } from "./style";

interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {
  numberFavorite?: number;
  isclicked: "active" | "disable";
  text: string;
}
export function Item({
  numberFavorite = 0,
  text = "",
  isclicked,
  ...rest
}: ItemProps) {
  return (
    <ItemContainer {...rest} $isCliked={isclicked}>
      <p>{text}</p>
      {numberFavorite > 0 && <span>{numberFavorite}</span>}
    </ItemContainer>
  );
}
