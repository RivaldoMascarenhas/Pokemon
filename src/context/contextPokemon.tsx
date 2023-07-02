"use client";
import { pokemonAPI } from "@/Api/pokemon";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

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
interface PokemonProviderProps {
  children: ReactNode;
}
interface PokemonContextProps {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  allPokemon: AllPokemonProps;
}

export const PokemonContext = createContext({} as PokemonContextProps);

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allPokemon, setAllPokemon] = useState<AllPokemonProps>(
    {} as AllPokemonProps
  );

  useEffect(() => {
    async function GetPokemonAll(total: number) {
      try {
        const reponse = await pokemonAPI.get(`pokemon?limit=${total}&offset=0`);
        const data = reponse.data;
        setAllPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }
    GetPokemonAll(25);
  }, []);

  return (
    <PokemonContext.Provider value={{ isLoading, setIsLoading, allPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
