import { ResponseObject, ResultsPokemons, TypeStateProps } from "@/@types";

export interface ActionProps {
  type: keyof TypeStateProps;
  payload: any;
}

export function pokemonReducer(state: TypeStateProps, action: ActionProps) {
  switch (action.type) {
    case "AllPokemon":
      return { ...state, AllPokemons: [...state.AllPokemon, action.payload] };
    case "pokemon":
      return { ...state, pokemon: [...state.pokemon, action.payload] };
    default:
      return state;
  }
}
