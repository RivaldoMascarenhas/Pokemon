import {
  AllPokemonProps,
  ResponseObject,
  ResultsPokemons,
  TypeStateProps,
} from "@/@types";

export interface ActionProps {
  type: keyof TypeStateProps;
  payload: any;
}

export function pokemonReducer(state: TypeStateProps, action: ActionProps) {
  switch (action.type) {
    case "AllNamePokemon":
      return {
        ...state,
        AllPokemons: action.payload as AllPokemonProps,
      };
    case "pokemons":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "isLoading":
      return { ...state, isLoading: action.payload as boolean };
    default:
      return state;
  }
}
