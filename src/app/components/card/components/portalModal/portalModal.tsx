"use client";
import { UseCardProps } from "@/@types";
import { Button } from "@/app/components/button";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { BsBookmark } from "react-icons/bs";
import { NamePokemon } from "../../style";
import { StaticPokemon } from "../staticPokemon";
import { TypePokemons } from "../typePokemons";
import * as S from "./style";

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
                width={86}
                height={90}
                alt=""
                loading={"eager"}
                priority
              />
            </div>
            <div>
              <Image
                src={data.imgBack}
                loading="eager"
                width={86}
                height={90}
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
          {!data.isFavorite ? (
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
        </S.ContentContainer>
        <Dialog.Close />
      </S.Content>
    </Dialog.Portal>
  );
}
