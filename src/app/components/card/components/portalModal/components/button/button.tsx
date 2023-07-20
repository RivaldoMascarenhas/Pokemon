import { ElementType } from "react";

type ButtonProps = {
  text: string;
  iconLeft: ElementType;
  props: HTMLButtonElement;
};

export default function Button({
  text = "",
  iconLeft: Icon,
  ...props
}: ButtonProps) {
  return (
    <>
      <button>
        <Icon />
        {text}
      </button>
    </>
  );
}
