"use client";
import { Container, GroupItens, Root, SeeAllContainer } from "./style";
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
          <Root
            type="single"
            defaultValue="todos"
            onValueChange={handleValueChange}
          >
            <GroupItens value="todos" colorProps={typeCards}>
              <p>Todos</p>
            </GroupItens>
            {typesPokemons.map((t) => {
              return (
                <GroupItens key={t} value={t} colorProps={typeCards}>
                  <p>{t.charAt(0).toUpperCase() + t.slice(1)}</p>
                </GroupItens>
              );
            })}
          </Root>
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
