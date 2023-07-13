"use client";
import { useSearch } from "@/hooks";
import { Card } from "../components/card";
import { Container, SeeAllContainer } from "../seeAll/style";
import { SearchInput } from "./components/searchInput";

export function Search() {
  const { handleGetValueInput, data } = useSearch();
  return (
    <Container>
      <SearchInput
        onChange={handleGetValueInput}
        placeholder="Digite o nome de um Pokemon"
      />
      <SeeAllContainer $marginTop={4}>
        {data.map((p) => (
          <Card key={p.id} pokemon={p} />
        ))}
      </SeeAllContainer>
    </Container>
  );
}
