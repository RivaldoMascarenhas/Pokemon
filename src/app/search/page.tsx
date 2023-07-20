"use client";
import { useSearch } from "@/hooks";
import { Card } from "../components/card";
import { SearchInput } from "./components/searchInput";
import { Container, SeeAllContainer } from "../seeAll/style";

export default function Search() {
  const { handleGetValueInput, data } = useSearch();
  return (
    <Container>
      <div>
        <SearchInput
          onChange={handleGetValueInput}
          placeholder="Digite o nome de um Pokemon"
        />
        <SeeAllContainer>
          {data.map((p) => (
            <Card key={p.id} pokemon={p} />
          ))}
        </SeeAllContainer>
      </div>
    </Container>
  );
}
