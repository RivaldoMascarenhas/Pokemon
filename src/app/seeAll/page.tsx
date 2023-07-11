"use client";
import { Container, GroupItens, Root, SeeAllContainer } from "./style";
import IsLoading from "../components/loading";
import { useSeeAll } from "@/hooks";
import { Card } from "../components/card";

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
            <GroupItens $propsColor={typeCards} value="todos">
              Todos
            </GroupItens>
            {typesPokemons.map((t) => {
              return (
                <GroupItens key={t} value={t} $propsColor={typeCards}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
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
