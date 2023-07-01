"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  ContainerCard,
  Heart,
  ImagemContainer,
  NamePokemon,
  TypePokemon,
  TypeContainer,
  Loading,
} from "./style";
import { ResponseObject } from "@/@types";
import { pokemonData } from "@/Api/pokemon";
import { RingLoader } from "react-spinners";

export default function Card() {
  const [pokemon, setPokemon] = useState<ResponseObject>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function GetPokemon(id: number) {
      try {
        const response = await pokemonData.get(`/${id}`);
        const data = response.data;
        setInterval(() => {
          setPokemon(data);
          setIsLoading(true);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    }
    GetPokemon(2);
  }, []);

  const img = pokemon?.sprites.front_default;
  return (
    <ContainerCard>
      {isLoading ? (
        <>
          <Heart>
            <AiOutlineHeart color="gray" size={28} />
          </Heart>
          <ImagemContainer>
            <Image
              priority={true}
              src={img ? img : ""}
              width={76}
              height={80}
              alt={""}
            />
          </ImagemContainer>

          <NamePokemon>
            {pokemon
              ? pokemon.name.charAt(0).toLocaleUpperCase() +
                pokemon.name.slice(1)
              : ""}
          </NamePokemon>
          <span>{`ID: ${pokemon?.id}`}</span>
          <TypeContainer>
            {pokemon?.types.map((item) => {
              return (
                <TypePokemon type={item.type.name} key={item.slot}>
                  {item.type.name}
                </TypePokemon>
              );
            })}
          </TypeContainer>
          <button>Ver detalhes</button>
        </>
      ) : (
        <Loading>
          <RingLoader color="#FFCB05" size={50} />
        </Loading>
      )}
    </ContainerCard>
  );
}
