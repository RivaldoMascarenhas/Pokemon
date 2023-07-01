"use client";
import { ResponseObject } from "@/@types";
import { pokemonData } from "@/api/pokemon";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface PokemonProviderProps {
  children: ReactNode;
}
interface PokemonContextProps {
  pokemon: ResponseObject;
  setPokemon: Dispatch<SetStateAction<ResponseObject>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const PokemonContext = createContext({} as PokemonContextProps);

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [pokemon, setPokemon] = useState<ResponseObject>({} as ResponseObject);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function GetPokemon(id: number) {
      try {
        const response = await pokemonData.get(`pokemon/${id}`);
        const data = response.data;
        setPokemon(data);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    }
    GetPokemon(25);
  }, []);

  return (
    <PokemonContext.Provider
      value={{ isLoading, setIsLoading, pokemon, setPokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
