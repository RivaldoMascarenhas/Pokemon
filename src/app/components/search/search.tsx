"use client";
import { useSearch } from "@/hooks";
import { SearchInput } from "./components/searchInput";
import { Card } from "../card";
import * as S from "../seeAll/style";

export function Search() {
  const { handleGetValueInput, data } = useSearch();
  return (
    <S.Container>
      <div>
        <SearchInput
          onChange={handleGetValueInput}
          placeholder="Digite o nome de um Pokemon"
        />
        <S.SeeAllContainer>
          {data.map((p) => (
            <Card key={p.id} pokemon={p} />
          ))}
        </S.SeeAllContainer>
      </div>
    </S.Container>
  );
}
