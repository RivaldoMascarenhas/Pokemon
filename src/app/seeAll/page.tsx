"use client";
import { useContext } from "react";
import { PokemonContext } from "@/context/contextPokemon";
import Card from "../components/card";
import { SeeAllContainer } from "./style";
import { Loading } from "../components/card/style";

export default function SeeAll() {
  const { state } = useContext(PokemonContext);
  return (
    <SeeAllContainer>
      {state.isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        state.pokemons.map((item) => {
          return <Card key={item.name} pokemon={item} />;
        })
      )}
    </SeeAllContainer>
  );
}
