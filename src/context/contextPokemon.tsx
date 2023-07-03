"use client";
import { createContext, useReducer } from "react";
import {
  AllPokemonProps,
  PokemonContextProps,
  PokemonProviderProps,
  ResponseObject,
  TypeStateProps,
} from "@/@types";
import { pokemonReducer } from "@/reducer/reducer";

export const PokemonContext = createContext({} as PokemonContextProps);

const typeStateInitial: TypeStateProps = {
  AllNamePokemon: {} as AllPokemonProps,
  pokemons: {} as ResponseObject,
  isLoading: false,
};

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [state, dispatch] = useReducer(pokemonReducer, typeStateInitial);

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};
