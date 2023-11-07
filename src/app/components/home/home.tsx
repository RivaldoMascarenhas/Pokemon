"use client";
import { usePokemonContext } from "@/context/contextPokemon";
import { Favorite } from "../favorite";
import { Main } from "../header/style";
import { Search } from "../search";
import { SeeAll } from "../seeAll";
export default function Home() {
  const { state } = usePokemonContext();
  return (
    <Main>
      {state.page === "/" && <SeeAll />}
      {state.page === "favorite" && <Favorite />}
      {state.page === "search" && <Search />}
    </Main>
  );
}
