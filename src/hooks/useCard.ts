import { ResponseObject } from "@/@types";
import { PokemonContext } from "@/context/contextPokemon";
import { useContext } from "react";

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

  const handleFavorite = () => {
    dispatch({
      type: "favorite",
      payload: [...state.favorite, pokemon],
    });
    localStorage.setItem(
      "favoritePokemon",
      JSON.stringify([...state.favorite, pokemon])
    );
  };
  const handleDelete = () => {
    const newFavorite = state.favorite.filter((item) => {
      return item.name !== pokemon.name;
    });
    dispatch({
      type: "favorite",
      payload: newFavorite,
    });
    localStorage.setItem("favoritePokemon", JSON.stringify(newFavorite));
  };
  return {
    imgBack,
    imgFront,
    formattedName,
    handleFavorite,
    handleDelete,
    isFavorited,
    pokemon,
  };
}
