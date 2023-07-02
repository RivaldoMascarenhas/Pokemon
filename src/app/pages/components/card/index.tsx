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

interface CardProps {
  namePokemon: string | number;
}

export default function Card({ namePokemon }: CardProps) {
  const { isLoading } = useContext(PokemonContext);
  const { formattedName, img, pokemon } = useCard(namePokemon);

  return (
    <ContainerCard>
      {isLoading ? (
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
          <span>{pokemon ? `ID: ${pokemon.id}` : ""}</span>
          <TypeContainer>
            {pokemon?.types?.map((item) => (
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
