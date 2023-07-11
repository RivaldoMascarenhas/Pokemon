import { AllNamePokemonProps, ResponseObject } from "@/@types";
import { pokemonAPI } from "@/api/pokemon";
import { PokemonContext } from "@/context/contextPokemon";
import { useCallback, useContext, useEffect } from "react";

export function useGetApi() {
  const { dispatch, state } = useContext(PokemonContext);

  const TotalPokemons = 25;

  const getPokemonAll = useCallback(
    async (total: number) => {
      try {
        dispatch({
          type: "isLoading",
          payload: true,
        });
        const response = await pokemonAPI.get(
          `pokemon?limit=${total}&offset=0`
        );
        const data: AllNamePokemonProps = response.data;
        dispatch({
          type: "AllNamePokemon",
          payload: data,
        });
      } catch (error) {
        console.error("Erro ao fazer as requisições:", error);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getPokemonAll(TotalPokemons);
  }, [getPokemonAll]);

  const getPokemon = useCallback(async (name: string) => {
    try {
      const response = await pokemonAPI.get(`pokemon/${name}`);
      const data: ResponseObject = response.data;
      return data;
    } catch (error) {
      console.error("Erro ao fazer as requisições:", error);
    } finally {
    }
  }, []);

  useEffect(() => {
    const fetchPokemons = async () => {
      const promises = state.AllNamePokemon.results.map((item) =>
        getPokemon(item.name)
      );
      try {
        const pokemons = await Promise.all(promises);
        dispatch({
          type: "pokemons",
          payload: pokemons,
        });
      } catch (error) {
        console.error("Error ao fazer as requisições:", error);
      } finally {
        dispatch({
          type: "isLoading",
          payload: false,
        });
      }
    };
    if (state.AllNamePokemon.results.length > 0) {
      fetchPokemons();
    }
  }, [dispatch, getPokemon, state.AllNamePokemon.results]);
  return;
}
