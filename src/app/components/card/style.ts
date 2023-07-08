import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 180px;
  height: 240px;
  background-color: ${(props) => props.theme.backgroundCard};
  position: relative;
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  span {
    color: ${(props) => props.theme.colors.gray300};
  }
`;

export const Heart = styled.div`
  position: absolute;
  top: 11px;
  right: 9px;
  cursor: pointer;
`;
export const ImagemContainer = styled.div`
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
  fire: {
    background: "#FF3326",
    color: "#fffafa",
  },
  water: {
    background: "blue",
    color: "#fffafa",
  },
  grass: {
    background: "green",
    color: "#fffafa",
  },
  flying: {
    background: "lightblue",
    color: "black",
  },
  fighting: {
    background: "orange",
    color: "black",
  },
  poison: {
    background: "purple",
    color: "#fffafa",
  },
  electric: {
    background: "#FFCB05",
    color: "black",
  },
  ground: {
    background: "brown",
    color: "#fffafa",
  },
  rock: {
    background: "gray",
    color: "white",
  },
  psychic: {
    background: "pink",
    color: "black",
  },
  ice: {
    background: "lightblue",
    color: "black",
  },
  bug: {
    background: "green",
    color: "#fffafa",
  },
  ghost: {
    background: "purple",
    color: "#fffafa",
  },
  steel: {
    background: "gray",
    color: "black",
  },
  dragon: {
    background: "darkblue",
    color: "#fffafa",
  },
  dark: {
    background: "black",
    color: "#fffafa",
  },
  fairy: {
    background: "pink",
    color: "black",
  },
  normal: {
    background: "#FFCB05",
    color: "black",
  },
};
export const TypePokemon = styled.li<{ type: string }>`
  list-style: none;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.3rem 1rem;
  color: ${(p) => typesPokemons[p.type as keyof typeof typesPokemons].color};
  background-color: ${(p) =>
    typesPokemons[p.type as keyof typeof typesPokemons].background};
  border-radius: 8px;
  text-align: center;
`;
