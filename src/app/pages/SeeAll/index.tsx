"use client";
import { useContext, useEffect } from "react";
import { AllPokemonProps } from "@/@types";
import { pokemonAPI } from "@/Api/pokemon";
import { PokemonContext } from "@/context/contextPokemon";
import Card from "../components/card";

export default function SeeAll() {
  const { state, dispatch } = useContext(PokemonContext);

  useEffect(() => {
    async function GetPokemonAll(total: number) {
      try {
        dispatch({
          type: "isLoading",
          payload: true,
        });
        const reponse = await pokemonAPI.get(`pokemon?limit=${total}&offset=0`);
        const data: AllPokemonProps = reponse.data;
        dispatch({
          type: "AllNamePokemon",
          payload: data,
        });
        dispatch({
          type: "isLoading",
          payload: false,
        });
      } catch (error) {
        console.error("Erro ao fazer as requisições:", error);
      }
    }
    GetPokemonAll(25);
  }, [dispatch]);
  return (
    <>
      {state.AllNamePokemon.results?.map((item) => {
        return <Card key={item.name} pokemon={item.name} />;
      })}
    </>
  );
}
