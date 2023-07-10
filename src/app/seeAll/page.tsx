"use client";
import { Container, SeeAllContainer } from "./style";
import Card from "../components/card";
import IsLoading from "../components/loading";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useSeeAll } from "@/hooks/useSeeAll";

export default function SeeAll() {
  const { state, handleValueChange, typeCards, typesPokemons } = useSeeAll();

  return (
    <Container>
      {state.isLoading ? (
        <IsLoading />
      ) : (
        <>
          <ToggleGroup.Root
            type="single"
            defaultValue="todos"
            onValueChange={handleValueChange}
          >
            <ToggleGroup.ToggleGroupItem value="todos">
              <p>Todos</p>
            </ToggleGroup.ToggleGroupItem>
            {typesPokemons.map((t) => {
              return (
                <ToggleGroup.ToggleGroupItem key={t} value={t}>
                  <p>{t.charAt(0).toUpperCase() + t.slice(1)}</p>
                </ToggleGroup.ToggleGroupItem>
              );
            })}
          </ToggleGroup.Root>
          <SeeAllContainer>
            {typeCards === "todos"
              ? state.pokemons.map((p) => <Card key={p.id} pokemon={p} />)
              : state.pokemons
                  .filter((p) =>
                    p.types
                      .map((t) => {
                        return t.type.name;
                      })
                      .includes(typeCards)
                  )
                  .map((p) => <Card key={p.id} pokemon={p} />)}
          </SeeAllContainer>
        </>
      )}
    </Container>
  );
}
