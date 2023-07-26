"use client";
import { InputHTMLAttributes } from "react";
import { CiSearch } from "react-icons/ci";
import * as S from "./style";

type SearchProps = InputHTMLAttributes<HTMLInputElement>;

export function SearchInput({ type = "search", ...props }: SearchProps) {
  return (
    <S.DivFixed>
      <S.ContainerInputSearch>
        <input type={type} {...props} />
        <CiSearch size={25} />
      </S.ContainerInputSearch>
    </S.DivFixed>
  );
}
