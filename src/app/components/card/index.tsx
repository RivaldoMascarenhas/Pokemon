"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import { useCard } from "@/hooks/useCard";
import { ResponseObject } from "@/@types";
import { PokemonContext } from "@/context/contextPokemon";
import { ContainerCard, Heart, ImagemContainer, NamePokemon } from "./style";
import { Button } from "./components/button/styled";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import * as Dialog from "@radix-ui/react-dialog";
import TypePokemons from "./components/typePokemons/typePokemons";
import PortalModal from "./components/portalModal/portalModal";

export default function Card({ pokemon }: { pokemon: ResponseObject }) {
  const { formattedName, imgBack, imgFront } = useCard(pokemon);
  const { dispatch, state } = useContext(PokemonContext);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <ContainerCard>
      <Heart>
        {isClicked ? (
          <AiFillHeart onClick={handleClick} size={25} color="red" />
        ) : (
          <AiOutlineHeart onClick={handleClick} size={25} />
        )}
      </Heart>
      <ImagemContainer>
        <Image priority src={imgFront} width={56} height={60} alt="" />
      </ImagemContainer>
      <NamePokemon>{formattedName}</NamePokemon>
      <span>{pokemon && `ID: ${pokemon.id}`}</span>
      <TypePokemons pokemon={pokemon} />
      <Dialog.Root>
        <Dialog.Trigger asChild={true}>
          <Button>Ver Detalhes</Button>
        </Dialog.Trigger>
        <PortalModal
          pokemon={pokemon}
          formattedName={formattedName}
          imgFront={imgFront}
          imgBack={imgBack}
        />
      </Dialog.Root>
    </ContainerCard>
  );
}
