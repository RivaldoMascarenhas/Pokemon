"use client";
import { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RingLoader } from "react-spinners";
import Image from "next/image";
import {
  ContainerCard,
  Heart,
  ImagemContainer,
  NamePokemon,
  TypePokemon,
  TypeContainer,
  Loading,
  Button,
} from "./style";
import { PokemonContext } from "@/context/contextPokemon";
import { useCard } from "@/hooks/useCard";
import { ResponseObject } from "@/@types";
import { pokemonAPI } from "@/Api/pokemon";

interface CardProps {
  pokemon: string;
}

export default function Card({ pokemon }: CardProps) {
  const { state, dispatch } = useContext(PokemonContext);
  const { formattedName, img } = useCard(state.pokemons);

  const getPokemon = async (name: string) => {
    try {
      const response = await pokemonAPI.get(`pokemon/${name}`);
      const data: ResponseObject = response.data;
      dispatch({
        type: "pokemons",
        payload: data,
      });
    } catch (error) {
      console.error("Erro ao fazer as requisições:", error);
    }
    getPokemon(pokemon);
  };

  return (
    <ContainerCard>
      {state.isLoading ? (
        <Loading>
          <RingLoader color="#FFCB05" size={60} />
        </Loading>
      ) : (
        <>
          <Heart>
            <AiOutlineHeart color="gray" size={28} />
          </Heart>
          <ImagemContainer>
            <Image src={img ? img : ""} width={76} height={80} alt="" />
          </ImagemContainer>
          <NamePokemon>{formattedName}</NamePokemon>
          <span>{state.pokemons ? `ID: ${state.pokemons.id}` : ""}</span>
          <TypeContainer>
            {state.pokemons?.types?.map((item) => (
              <TypePokemon type={item.type.name} key={item.type.name}>
                {item.type.name}
              </TypePokemon>
            ))}
          </TypeContainer>
          <Button>Ver detalhes</Button>
        </>
      )}
    </ContainerCard>
  );
}
