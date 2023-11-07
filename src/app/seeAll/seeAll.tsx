"use client";
import { useSeeAll } from "@/hooks";
import { Card } from "../components/card";
import * as S from "./style";

export function SeeAll() {
  const { state, handleValueChange, typeCards, typesPokemons } = useSeeAll();
  return (
    <S.Container>
      <S.ContainerRoot
        type="single"
        defaultValue="todos"
        onValueChange={handleValueChange}
      >
        <S.GroupItems $propsColor={typeCards} value="todos">
          Todos
        </S.GroupItems>
        {typesPokemons.map((t) => {
          return (
            <S.GroupItems key={t} value={t} $propsColor={typeCards}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </S.GroupItems>
          );
        })}
      </S.ContainerRoot>
      <S.SeeAllContainer>
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
      </S.SeeAllContainer>
    </S.Container>
  );
}
