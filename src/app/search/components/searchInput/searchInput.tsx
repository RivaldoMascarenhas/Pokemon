"use client";
import { InputHTMLAttributes } from "react";
import { CiSearch } from "react-icons/ci";
import { ContainerInputSearch, DivFixed } from "./style";

type SearchProps = InputHTMLAttributes<HTMLInputElement>;

export function SearchInput({ type = "search", ...props }: SearchProps) {
  return (
    <DivFixed>
      <ContainerInputSearch>
        <input type={type} {...props} />
        <CiSearch size={25} />
      </ContainerInputSearch>
    </DivFixed>
  );
}
