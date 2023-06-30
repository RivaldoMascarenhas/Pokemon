"use client";
import Image from "next/image";
import axios from "axios";
import { useState, useCallback } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Heart } from "./style";

const ResponseProps = {
  form_name: "",
  form_names: [],
  form_order: 1,
  id: 1,
  is_battle_only: false,
  is_default: true,
  is_mega: false,
  name: "bulbasaur",
  names: [],
  order: 1,
  pokemon: {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  },
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    back_female: null,
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
    back_shiny_female: null,
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    front_female: null,
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
    front_shiny_female: null,
  },
  types: [
    {
      slot: 1,
      type: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
    },
    {
      slot: 2,
      type: {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
    },
  ],
  version_group: {
    name: "red-blue",
    url: "https://pokeapi.co/api/v2/version-group/1/",
  },
};

export default function Card() {
  const [pokemonIMG, setPokemonIMG] = useState<typeof ResponseProps>();
  const Pokemon = useCallback(async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon-form/1/"
    );
    const pokemon = response.data;
    return setPokemonIMG(pokemon);
  }, []);
  Pokemon();

  return (
    <div>
      <Heart>
        <AiOutlineHeart />
      </Heart>
      <Image src={""} width={20} height={20} alt={""} />
      <p>Pikachu</p>
      <span>{`XP:`}</span>
      <div>
        <p>type</p>
        <span>type</span>
      </div>
      <button>Ver detalhes</button>
    </div>
  );
}
