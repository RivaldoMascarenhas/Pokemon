"use client";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { BsBookmark } from "react-icons/bs";
import { ResponseObject } from "@/@types";
import {
  ButtonPortal,
  Content,
  ContentContainer,
  ImageContainerModal,
  Overlay,
  Title,
  WeightHeightContainer,
} from "./style";
import { NamePokemon } from "../../style";
import { TypePokemons } from "../typePokemons";
import { StaticPokemon } from "../staticPokemon";

interface PortalModalProps {
  pokemon: ResponseObject;
  formattedName: string;
  imgFront: string;
  imgBack: string;
  isClicked: boolean;
  removeFavorite: () => void;
  addFavorite: () => void;
}
export function PortalModal({
  pokemon,
  isClicked,
  removeFavorite,
  addFavorite,
  formattedName,
  imgFront,
  imgBack,
}: PortalModalProps) {
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
