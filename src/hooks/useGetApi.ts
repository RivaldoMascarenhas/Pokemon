import { AllNamePokemonProps, ResponseObject, TypeStateProps } from "@/@types";
import { pokemonAPI } from "@/api/pokemon";
import { ActionProps } from "@/reducer/reducer";
import { Dispatch, useCallback, useEffect } from "react";
interface Props {
  state: TypeStateProps;
  dispatch: Dispatch<ActionProps>;
}
export function useGetApi({ dispatch, state }: Props) {
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

  useEffect(() => {
    const favoritePokemon = localStorage.getItem("favoritePokemon");
    if (favoritePokemon) {
      dispatch({
        type: "favorite",
        payload: JSON.parse(favoritePokemon),
      });
    } else {
      localStorage.setItem("favoritePokemon", JSON.stringify([]));
    }
  }, [dispatch]);

  return;
}
