"use client";
import Image from "next/image";
import { useCallback, useContext, useState } from "react";
import { useCard } from "@/hooks/useCard";
import { ResponseObject } from "@/@types";
import { PokemonContext } from "@/context/contextPokemon";
import {
  ButtonCard,
  ContainerCard,
  Heart,
  ImagemContainer,
  NamePokemon,
} from "./style";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import * as Dialog from "@radix-ui/react-dialog";
import TypePokemons from "./components/typePokemons/typePokemons";
import PortalModal from "./components/portalModal/portalModal";

export default function Card({ pokemon }: { pokemon: ResponseObject }) {
  const { formattedName, imgBack, imgFront } = useCard(pokemon);
  const { dispatch, state } = useContext(PokemonContext);
  const [isClicked, setIsClicked] = useState(false);
  const addFavorite = useCallback(() => {
    setIsClicked(!isClicked);
    dispatch({
      type: "favorite",
      payload: [...state.favorite, pokemon],
    });
  }, [dispatch, isClicked, pokemon, state.favorite]);

  const removeFavorite = useCallback(() => {
    setIsClicked(!isClicked);
    const newFavorite = state.favorite.filter((item) => {
      return item.name !== pokemon.name;
    });
    dispatch({
      type: "favorite",
      payload: newFavorite,
    });
  }, [dispatch, isClicked, pokemon.name, state.favorite]);

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
