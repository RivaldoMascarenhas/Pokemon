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
interface ResultsPokemons {
  name: string;
  url: string;
}
interface AllPokemonProps {
  count: number;
  next: null;
  previous: null;
  results: ResultsPokemons[];
}
export const PokemonContext = createContext({} as PokemonContextProps);

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [pokemon, setPokemon] = useState<ResponseObject>({} as ResponseObject);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allPokemon, setAllPokemon] = useState<AllPokemonProps>();

  useEffect(() => {
    async function GetPokemonAll(total: number) {
      try {
        const reponse1 = await pokemonData.get(
          `pokemon?limit=${total}&offset=0`
        );
        const data1 = reponse1.data;
        setAllPokemon(data1);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    }
    GetPokemonAll(25);
  }, []);
  useEffect(() => {
    async function GetPokemon() {
      const response2 = await pokemonData.get(`pokemon/${id}`);
      const data2 = response2.data;
    }
  }, []);
  return (
    <PokemonContext.Provider
      value={{ isLoading, setIsLoading, pokemon, setPokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
