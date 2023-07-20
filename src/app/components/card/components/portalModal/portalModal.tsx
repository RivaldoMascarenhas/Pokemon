"use client";
import Image from "next/image";
import { useCard } from "@/hooks";
import { ResponseObject } from "@/@types";
import { BsBookmark } from "react-icons/bs";
import { TypePokemons } from "../typePokemons";
import { NamePokemon } from "../../style";
import { StaticPokemon } from "../staticPokemon";
import * as Dialog from "@radix-ui/react-dialog";
import * as S from "./style";
import Button from "./components/button/button";

interface PortalModalProps {
  pokemon: ResponseObject;
}
export function PortalModal({ pokemon }: PortalModalProps) {
  const data = useCard(pokemon);
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
            <p>{pokemon.height + "m"}</p>
            <span>{pokemon.weight + "Kg"}</span>
          </S.WeightHeightContainer>
          <TypePokemons pokemon={pokemon} />
          <StaticPokemon pokemon={pokemon} />
          {data.isFavorited ? (
            <S.ButtonPortal $remove="remove" onClick={data.removeFavorite}>
              Remover dos Favoritos
            </S.ButtonPortal>
          ) : (
            <S.ButtonPortal $favorite="favorite" onClick={data.addFavorite}>
              <BsBookmark size={15} />
              <p> Adicionar aos Favoritos</p>
            </S.ButtonPortal>
          )}
        </S.ContentContainer>
        <Dialog.Close />
      </S.Content>
    </Dialog.Portal>
  );
}
