"use client";
import { useSearch } from "@/hooks";
import { Card } from "../card";
import { SearchInput } from "../searchInput";
import * as S from "../seeAll/style";

export function Search() {
  const { handleGetValueInput, data } = useSearch();
  return (
    <S.Container>
      <SearchInput
        onChange={handleGetValueInput}
        placeholder="Digite o nome de um Pokemon"
      />
      <S.SeeAllContainer>
        {data.map((p) => (
          <Card key={p.id} pokemon={p} />
        ))}
      </S.SeeAllContainer>
    </S.Container>
  );
}
