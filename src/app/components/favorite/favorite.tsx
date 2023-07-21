import { PokemonContext } from "@/context/contextPokemon";
import { useContext } from "react";
import { Card } from "../card";
import { SeeAllContainer } from "../seeAll/style";

export function Favorite() {
  const { state } = useContext(PokemonContext);
  return (
    <>
      <SeeAllContainer $padding={1}>
        {state.favorite.map((item) => (
          <Card key={item.id} pokemon={item} />
        ))}
      </SeeAllContainer>
    </>
  );
}
