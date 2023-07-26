"use client";
import { useContext } from "react";
import { SeeAll } from "./seeAll";
import { PokemonContext } from "@/context/contextPokemon";
import { Favorite } from "./components/favorite";
import { Search } from "./components/search";
import { Main } from "./components/header/style";
export default function Home() {
  const { state } = useContext(PokemonContext);
  return (
    <Main>
      {state.page === "/" && <SeeAll />}
      {state.page === "favorite" && <Favorite />}
      {state.page === "search" && <Search />}
    </Main>
  );
}
