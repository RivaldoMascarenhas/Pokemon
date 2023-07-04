import { styled } from "styled-components";

export const SeeAllContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(10rem, 1fr)
  ); /* Define a largura das colunas */
  grid-gap: 1rem;
  padding: 0.5rem;
`;
