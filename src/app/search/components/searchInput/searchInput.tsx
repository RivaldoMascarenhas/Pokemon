"use client";
import { InputHTMLAttributes } from "react";
import { CiSearch } from "react-icons/ci";
import { ContainerInputSearch } from "./style";

type SearchProps = InputHTMLAttributes<HTMLInputElement>;

export function SearchInput({ type = "search", ...props }: SearchProps) {
  return (
    <ContainerInputSearch>
      <input
        onChange={(e) => console.log(e.target.value)}
        type={type}
        {...props}
      />
      <CiSearch size={25} />
    </ContainerInputSearch>
  );
}
