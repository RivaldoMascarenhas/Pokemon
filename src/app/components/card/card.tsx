"use client";
import Image from "next/image";
import { useCard } from "@/hooks";
import { ResponseObject } from "@/@types";
import {
  ButtonCard,
  ContainerCard,
  Heart,
  ImagemContainer,
  NamePokemon,
} from "./style";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import * as Dialog from "@radix-ui/react-dialog";
import { PortalModal } from "./components/portalModal";
import { TypePokemons } from "./components/typePokemons";

export function Card({ pokemon }: { pokemon: ResponseObject }) {
  const {
    formattedName,
    imgBack,
    imgFront,
    addFavorite,
    isClicked,
    removeFavorite,
  } = useCard(pokemon);

  return (
    <ContainerCard>
      <Heart>
        {isClicked ? (
          <AiFillHeart onClick={removeFavorite} size={25} color="red" />
        ) : (
          <AiOutlineHeart onClick={addFavorite} size={25} />
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
          <ButtonCard>Ver Detalhes</ButtonCard>
        </Dialog.Trigger>
        <PortalModal
          pokemon={pokemon}
          formattedName={formattedName}
          imgFront={imgFront}
          imgBack={imgBack}
          isClicked={isClicked}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      </Dialog.Root>
    </ContainerCard>
  );
}
