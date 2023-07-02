import { useContext, useEffect, useState } from "react";
import { pokemonAPI } from "@/Api/pokemon";
import { ResponseObject } from "@/@types";
import { PokemonContext } from "@/context/contextPokemon";

export function useCard(namePokemon: string | number) {
  const { setIsLoading } = useContext(PokemonContext);

  const [pokemon, setPokemon] = useState<ResponseObject | null>(null);

  useEffect(() => {
    const getPokemon = async (name: string | number) => {
      try {
        setIsLoading(true);
        const response = await pokemonAPI.get(`pokemon/${name}`);
        const data: ResponseObject = response.data;
        setPokemon(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemon(namePokemon);
  }, [namePokemon, setIsLoading]);

  const img = pokemon ? pokemon.sprites?.front_default : "";
  const formattedName = pokemon ? capitalizeFirstLetter(pokemon.name) : "";

  function capitalizeFirstLetter(str: string) {
    if (!str) {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return { img, formattedName, pokemon };
}
