"use client";
import { ResponseObject } from "@/@types";
import { TypeContainer, TypePokemon } from "../../style";

export default function TypePokemons({ pokemon }: { pokemon: ResponseObject }) {
  return (
    <TypeContainer>
      {pokemon.types?.map((item) => (
        <TypePokemon type={item.type.name} key={item.type.name}>
          {item.type.name}
        </TypePokemon>
      ))}
    </TypeContainer>
  );
}
