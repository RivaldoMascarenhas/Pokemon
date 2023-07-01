"use client";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { RingLoader } from "react-spinners";
import {
  ContainerCard,
  Heart,
  ImagemContainer,
  NamePokemon,
  TypePokemon,
  TypeContainer,
  Loading,
  Button,
} from "./style";
import { useCard } from "@/hooks/useCard";

export default function Card() {
  const { formattedName, img, pokemon, isLoading } = useCard();
  return (
    <ContainerCard>
      {isLoading ? (
        <>
          <Heart>
            <AiOutlineHeart color="gray" size={28} />
          </Heart>
          <ImagemContainer>
            <Image
              priority={true}
              src={img ? img : ""}
              width={76}
              height={80}
              alt={""}
            />
          </ImagemContainer>
          <NamePokemon>{formattedName}</NamePokemon>
          <span>{`ID: ${pokemon?.id}`}</span>
          <TypeContainer>
            {pokemon?.types.map((item) => {
              return (
                <TypePokemon type={item.type.name} key={item.type.name}>
                  {item.type.name}
                </TypePokemon>
              );
            })}
          </TypeContainer>
          <Button>Ver detalhes</Button>
        </>
      ) : (
        <Loading>
          <RingLoader color="#FFCB05" size={60} />
        </Loading>
      )}
    </ContainerCard>
  );
}
