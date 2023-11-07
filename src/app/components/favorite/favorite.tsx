"use client";
import { usePokemonContext } from "@/context/contextPokemon";
import Image from "next/image";
import img from "public/astronaut-pana.png";
import { Card } from "../card";
import { SeeAllContainer } from "../seeAll/style";
import { ContainerNotFavorite } from "./style";

export function Favorite() {
  const { state } = usePokemonContext();
  return (
    <>
      {state.favorite.length > 0 && (
        <SeeAllContainer $padding={1}>
          {state.favorite.map((item) => (
            <Card key={item.id} pokemon={item} />
          ))}
        </SeeAllContainer>
      )}

      {state.favorite.length === 0 && (
        <ContainerNotFavorite>
          <Image src={img} width={480} height={330} alt={""} />
          <h2>Está meio vazio por aqui!</h2>
          <p>Procure por pokémons para adicioná-los aos seus favoritos.</p>
        </ContainerNotFavorite>
      )}
    </>
  );
}
