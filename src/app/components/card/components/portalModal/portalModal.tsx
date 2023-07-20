"use client";
import Image from "next/image";
import { UseCardProps } from "@/@types";
import { BsBookmark } from "react-icons/bs";
import { TypePokemons } from "../typePokemons";
import { NamePokemon } from "../../style";
import { StaticPokemon } from "../staticPokemon";
import * as Dialog from "@radix-ui/react-dialog";
import * as S from "./style";
import { Button } from "@/app/components/button";

interface PortalModalProps {
  data: UseCardProps;
}
export function PortalModal({ data }: PortalModalProps) {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <S.Title>
          <p>Detalhes</p>
        </S.Title>
        <S.ContentContainer>
          <NamePokemon>{data.formattedName}</NamePokemon>
          <S.ImageContainerModal>
            <div>
              <Image
                src={data.imgFront}
                width={96}
                height={100}
                alt=""
                loading={"eager"}
                priority
              />
            </div>
            <div>
              <Image
                src={data.imgBack}
                loading="eager"
                width={96}
                height={100}
                alt=""
                priority
              />
            </div>
          </S.ImageContainerModal>
          <S.WeightHeightContainer>
            <p>{data.pokemon.height + "m"}</p>
            <span>{data.pokemon.weight + "Kg"}</span>
          </S.WeightHeightContainer>
          <TypePokemons pokemon={data.pokemon} />
          <StaticPokemon pokemon={data.pokemon} />
          {!data.isFavorited ? (
            <Button
              favorite="favorite"
              text="Adicionar aos favoritos"
              iconLeft={BsBookmark}
              onClick={data.handleFavorite}
            />
          ) : (
            <Button
              favorite="remove"
              text="Remove dos favoritos"
              onClick={data.handleDelete}
            />
          )}
          ;
        </S.ContentContainer>
        <Dialog.Close />
      </S.Content>
    </Dialog.Portal>
  );
}
