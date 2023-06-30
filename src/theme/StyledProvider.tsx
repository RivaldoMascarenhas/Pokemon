"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { light } from "./styled";

export default function StyledProvider(children: ReactNode) {
  return (
    <>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </>
  );
}
