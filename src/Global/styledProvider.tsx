"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme/_defaultTheme";
import { GlobalStyled } from "./globalStyled";

export default function StyledProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyled />
        {children}
      </ThemeProvider>
    </>
  );
}
