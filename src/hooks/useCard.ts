import { PokemonContext } from "@/context/contextPokemon";
import { useContext } from "react";

export function useCard() {
  const { pokemon, isLoading } = useContext(PokemonContext);
  const img = pokemon ? pokemon.sprites?.front_default : "";
  const formattedName = pokemon ? capitalizeFirstLetter(pokemon.name) : "";
  function capitalizeFirstLetter(str: string) {
    if (!str) {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return { pokemon, img, formattedName, isLoading };
}
