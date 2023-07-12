import { PokemonContext } from "@/context/contextPokemon";
import { ChangeEvent, useContext, useState } from "react";

export function useSearch() {
  const { state } = useContext(PokemonContext);
  const [resultSearch, setResultSearch] = useState<string>("");
  const getValueInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setResultSearch(e.target.value);
    } else {
      setResultSearch("");
    }
  };
  function getPokemon() {
    if (resultSearch.length > 0) {
      const data = state.pokemons.filter((p) =>
        p.name.includes(resultSearch.toLowerCase())
      );
      return data;
    } else {
      return [];
    }
  }
  const data = getPokemon();
  return { getValueInput, data };
}
