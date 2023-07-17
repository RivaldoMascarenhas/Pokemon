"use client";
import { RingLoader } from "react-spinners";
import { Loading } from "./styles";

export default function IsLoading() {
  return (
    <Loading>
      <RingLoader size={120} color="#FFCB05" />
      <p>Loading</p>
    </Loading>
  );
}
