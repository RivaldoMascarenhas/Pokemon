"use client";
import { useContext } from "react";
import { PokemonContext } from "@/context/contextPokemon";
import Card from "../components/card";
import { SeeAllContainer } from "./style";

export default function SeeAll() {
  const { state } = useContext(PokemonContext);
  return (
    <SeeAllContainer>
      {state.pokemons.map((item) => {
        return <Card key={item.name} pokemon={item} />;
      })}
    </SeeAllContainer>
  );
}
