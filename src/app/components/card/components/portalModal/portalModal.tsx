"use client";
import { useCallback, useContext, useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { BsBookmark } from "react-icons/bs";
import { ResponseObject } from "@/@types";
import TypePokemons from "../typePokemons/typePokemons";
import StaticPokemon from "../staticPokemon/staticPokemon";
import {
  ButtonPortal,
  Content,
  ContentContainer,
  ImageContainerModal,
  Overlay,
  Title,
  WeightHeightContainer,
} from "./styled";
import { NamePokemon } from "../../style";
import { PokemonContext } from "@/context/contextPokemon";

interface PortalModalProps {
  pokemon: ResponseObject;
  formattedName: string;
  imgFront: string;
  imgBack: string;
}

export default function PortalModal({
  pokemon,
  formattedName,
  imgFront,
  imgBack,
}: PortalModalProps) {
  const { state, dispatch } = useContext(PokemonContext);
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
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>
          <p>Detalhes</p>
        </Title>
        <ContentContainer>
          <NamePokemon>{formattedName}</NamePokemon>
          <ImageContainerModal>
            <div>
              <Image
                src={imgFront}
                width={96}
                height={100}
                alt=""
                loading={"eager"}
                priority
              />
            </div>
            <div>
              <Image
                src={imgBack}
                loading="eager"
                width={96}
                height={100}
                alt=""
                priority
              />
            </div>
          </ImageContainerModal>
          <WeightHeightContainer>
            <p>{`${pokemon.height}m`}</p>
            <span>{`${pokemon.weight}Kg`}</span>
          </WeightHeightContainer>
          <TypePokemons pokemon={pokemon} />
          <StaticPokemon pokemon={pokemon} />
          {isClicked ? (
            <ButtonPortal $remove="remove" onClick={removeFavorite}>
              Remover dos Favoritos
            </ButtonPortal>
          ) : (
            <ButtonPortal $favorite="$favorite" onClick={addFavorite}>
              <BsBookmark size={15} />
              <p> Adicionar aos Favoritos</p>
            </ButtonPortal>
          )}
        </ContentContainer>
        <Dialog.Close />
      </Content>
    </Dialog.Portal>
  );
}
