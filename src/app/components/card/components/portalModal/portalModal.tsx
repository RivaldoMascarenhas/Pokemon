"use client";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { BsBookmark } from "react-icons/bs";
import { ResponseObject } from "@/@types";
import TypePokemons from "../typePokemons/typePokemons";
import StaticPokemon from "../staticPokemon/staticPokemon";
import {
  Content,
  ContentContainer,
  ImageContainerModal,
  Overlay,
  Title,
  WeightHeightContainer,
} from "./styled";
import { NamePokemon } from "../../style";
import { Button } from "../button/styled";

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
          <Button $favorite="$favorite">
            <BsBookmark size={15} />
            <p> Adicionar aos Favoritos</p>
          </Button>
        </ContentContainer>
        <Dialog.Close />
      </Content>
    </Dialog.Portal>
  );
}
