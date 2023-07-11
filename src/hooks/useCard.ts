"use client";
import { ResponseObject } from "@/@types";
import { PokemonContext } from "@/context/contextPokemon";
import { useCallback, useContext, useState } from "react";

export function useCard(pokemon: ResponseObject) {
  const { dispatch, state } = useContext(PokemonContext);
  const [isClicked, setIsClicked] = useState(false);
  const imgFront = pokemon ? pokemon.sprites?.front_default : "";
  const imgBack = pokemon ? pokemon.sprites?.back_default : "";
  const formattedName = pokemon ? capitalizeFirstLetter(pokemon.name) : "";

  function capitalizeFirstLetter(str: string) {
    if (!str) {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const addFavorite = useCallback(() => {
    setIsClicked(!isClicked);
    dispatch({
      type: "favorite",
      payload: [...state.favorite, pokemon],
    });
  }, [dispatch, isClicked, pokemon, state.favorite]);

  const removeFavorite = useCallback(() => {
    setIsClicked(!isClicked);
    const newFavorite = state.favorite.filter((item) => {
      return item.name !== pokemon.name;
    });
    dispatch({
      type: "favorite",
      payload: newFavorite,
    });
  }, [dispatch, isClicked, pokemon.name, state.favorite]);

  return {
    imgBack,
    imgFront,
    formattedName,
    addFavorite,
    removeFavorite,
    isClicked,
  };
}
