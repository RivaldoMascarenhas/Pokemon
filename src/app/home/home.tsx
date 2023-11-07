"use client";
import { usePokemonContext } from "@/context/contextPokemon";
import { Favorite } from "../favorite";
import { Search } from "../search";
import { SeeAll } from "../seeAll";
import { Main } from "./style";
export function Home() {
  const { state } = usePokemonContext();
  return (
    <Main>
      {state.page === "/" && <SeeAll />}
      {state.page === "favorite" && <Favorite />}
      {state.page === "search" && <Search />}
    </Main>
  );
}
