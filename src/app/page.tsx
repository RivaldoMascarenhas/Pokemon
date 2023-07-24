"use client";
import { useContext } from "react";
import { Header } from "./components/header";
import { PokemonContext } from "@/context/contextPokemon";
import IsLoading from "./components/loading";

export default function Home() {
  const { state } = useContext(PokemonContext);
  return state.isLoading ? <IsLoading /> : <Header />;
}
