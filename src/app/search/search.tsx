"use client";
import { useSearch } from "@/hooks";
import { Card } from "../components/card";
import { Container, SeeAllContainer } from "../seeAll/style";
import { SearchInput } from "./components/searchInput";

export function Search() {
  const { getValueInput, data } = useSearch();

  return (
    <Container>
      <SearchInput onChange={getValueInput} />
      <SeeAllContainer $marginTop={4}>
        {data.map((p) => (
          <Card key={p.id} pokemon={p} />
        ))}
      </SeeAllContainer>
    </Container>
  );
}
