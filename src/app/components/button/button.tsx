import { ButtonHTMLAttributes, ElementType } from "react";
import { ButtonPortal } from "./style";

type ButtonProps = {
  favorite: "remove" | "favorite";
  text: string;
  iconLeft?: ElementType;
  iconRight?: ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  text = "",
  favorite,
  iconLeft: IconLeft,
  iconRight: IconRight,
  ...restprops
}: ButtonProps) {
  return (
    <>
      <ButtonPortal {...restprops} favorite={favorite}>
        {IconLeft && <IconLeft />}
        {text}
        {IconRight && <IconRight />}
      </ButtonPortal>
    </>
  );
}
