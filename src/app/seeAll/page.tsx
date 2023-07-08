"use client";
import { useContext } from "react";
import { PokemonContext } from "@/context/contextPokemon";
import { SeeAllContainer } from "./style";
import Card from "../components/card";
import IsLoading from "../components/loading";

export default function SeeAll() {
  const { state } = useContext(PokemonContext);
  return (
    <SeeAllContainer>
      {state.isLoading ? (
        <IsLoading />
      ) : (
        state.pokemons.map((item) => {
          return <Card key={item.name} pokemon={item} />;
        })
      )}
    </SeeAllContainer>
  );
}
