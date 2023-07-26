import { PokemonContext } from "@/context/contextPokemon";
import { useContext, useState } from "react";

export function useSeeAll() {
  const { state } = useContext(PokemonContext);
  const [typeCards, setTypeCards] = useState<string>("todos");
  const handleValueChange = (type: string) => setTypeCards(type);
  const typesPokemons: string[] = []; // para add type cards

  state.pokemons.forEach((pokemon) => {
    const types = pokemon.types.map((p) => p.type.name);
    types.forEach((t) => {
      if (!typesPokemons.includes(t)) {
        typesPokemons.push(t);
      }
    });
  });
  return { state, typeCards, handleValueChange, typesPokemons };
}
