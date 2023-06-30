"use client";
import { ThemeProvider } from "styled-components";
import { light } from "./styled";

interface StyledProviderProps {
  children: React.ReactNode;
}
export default function StyledProvider({ children }: StyledProviderProps) {
  return (
    <>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </>
  );
}
