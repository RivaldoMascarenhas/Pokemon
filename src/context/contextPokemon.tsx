"use client";
import { createContext, useCallback, useEffect, useReducer } from "react";
import {
  AllNamePokemonProps,
  PokemonContextProps,
  PokemonProviderProps,
  ResponseObject,
  TypeStateProps,
} from "@/@types";
import { pokemonReducer } from "@/reducer/reducer";
import { pokemonAPI } from "@/api/pokemon";

export const PokemonContext = createContext({} as PokemonContextProps);

const typeStateInitial: TypeStateProps = {
  AllNamePokemon: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  } as AllNamePokemonProps,
  pokemons: [] as ResponseObject[],
  isLoading: false,
  favorite: [] as ResponseObject[],
  favoriteState: false as boolean,
};

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [state, dispatch] = useReducer(pokemonReducer, typeStateInitial);
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
  }, [getPokemon, state.AllNamePokemon.results]);

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};
