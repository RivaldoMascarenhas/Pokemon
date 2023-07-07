"use client";
import Image from "next/image";
import { useCard } from "@/hooks/useCard";
import { ResponseObject } from "@/@types";
import { AiOutlineHeart } from "react-icons/ai";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ContainerCard,
  Heart,
  ImagemContainer,
  Button,
  NamePokemon,
} from "./style";
import TypePokemons from "./components/typePokemons/typePokemons";
import PortalModal from "./components/portalModal/portalModal";

export default function Card({ pokemon }: { pokemon: ResponseObject }) {
  const { formattedName, imgBack, imgFront } = useCard(pokemon);
  return (
    <ContainerCard>
      <Heart>
        <AiOutlineHeart color="gray" size={28} />
      </Heart>
      <ImagemContainer>
        <Image priority src={imgFront} width={56} height={60} alt="" />
      </ImagemContainer>
      <NamePokemon>{formattedName}</NamePokemon>
      <span>{pokemon && `ID: ${pokemon.id}`}</span>
      <TypePokemons pokemon={pokemon} />
      <Dialog.Root>
        <Dialog.Trigger asChild={true}>
          <Button>Ver detalhes</Button>
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
