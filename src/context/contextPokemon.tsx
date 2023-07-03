"use client";
import {
  PokemonContextProps,
  PokemonProviderProps,
  TypeStateProps,
} from "@/@types";
import { pokemonReducer } from "@/reducer/reducer";
import { createContext, useReducer } from "react";

export const PokemonContext = createContext({} as PokemonContextProps);

const typeStateInitial: TypeStateProps = {
  AllPokemon: [],
  pokemon: [],
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
