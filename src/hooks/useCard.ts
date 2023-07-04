"use client";
import { ResponseObject } from "@/@types";

export function useCard(pokemon: ResponseObject) {
  const imgFront = pokemon ? pokemon.sprites?.front_default : "";
  const imgBack = pokemon ? pokemon.sprites?.back_default : "";
  const formattedName = pokemon ? capitalizeFirstLetter(pokemon.name) : "";

  function capitalizeFirstLetter(str: string) {
    if (!str) {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return { imgBack, imgFront, formattedName };
}
