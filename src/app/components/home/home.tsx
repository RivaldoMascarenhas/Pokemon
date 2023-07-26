"use client";
import { useContext } from "react";
import { PokemonContext } from "@/context/contextPokemon";
import { Main } from "../header/style";
import { SeeAll } from "../seeAll";
import { Favorite } from "../favorite";
import { Search } from "../search";
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
