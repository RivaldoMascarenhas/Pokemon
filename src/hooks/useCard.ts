"use client";
import { ResponseObject } from "@/@types";
import { PokemonContext } from "@/context/contextPokemon";
import { useCallback, useContext, useState } from "react";

export function useCard(pokemon: ResponseObject) {
  const { dispatch, state } = useContext(PokemonContext);
  const isFavorited = state.favorite.some((item) => item.name === pokemon.name);
  const imgFront = pokemon.sprites?.front_default;
  const imgBack = pokemon.sprites?.back_default;
  const formattedName = capitalizeFirstLetter(pokemon.name);

  function capitalizeFirstLetter(str: string) {
    if (!str) {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const addFavorite = useCallback(() => {
    dispatch({
      type: "favorite",
      payload: [...state.favorite, pokemon],
    });
  }, [dispatch, pokemon, state.favorite]);

  const removeFavorite = useCallback(() => {
    const newFavorite = state.favorite.filter((item) => {
      return item.name !== pokemon.name;
    });
    dispatch({
      type: "favorite",
      payload: newFavorite,
    });
  }, [dispatch, pokemon.name, state.favorite]);

  return {
    imgBack,
    imgFront,
    formattedName,
    addFavorite,
    removeFavorite,
    isFavorited,
  };
}
