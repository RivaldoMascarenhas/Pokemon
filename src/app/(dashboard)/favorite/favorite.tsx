"use client";
import { PokemonContext } from "@/app/context/contextPokemon";
import { useContext } from "react";
import { Card } from "../../components/card";
import { SeeAllContainer } from "../seeAll/style";
import img from "public/astronaut-pana.png";
import Image from "next/image";
import { ContainerNotFavorite } from "./style";

export function Favorite() {
  const { state } = useContext(PokemonContext);
  return (
    <>
      {state.favorite.length > 0 ? (
        <SeeAllContainer $padding={1}>
          {state.favorite.map((item) => (
            <Card key={item.id} pokemon={item} />
          ))}
        </SeeAllContainer>
      ) : (
        <ContainerNotFavorite>
          <Image src={img} width={480} height={330} alt={""} />
          <h2>Está meio vazio por aqui!</h2>
          <p>Procure por pokémons para adicioná-los aos seus favoritos.</p>
        </ContainerNotFavorite>
      )}
    </>
  );
}
