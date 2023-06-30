"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Heart } from "./style";
import { ResponseObject } from "@/@types";
import { pokemon } from "@/Api/pokemon";

export default function Card() {
  const [pokemonIMG, setPokemonIMG] = useState<ResponseObject>();

  useEffect(() => {
    async function GetPokemon(id: number) {
      try {
        const response = await pokemon.get(`/${id}`);
        const data = response.data;

        return setPokemonIMG(data);
      } catch (error) {
        console.log(error);
      }
    }
    GetPokemon(25);
  }, []);

  const img = pokemonIMG?.sprites.front_default;

  return (
    <div>
      <Heart>
        <AiOutlineHeart />
      </Heart>
      <Image src={img ? img : ""} width={120} height={120} alt={""} />
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
