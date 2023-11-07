"use client";
import { ComponentProps } from "react";
import { CiSearch } from "react-icons/ci";
import * as S from "./style";

type SearchProps = ComponentProps<"input">;

export function SearchInput({ ...props }: SearchProps) {
  return (
    <S.DivFixed>
      <S.ContainerInputSearch>
        <input {...props} />
        <CiSearch size={25} />
      </S.ContainerInputSearch>
    </S.DivFixed>
  );
}
