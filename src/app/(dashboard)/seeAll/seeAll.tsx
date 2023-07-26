"use client";
import { useSeeAll } from "@/hooks";
import { Card } from "../../components/card";
import IsLoading from "../../components/loading";
import * as S from "./style";

export function SeeAll() {
  const { state, handleValueChange, typeCards, typesPokemons } = useSeeAll();
  return (
    <S.Container>
      <div>
        <S.ContainerRoot
          type="single"
          defaultValue="todos"
          onValueChange={handleValueChange}
        >
          <S.GroupItens $propsColor={typeCards} value="todos">
            Todos
          </S.GroupItens>
          {typesPokemons.map((t) => {
            return (
              <S.GroupItens key={t} value={t} $propsColor={typeCards}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </S.GroupItens>
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
      </div>
    </S.Container>
  );
}
