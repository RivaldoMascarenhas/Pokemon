import { ActionProps } from "@/reducer/reducer";
import { Dispatch, ReactNode } from "react";

export interface typeStaticProps {
  hp: string;
  attack: string;
  defense: string;
  "special-attack": string;
  "special-defense": string;
  speed: string;
}
interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
export interface ResultsPokemons {
  name: string;
  url: string;
}
export interface ResponseObject {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  past_types: any[]; // You can replace `any` with the appropriate type if necessary
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: {
      dream_world: {
        front_default: string;
        front_female: string | null;
      };
      home: {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
      "official-artwork": {
        front_default: string;
        front_shiny: string;
      };
    };
    versions: {
      "generation-i": {
        "red-blue": {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
        yellow: {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
      };
      "generation-ii": {
        crystal: {
          back_default: string;
          back_shiny: string;
          back_shiny_transparent: string;
          back_transparent: string;
          front_default: string;
          front_shiny: string;
          front_shiny_transparent: string;
          front_transparent: string;
        };
        gold: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
        silver: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
      };
      "generation-iii": {
        emerald: {
          front_default: string;
          front_shiny: string;
        };
        "firered-leafgreen": {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        "ruby-sapphire": {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      "generation-iv": {
        "diamond-pearl": {
          back_default: string;
          back_female: string;
          back_shiny: string;
          back_shiny_female: string;
          front_default: string;
          front_female: string;
          front_shiny: string;
          front_shiny_female: string;
        };
        "heartgold-soulsilver": {
          back_default: string;
          back_female: string;
          back_shiny: string;
          back_shiny_female: string;
          front_default: string;
          front_female: string;
          front_shiny: string;
          front_shiny_female: string;
        };
        platinum: {
          back_default: string;
          back_female: string;
          back_shiny: string;
          back_shiny_female: string;
          front_default: string;
          front_female: string;
          front_shiny: string;
          front_shiny_female: string;
        };
      };
      "generation-v": {
        "black-white": {
          animated: {
            back_default: string;
            back_female: string;
            back_shiny: string;
            back_shiny_female: string;
            front_default: string;
            front_female: string;
            front_shiny: string;
            front_shiny_female: string;
          };
          back_default: string;
          back_female: string;
          back_shiny: string;
          back_shiny_female: string;
          front_default: string;
          front_female: string;
          front_shiny: string;
          front_shiny_female: string;
        };
      };
      "generation-vi": {
        "omegaruby-alphasapphire": {
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
        "x-y": {
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
      };
      "generation-vii": {
        icons: {
          front_default: string;
          front_female: string | null;
        };
        "ultra-sun-ultra-moon": {
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
      };
      "generation-viii": {
        icons: {
          front_default: string;
          front_female: string | null;
        };
      };
    };
  };
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}

export interface PokemonProviderProps {
  children: ReactNode; //Tipo que o Provider recebe
}

export interface AllNamePokemonProps {
  count: number;
  next: null;
  previous: null;
  results: ResultsPokemons[]; //Tipo do response "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
}
export interface TypeStateProps {
  AllNamePokemon: AllNamePokemonProps;
  pokemons: ResponseObject[];
  isLoading: boolean;
  favorite: ResponseObject[];
  page: string; //Tipo dos dados no State que é enviado pelo Context
}

export interface PokemonContextProps {
  state: TypeStateProps;
  dispatch: Dispatch<ActionProps>; //Tipo dos dados enviados pelo Context
}

export interface UseCardProps {
  imgBack: string;
  imgFront: string;
  formattedName: string;
  pokemon: ResponseObject;
  isFavorited: boolean;
  handleFavorite: () => void;
  handleDelete: () => void;
}
