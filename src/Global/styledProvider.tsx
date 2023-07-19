"use client";
import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "./globalStyled";
import { defaultTheme, dark } from "@/theme";

export default function StyledProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(defaultTheme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        {children}
      </ThemeProvider>
    </>
  );
}
