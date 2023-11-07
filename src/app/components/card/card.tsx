"use client";
import { ResponseObject } from "@/@types";
import { useCard } from "@/hooks";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { PortalModal } from "./components/portalModal";
import { TypePokemons } from "./components/typePokemons";
import * as S from "./style";

export function Card({ pokemon }: { pokemon: ResponseObject }) {
  const data = useCard(pokemon);
  return (
    <S.ContainerCard>
      <S.Heart>
        {data.isFavorite ? (
          <AiFillHeart onClick={data.handleDelete} size={25} color="red" />
        ) : (
          <AiOutlineHeart onClick={data.handleFavorite} size={25} />
        )}
      </S.Heart>
      <S.ImagemContainer>
        <Image priority src={data.imgFront} width={56} height={60} alt="" />
      </S.ImagemContainer>
      <S.NamePokemon>{data.formattedName}</S.NamePokemon>
      <span>{`ID: ${pokemon.id}`}</span>
      <TypePokemons pokemon={pokemon} />
      <Dialog.Root>
        <Dialog.Trigger asChild={true}>
          <S.ButtonCard>Ver Detalhes</S.ButtonCard>
        </Dialog.Trigger>
        <PortalModal data={data} />
      </Dialog.Root>
    </S.ContainerCard>
  );
}
