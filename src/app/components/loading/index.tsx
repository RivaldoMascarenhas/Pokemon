"use client";
import { RingLoader } from "react-spinners";
import * as S from "./styles";

export default function IsLoading() {
  return (
    <S.Loading>
      <RingLoader size={120} color="#FFCB05" />
      <p>Loading...</p>
    </S.Loading>
  );
}
