"use client";
import { ComponentProps, ElementType } from "react";
import { ButtonPortal } from "./style";

type ButtonProps = {
  favorite: "remove" | "favorite";
  text: string;
  iconLeft?: ElementType;
  iconRight?: ElementType;
} & ComponentProps<"button">;

export function Button({
  text = "",
  favorite,
  iconLeft: IconLeft,
  iconRight: IconRight,
  ...props
}: ButtonProps) {
  return (
    <>
      <ButtonPortal {...props} $favorite={favorite}>
        {IconLeft && <IconLeft />}
        {text}
        {IconRight && <IconRight />}
      </ButtonPortal>
    </>
  );
}
