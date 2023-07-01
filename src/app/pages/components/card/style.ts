import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 10.31rem;
  height: 14.75rem;
  background-color: ${(props) => props.theme.backgroundCard};
  position: relative;
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme.colors.gray300};
  }
`;
export const Loading = styled.div`
  width: 10.31rem;
  height: 14.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Heart = styled.div`
  position: absolute;
  top: 11px;
  right: 9px;
`;
export const ImagemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NamePokemon = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
`;

export const TypeContainer = styled.ul`
  display: flex;
  gap: 0.5rem;
`;
const typesPokemons = {
  fire: "red",
  water: "blue",
  grass: "green",
  flying: "lightblue",
  fighting: "orange",
  poison: "purple",
  electric: "yellow",
  ground: "brown",
  rock: "gray",
  psychic: "pink",
  ice: "lightblue",
  bug: "green",
  ghost: "purple",
  steel: "gray",
  dragon: "darkblue",
  dark: "black",
  fairy: "pink",
};
export const TypePokemon = styled.li`
  list-style: none;
  font-size: 0.5rem;
  padding: 0.5rem;
  color: white;
  background-color: ${(p) => typesPokemons[p.type]};
  border-radius: 8px;
  text-align: center;
`;

export const Button = styled.button``;
