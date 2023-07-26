import { AllNamePokemonProps, ResponseObject, TypeStateProps } from "@/@types";

export interface ActionProps {
  type: keyof TypeStateProps;
  payload: any;
}

export function pokemonReducer(state: TypeStateProps, action: ActionProps) {
  switch (action.type) {
    case "AllNamePokemon":
      return {
        ...state,
        AllNamePokemon: action.payload as AllNamePokemonProps,
      };
    case "pokemons":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "isLoading":
      return { ...state, isLoading: action.payload as boolean };
    case "favorite":
      return { ...state, favorite: action.payload as ResponseObject[] };
    default:
      return state;
  }
}
