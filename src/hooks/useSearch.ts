import { usePokemonContext } from "@/context/contextPokemon";
import { ChangeEvent, useState } from "react";

export function useSearch() {
  const { state } = usePokemonContext();
  const [resultSearch, setResultSearch] = useState<string>("");
  const handleGetValueInput = (e: ChangeEvent<HTMLInputElement>) => {
    const valueInput = e.target.value;
    if (valueInput.length > 0) {
      setResultSearch(valueInput);
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
  return { handleGetValueInput, data };
}
