"use client";
import { useContext } from "react";
import { PokemonContext } from "@/context/contextPokemon";
import Card from "../components/card";

export default function SeeAll() {
  const { state } = useContext(PokemonContext);
  return (
    <>
      {state.pokemons.map((item) => {
        return <Card key={item.name} pokemon={item} />;
      })}
    </>
  );
}
