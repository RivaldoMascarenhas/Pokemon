"use client";
import { useContext, useState } from "react";
import { PokemonContext } from "@/context/contextPokemon";
import { SeeAllContainer } from "./style";
import Card from "../components/card";
import IsLoading from "../components/loading";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export default function SeeAll() {
  const { state } = useContext(PokemonContext);
  const [typeCards, setTypeCards] = useState<string>("Todos");
  const handleValueChange = (type: string) => setTypeCards(type);

  return (
    <div>
      {state.isLoading ? (
        <IsLoading />
      ) : (
        <>
          <ToggleGroup.Root
            type="single"
            defaultValue="Todos"
            onValueChange={handleValueChange}
          >
            <ToggleGroup.ToggleGroupItem value="Todos">
              <p>Todos</p>
            </ToggleGroup.ToggleGroupItem>
            <ToggleGroup.ToggleGroupItem value="Fire">
              <p>Fire</p>
            </ToggleGroup.ToggleGroupItem>
            <ToggleGroup.ToggleGroupItem value="Electric">
              <p>Electric</p>
            </ToggleGroup.ToggleGroupItem>
            <ToggleGroup.ToggleGroupItem value="Water">
              <p>Water</p>
            </ToggleGroup.ToggleGroupItem>
          </ToggleGroup.Root>
          <SeeAllContainer>
            {typeCards === "Todos" &&
              state.pokemons.map((p) => <Card key={p.id} pokemon={p} />)}
            {typeCards === "Electric" &&
              state.pokemons
                .filter((p) => p.types.map(()=>).includes("electric"))
                .map((p) => <Card key={p.id} slot={p.slot} type={p.type} />)}
          </SeeAllContainer>
        </>
      )}
    </div>
  );
}
