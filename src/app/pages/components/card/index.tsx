"use client";
import Image from "next/image";
import axios from "axios";
import { useState, useCallback } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Heart } from "./style";
import { ResponseObject } from "@/@types";

export default function Card() {
  const [pokemonIMG, setPokemonIMG] = useState<ResponseObject>();

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
